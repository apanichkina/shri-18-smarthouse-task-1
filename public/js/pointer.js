const PROPS_XY = ['x', 'y'];
const PROPS_CLIENT_XY = ['clientX', 'clientY'];


// helpers

function getAngle(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];

  return Math.atan2(y, x) * 180 / Math.PI;
}

function getDistance(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];

  return Math.sqrt(x * x + y * y);
}

function getRotation(start, end) {
  const startAngle = getAngle(start[1], start[0], PROPS_CLIENT_XY);
  const endAngle = getAngle(end[1], end[0], PROPS_CLIENT_XY);
  let result = '';

  if (Math.abs(startAngle) >= Math.abs(endAngle)) {
    result = startAngle
  } else {
    result = endAngle
  }

  return result
}

function getScale(start, end) {
  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

//
 class InteractiveElement {
  constructor(el) {
    if (el && window.PointerEvent) {
      this.el = el;
      this.parent = this.el.parentNode;
      this.currentGesture = null;
      this.nodeState = {
        startPositionX: 0,
        startPositionY: 0,
        brightness: 80,
        dBrightness: 0,
        scale: 1
      };
      this.pointers = []; // array of active pointers
      this.firstMulti = [];// pointers copy ad the moment of start multitouch
      this.elClientRect = null;
      this.paretnClientRect = null;
      this.init()
    }
  }

  // change brightness of this.el
  updateFilter(dBrightness) {
    this.nodeState = {...this.nodeState, dBrightness};
    this.el.style.filter = `brightness(${this.nodeState.brightness + dBrightness}%)`;
  }

  // change scale and position of this.el
  updateTransform(translateNew, scaleNew) {
    const {
      startPositionX = this.nodeState.startPositionX,
      startPositionY = this.nodeState.startPositionY,
    } = translateNew;
    const scaleValue = scaleNew || this.nodeState.scale;  // Math.max((scaleNew || this.nodeState.scale), 1);
    const translate3d = `translate3d(${startPositionX}px, ${startPositionY}px, 0)`;
    const scale = `scale(${scaleValue})`;

    this.nodeState = {
      ...this.nodeState,
      ...translateNew,
      scale: scaleValue,
      startPositionX,
      startPositionY
    };


    this.el.style.transform = translate3d + scale;


    // const validPositionX = Math.max(Math.min(newPositionX, 0), this.paretnClientRect.width - this.el.getBoundingClientRect().width);
    // const validPositionY = Math.max(Math.min(newPositionY, 0), this.paretnClientRect.height - this.elClientRect.height * scale);

    // if (scaleNew !== scaleValue || scaleValue !== 1) {
    //   const scaledPositionX = startPositionX + (this.elClientRect.width * (scaleValue - 1) / 2);
    //   const scaledPositionY = startPositionX + (this.elClientRect.width * (scaleValue - 1) / 2);
    //
    //   this.nodeState.startPositionX = scaledPositionX;
    //   this.nodeState.startPositionY = startPositionY;
    // }

    console.log(this.el.getBoundingClientRect())

  }

  onPointerDown(event) {
    if (!this.baseClientRect) {
      this.elClientRect = this.el.getBoundingClientRect();
      this.paretnClientRect = this.parent.getBoundingClientRect();
    }
    this.el.setPointerCapture(event.pointerId);

    if (!this.firstMulti.length && this.pointers.length === 1) { // detect start of mulitouch (2 points)
      this.pointers.push(event);
      this.firstMulti = this.pointers.slice()
    } else { // has 1 or >= 3 pointers
      this.pointers.push(event);
    }

    this.currentGesture = {
      prevX: event.x,
      prevY: event.y,
      prevTs: Date.now(),
    };

    console.log(event.type);
  }

  onPointerMove(event) {

    if (!this.currentGesture) {
      return
    }

    // update known pointers data
    for (let i = 0; i < this.pointers.length; ++i) {
      if (this.pointers[i].pointerId === event.pointerId) {
        this.pointers.splice(i, 1, event);
        break;
      }
    }

    this.selectEvent();
  }

  onPointerLeave(event) {

    for (let i = 0; i < this.pointers.length; ++i) {
      if (this.pointers[i].pointerId === event.pointerId) {
        this.pointers.splice(i, 1);
        break
      }
    }

    if (this.pointers.length === 1) {
      this.firstMulti = []
    }
  }


  checkSwipe() {
    console.log(event.type, 'swipe');

    const {prevX, prevY} = this.currentGesture;
    const {startPositionX, startPositionY, scale} = this.nodeState;
    const {x, y} = event;
    let dx = x - prevX;
    let dy = y - prevY;
    const newPositionX = startPositionX + dx;
    const newPositionY = startPositionY + dy;


    this.updateTransform({startPositionX: newPositionX, startPositionY: newPositionY}, null);

    const ts = Date.now();

    this.currentGesture.prevX = x;
    this.currentGesture.prevY = y;
    this.currentGesture.prevTs = ts;

  }

  checkRotate() {
    console.log(event.type, 'rotate');

    if (!this.firstMulti.length) {
      return false
    }

    const {dBrightness} = this.nodeState;
    const rotate = getRotation(this.firstMulti, this.pointers);
    const dr = (rotate / 360) * 100;

    if (Math.abs(dr - dBrightness) < 5) {
      return false

    }

    this.updateFilter(dr);

    return true
  }

  checkPinch() {
    console.log(event.type, 'pinch');

    if (!this.firstMulti.length) {
      return false
    }

    const scale = getScale(this.firstMulti, this.pointers);
    this.updateTransform({}, scale);

    return true
  }

  selectEvent() {
    if (!this.pointers.length) {
      return
    }

    if (this.pointers.length === 1) {
      this.checkSwipe();
    } else {
      const hasRotate = this.checkRotate();

      if (!hasRotate) {
        this.checkPinch();
      }
    }
  }

  init() {
    const {startPositionX, startPositionY, scale, dBrightness} = this.nodeState;

    this.updateFilter(dBrightness);
    this.updateTransform({startPositionX, startPositionY}, scale);

    this.el.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.el.addEventListener('pointermove', this.onPointerMove.bind(this));
    this.el.addEventListener('pointerleave', this.onPointerLeave.bind(this));

    this.el.addEventListener('gotpointercapture', (event) => {
      // console.log(event.type);
    });

    this.el.addEventListener('lostpointercapture', (event) => {
      // console.log(event.type);
    });

  }
}

export {InteractiveElement}





