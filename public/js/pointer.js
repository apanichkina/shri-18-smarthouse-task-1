var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];
let currentGesture = null;
const nodeState = {
  startPositionX: 0,
  startPositionY: 0,
  brightness: 80,
  dBrightness: 0,
  scale: 1
};



export default function processPointer() {
  const camera = document.getElementById('camera');

  camera.style.filter = `brightness(${nodeState.brightness + nodeState.dBrightness}%)`;
  camera.style.transform = `translate3d(${nodeState.startPositionX}px, ${nodeState.startPositionY}px, 0) scale(${nodeState.scale})`;
  if (!window.PointerEvent) {
    // traditional touch/mouse event handlers
    camera.addEventListener('touchstart', function (e) {
      // prevent compatibility mouse events and click
      e.preventDefault();
      console.log('touchstart camera');

    });

    camera.addEventListener('mousedown', function (e) {
      console.log('mousedown camera');
    });

    return
  }

  // if Pointer Events are supported, only listen to pointer events
  camera.addEventListener("pointerdown", function (e) {
    // if necessary, apply separate logic based on e.pointerType
    // for different touch/pen/mouse behavior
    // console.log('pointerdown camera');
  });

  // let currentGesture = null;

  // const posX = window.getComputedStyle(camera).getPropertyValue("background-position-x");
  // parseInt(posX, 10)

  const basePosition =  camera.getBoundingClientRect();
  // console.log(basePosition)

  // const nodeState = {
  //   startPositionX: 0,
  //   startPositionY: 0
  // };

  let pointers = [];
  let firstMulti = [];

  camera.addEventListener('pointerdown', (event) => {
    if (pointers.length === 1 && !firstMulti.length) {
      pointers.push(event);
      firstMulti = pointers.slice()
    } else {
      pointers.push(event);
    }


    // message.style.transition = 'none';

    // Нужно для десктопа чтобы поймать pointerup вне DOM-ноды
    camera.setPointerCapture(event.pointerId);

    currentGesture = {
      startX: event.x,
      startY: event.y,
      prevX: event.x,
      prevTs: Date.now(),
      startPositionX: nodeState.startPositionX,
      startPositionY: nodeState.startPositionY,
      brightness: nodeState.brightness,
      scale: nodeState.scale
    };

    // console.log(event.type, event, currentGesture);
    // console.log(pointers)
  });

  camera.addEventListener('pointermove', (event) => {
    if (!currentGesture) {
      return
    }

    for (let i=0; i < pointers.length; ++i) {
      if (pointers[i].pointerId === event.pointerId) {
        pointers.splice(i, 1, event);
        break
      }
    }

    selectEvent(firstMulti, pointers)
    console.log(firstMulti, pointers)

  });

  camera.addEventListener('pointerleave', (event) => {
    for (let i=0; i < pointers.length; ++i) {
      if (pointers[i].pointerId === event.pointerId) {
        pointers.splice(i, 1);
        break
      }
    }

    if (pointers.length === 1) {
      firstMulti = []
    }


    // console.log(event.type);
    // console.log(pointers)
  });

  camera.addEventListener('gotpointercapture', (event) => {
    // console.log(event.type);
  });

  camera.addEventListener('lostpointercapture', (event) => {
    // console.log(event.type);
  });
}

function selectEvent(firstMulti, pointers) {
  if (!pointers.length) {
    return
  }
  if (pointers.length === 1) {
    checkSwipe();
  } else {
    checkRotate(firstMulti, pointers);
    checkPinch(firstMulti, pointers);
  }

  // const rotate = checkRotate();
  // const pinch = checkPinch();

  const type = ''

  switch (type) {
    case 'swipe':
      break
    case 'rotate':
      break
    case 'pinch':
      break
    default:
      break
  }

  // input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
  //
  //
  //
  // input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
}

function checkPinch(firstMulti, pointers) {
  if (!firstMulti.length) {
    return
  }
  const scale = getScale(firstMulti, pointers);
  nodeState.scale = scale;

  const { startPositionX, startPositionY } = currentGesture;
  camera.style.transform = `translate3d(${startPositionX}px, ${startPositionY}px, 0) scale(${scale})`;
  console.log('scale:', scale)
}

function checkRotate(firstMulti, pointers) {
  if (!firstMulti.length) {
    return
  }
  const rotate = getRotation(firstMulti, pointers)
  console.log('dr', (rotate / 360) * 100)
  const prevr = nodeState.dBrightness
  const dr = (rotate / 360) * 100
  if (Math.abs(dr - prevr) > 5) {
    nodeState.dBrightness = dr
    camera.style.filter = `brightness(${nodeState.brightness + nodeState.dBrightness}%)`;
  }



  // console.log('rotate:', rotate)
}

function checkSwipe() {
  console.log(event.type, event,  currentGesture);

  const { startX, startY, startPositionX, startPositionY, scale } = currentGesture;
  const { x, y } = event;
  const dx = x - startX;
  const dy = y - startY;
  const newPositionX = startPositionX + dx;
  const newPositionY = startPositionY + dy;
  camera.style.transform = `translate3d(${newPositionX}px, ${newPositionY}px, 0) scale(${scale})`;
  // camera.style.transform = `translateY(${newPositionY}px)`;
  const ts = Date.now();

  currentGesture.prevX = x;
  currentGesture.prevTs = ts;
  nodeState.startPositionX = newPositionX;
  nodeState.startPositionY = newPositionY;
  // console.log(camera.getBoundingClientRect())
}

function getDistance(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];

  return Math.sqrt(x * x + y * y);
}

/**
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}






/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
  const startAngle = getAngle(start[1], start[0], PROPS_CLIENT_XY)
  const endAngle = getAngle(end[1], end[0], PROPS_CLIENT_XY)
  if (Math.abs(startAngle) >= Math.abs(endAngle)) {
    return startAngle
  } else {
    return endAngle
  }
  // return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * @private
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];

  return Math.atan2(y, x) * 180 / Math.PI;
}


