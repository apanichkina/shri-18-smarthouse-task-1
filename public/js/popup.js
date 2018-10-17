import analyseAudio from './audioAnalyser';

export function bb(content) {
  console.log(content);
  const layout = document.getElementById('content__layout');
  const layoutRect = layout.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();
  const control = content.querySelector('.video-control__wrapper');
  const parent = content.parentElement;


  const parentRect = parent.getBoundingClientRect();
  parent.style.width = `${parentRect.width}.px`;
  parent.style.height = `${parentRect.height}.px`;

  content.style = `position: absolute; top:${parentRect.top}; left${parentRect.left};`;


  console.log(layout.getBoundingClientRect());
  console.log(layout.clientHeight);
  console.log(content.getBoundingClientRect());
  console.log(content.clientHeight);
  const style = `transform: translate3d(${layoutRect.x - contentRect.x}px,${layoutRect.y - contentRect.y}px, 0) scale(${layoutRect.width / contentRect.width}, ${(layoutRect.height) / contentRect.height})`;
  // const style = `transform: translateZ(0); width: ${layoutRect.width}px; height: ${layoutRect.height}px;`;

  console.log(style);
  content.style = style;
  control.style = `transform: scale(${1 / (layoutRect.width / contentRect.width)}, ${1 / ((layoutRect.height) / contentRect.height)})`;
}
const px = value => `${value}px`;


function initControls(el, elBase, brightnessControl, contrastControl) {
  let brightness = 100;
  let contrast = 100;
  let styleFilter = '';

  el.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

  brightnessControl.addEventListener('input', (evt) => {
    brightness = evt.target.value;
    styleFilter = `brightness(${brightness}%) contrast(${contrast}%)`;

    el.style.filter = styleFilter;
    elBase.style.filter = styleFilter;
  });

  contrastControl.addEventListener('input', (evt) => {
    contrast = evt.target.value;
    styleFilter = `brightness(${brightness}%) contrast(${contrast}%)`;

    el.style.filter = styleFilter;
    elBase.style.filter = styleFilter;
  });
}

export default function (content, video) {
  const popup = document.getElementById('popup');
  // const button = popup.querySelector('.button');
  // const parent = content.parentNode;
  // const parentRect = parent.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  Object.assign(popup.style, {
    top: px(contentRect.top),
    left: px(contentRect.left),
    width: px(contentRect.width),
    height: px(contentRect.height),
    display: 'block',
  }); // TODO возможно надо popup.style = Object.assign({}, ...)

  analyseAudio(video, document.getElementById('canvasPopup'));
  requestAnimationFrame(() => { console.log('popup_open'); popup.classList.toggle('popup_open'); });


  const videoBrightnessControl = popup.querySelector('.brightness-bar');
  const videoContrastControl = popup.querySelector('.contrast-bar');
  const canvas = document.getElementById('c');
  initControls(canvas, video, videoBrightnessControl, videoContrastControl);
  canvasVideo(video, canvas);
}

function canvasVideo(v, canvas, needDraw) {
  console.log(v);
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let cw; let ch;

  v.addEventListener('play', () => {
    // console.log('play', v)
    cw = v.clientWidth;
    ch = v.clientHeight;
    canvas.width = cw;
    canvas.height = ch;
    draw(v, context, cw, ch);
    // if(needDraw.value) {
    //   requestAnimationFrame(() => draw(v,c,bc,w,h));
    // }
    // draw(v,c,bc,w,h)
  }, { once: true });


  function draw(v, c, w, h) {
    // console.log(v)
    if (v.paused || v.ended) return false;
    c.drawImage(v, 0, 0, w, h);
    // Start over!
    requestAnimationFrame(() => draw(v, c, w, h));
  }
}
