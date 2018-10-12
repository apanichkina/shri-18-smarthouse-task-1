const PROPS_XY = ['x', 'y'];
const PROPS_CLIENT_XY = ['clientX', 'clientY'];


// helpers

function throttle(func, ms) {
  // https://learn.javascript.ru/task/throttle
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

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
      this.img = el.querySelector("img");
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

  // change brightness of this.img
  updateFilter(dBrightness) {
    this.nodeState = {...this.nodeState, dBrightness};
    this.img.style.filter = `brightness(${this.nodeState.brightness + dBrightness}%)`;
  }

   // change zoom of this.el
   updateScale(dScale) {
     const {
       scale,
     } = this.nodeState;
     const scaleValue = dScale || scale;

     this.img.style.transform = `scale(${scaleValue})`;

     this.nodeState = {
       ...this.nodeState,
       scale: scaleValue,
     };
   }

  // change position of this.el
  updatePosition(dX, dY) {
    console.log('updateTransform', dX, dY);
    const {
      startPositionX,
      startPositionY,
    } = this.nodeState;
    const xValue = startPositionX + dX;
    const yValue = startPositionY + dY;

    this.el.style.transform = `translate3d(${xValue}px, ${yValue}px, 0)`;

    this.nodeState = {
      ...this.nodeState,
      startPositionX:  xValue,
      startPositionY:  yValue,
    };

  }

  onPointerDown(event) {
    if (!this.elClientRect) {
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

    // console.log(event.type);
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

    this.selectEvent(event);
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


  checkSwipe(event) {
    console.log(event.type, 'swipe');

    const {prevX, prevY} = this.currentGesture;
    const {startPositionX, startPositionY} = this.nodeState;
    const {x, y} = event;
    let dx = x - prevX;
    let dy = y - prevY;

    this.updatePosition(dx, dy);

    const ts = Date.now();

    this.currentGesture.prevX = x;
    this.currentGesture.prevY = y;
    this.currentGesture.prevTs = ts;

  }

  checkRotate(event) {
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

  checkPinch(event) {
    console.log(event.type, 'pinch');

    if (!this.firstMulti.length) {
      return false
    }

    const scale = getScale(this.firstMulti, this.pointers);
    this.updateScale(scale);

    return true
  }

  selectEvent(event) {
    if (!this.pointers.length) {
      return
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

  init() {
    const {dBrightness} = this.nodeState;

    this.updateFilter(dBrightness);
    this.updatePosition(0,0);
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

export {InteractiveElement}





