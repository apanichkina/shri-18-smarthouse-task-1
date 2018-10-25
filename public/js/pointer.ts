const PROPS_XY = ['x', 'y'];
const PROPS_CLIENT_XY = ['clientX', 'clientY'];
const MIN_SCALE = 1;
const MAX_SCALE = 10;

// helpers

function throttle(func, ms) {
  // https://learn.javascript.ru/task/throttle
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function getAngle(p1: PointerEvent, p2: PointerEvent, useProps): number {
  const props = useProps || PROPS_XY;

  const x = p2[props[0]] - p1[props[0]];
  const y = p2[props[1]] - p1[props[1]];

  return Math.atan2(y, x) * 180 / Math.PI;
}

function getDistance(p1: PointerEvent, p2: PointerEvent, useProps: string[]): number {
  const props = useProps || PROPS_XY;

  const x = p2[props[0]] - p1[props[0]];
  const y = p2[props[1]] - p1[props[1]];

  return Math.sqrt(x * x + y * y);
}

function getRotation(start: PointerEvent[], end: PointerEvent[]): number {
  const startAngle = getAngle(start[1], start[0], PROPS_CLIENT_XY);
  const endAngle = getAngle(end[1], end[0], PROPS_CLIENT_XY);
  let result: number = 0;

  if (Math.abs(startAngle) >= Math.abs(endAngle)) {
    result = startAngle;
  } else {
    result = endAngle;
  }

  return result;
}

function getScale(start: PointerEvent[], end: PointerEvent[]) {
  const endDistance = getDistance(end[0], end[1], PROPS_CLIENT_XY);
  const startDistance = getDistance(start[0], start[1], PROPS_CLIENT_XY);

  return endDistance / startDistance;
}
interface INodeState {
  startPositionX: number
  startPositionY: number
  brightness: number
  dBrightness: number
  scale: number
}

interface IGesture {
  prevX: number,
  prevY: number,
  prevTs: number,
}
//

declare global  {
  interface Window {
    PointerEvent: typeof PointerEvent;
  }
}

export default class InteractiveElement {
  public el: HTMLDivElement;
  public zoomEl: HTMLDivElement;
  public brightEl: HTMLInputElement;
  public img: HTMLImageElement;
  public parent: HTMLElement;
  public currentGesture: IGesture;
  public nodeState: INodeState;
  public pointers: PointerEvent[];
  public firstMulti: PointerEvent[];
  public elClientRect: ClientRect;
  public imgClientRect: ClientRect;
  public parentClientRect: ClientRect;

  constructor(el, zoomEl, brightEl) {
    if (el && window.PointerEvent) {
      this.el = el;
      this.zoomEl = zoomEl;
      this.brightEl = brightEl;
      this.img = el.querySelector('img');
      this.parent = this.el.parentElement; // TODO Node?
      this.currentGesture = null;
      this.nodeState = {
        startPositionX: 0,
        startPositionY: 0,
        brightness: 80,
        dBrightness: 0,
        scale: 1,
      };
      this.pointers = []; // array of active pointers
      this.firstMulti = []; // pointers copy ad the moment of start multitouch
      this.elClientRect = null;
      this.imgClientRect = null;
      this.parentClientRect = null;
    }
  }

  // change brightness of this.img
  public updateFilter(dBrightness): void {
    const result = this.nodeState.brightness + dBrightness;

    this.nodeState = { ...this.nodeState, dBrightness };
    this.img.style.filter = `brightness(${result}%)`;

    this.brightEl.textContent = `${result.toFixed(2)}%`;
  }

  // change zoom of this.el
  public updateScale(dScale): void {
    console.log(dScale);
    const {
      scale,
    } = this.nodeState;
    const scaleValue = scale * (dScale || 1);

    const validScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scaleValue));
    this.img.style.transform = `scale(${validScale})`;

    this.nodeState = {
      ...this.nodeState,
      scale: validScale,
    };

    this.updatePosition(0, 0);
    this.zoomEl.textContent = validScale.toFixed(2);
  }

  // change position of this.el
  public updatePosition(dX, dY): void {
    console.log('updateTransform', dX, dY, this.img.getBoundingClientRect());
    const {
      startPositionX,
      startPositionY,
      scale,
    } = this.nodeState;
    const xValue = startPositionX + dX;
    const yValue = startPositionY + dY;

    // validate X
    const scaleDeltaXPerSide = this.imgClientRect ? this.imgClientRect.width * (scale - 1) / 2 : 0;
    const leftLimit = Math.min(scaleDeltaXPerSide, xValue);

    const rightLimit = this.imgClientRect
      ? (this.imgClientRect.width * (scale + 1) / 2)
      : leftLimit;
    const rightLimitVisible = this.parentClientRect
      ? (rightLimit - this.parentClientRect.width)
      : rightLimit;

    const validX = Math.max(-1 * rightLimitVisible, leftLimit);

    // validate Y
    const scaleDeltaYPerSide = this.imgClientRect ? this.imgClientRect.height * (scale - 1) / 2 : 0;
    const topLimit = Math.min(scaleDeltaYPerSide, yValue);

    const bottomtLimit = this.imgClientRect
      ? (this.imgClientRect.height * (scale + 1) / 2)
      : topLimit;
    const bottomtLimitVisible = this.parentClientRect
      ? (bottomtLimit - this.parentClientRect.height)
      : bottomtLimit;

    const validY = Math.max(-1 * bottomtLimitVisible, topLimit);

    // set computed data
    this.el.style.transform = `translate3d(${validX}px, ${validY}px, 0)`;

    this.nodeState = {
      ...this.nodeState,
      startPositionX: validX,
      startPositionY: validY,
    };
  }

  public onPointerDown(event): void {
    if (!this.elClientRect) {
      this.elClientRect = this.el.getBoundingClientRect();
      this.imgClientRect = this.img.getBoundingClientRect();
      this.parentClientRect = this.parent.getBoundingClientRect();
    }
    this.el.setPointerCapture(event.pointerId);

    // detect start of mulitouch (2 points)
    if (!this.firstMulti.length && this.pointers.length === 1) {
      this.pointers.push(event);
      this.firstMulti = this.pointers.slice();
    } else { // has 1 or >= 3 pointers
      this.pointers.push(event);
    }

    this.currentGesture = {
      prevX: event.x,
      prevY: event.y,
      prevTs: Date.now(),
    };

    // console.log(event.type);
  }

  public onPointerMove(event): void {
    if (!this.currentGesture) {
      return;
    }

    // update known pointers data
    for (let i = 0; i < this.pointers.length; ++i) {
      if (this.pointers[i].pointerId === event.pointerId) {
        this.pointers.splice(i, 1, event);
        break;
      }
    }

    this.selectEvent(event);
  }

  public onPointerLeave(event): void {
    for (let i = 0; i < this.pointers.length; ++i) {
      if (this.pointers[i].pointerId === event.pointerId) {
        this.pointers.splice(i, 1);
        break;
      }
    }

    if (this.pointers.length === 1) {
      this.firstMulti = [];
    }
  }

  public checkSwipe(event): void {
    console.log(event.type, 'swipe');

    const { prevX, prevY } = this.currentGesture;
    const { x, y } = event;
    const dx = x - prevX;
    const dy = y - prevY;

    this.updatePosition(dx, dy);

    const ts = Date.now();

    this.currentGesture.prevX = x;
    this.currentGesture.prevY = y;
    this.currentGesture.prevTs = ts;
  }

  public checkRotate(event): boolean {
    console.log(event.type, 'rotate');

    if (!this.firstMulti.length) {
      return false;
    }

    const { dBrightness } = this.nodeState;
    const rotate = getRotation(this.firstMulti, this.pointers);
    const dr = (rotate / 360) * 100;

    if (Math.abs(dr - dBrightness) < 5) {
      return false;
    }

    this.updateFilter(dr);

    return true;
  }

  public checkPinch(event): boolean {
    console.log(event.type, 'pinch');

    if (!this.firstMulti.length) {
      return false;
    }

    const scale = getScale(this.firstMulti, this.pointers);
    this.updateScale(scale);

    return true;
  }

  public selectEvent(event): void {
    if (!this.pointers.length) {
      return;
    }

    if (this.pointers.length === 1) {
      this.checkSwipe(event);
    } else {
      const hasRotate = this.checkRotate(event);

      if (!hasRotate) {
        this.checkPinch(event);
      }
    }
  }

  public init(): void {
    const { dBrightness } = this.nodeState;

    this.updateFilter(dBrightness);
    this.updatePosition(0, 0);
    this.updateScale(null);

    this.el.addEventListener('pointerdown', throttle(this.onPointerDown, 100).bind(this));
    this.el.addEventListener('pointermove', throttle(this.onPointerMove, 150).bind(this));
    this.el.addEventListener('pointerleave', throttle(this.onPointerLeave, 100).bind(this));

    this.el.addEventListener('gotpointercapture', (event) => {
      // se.log(event.type);
    });

    this.el.addEventListener('lostpointercapture', (event) => {
      // console.log(event.type);
    });
  }
}
