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
  const style = `transform: translate3d(${layoutRect.x - contentRect.x}px,${layoutRect.y - contentRect.y}px, 0) scale(${layoutRect.width/contentRect.width}, ${(layoutRect.height)/contentRect.height})`;
  // const style = `transform: translateZ(0); width: ${layoutRect.width}px; height: ${layoutRect.height}px;`;

  console.log(style);
  content.style = style;
  control.style = `transform: scale(${1 / (layoutRect.width/contentRect.width)}, ${1 /((layoutRect.height)/contentRect.height)})`;

}

export default function(content, video) {
  const popup = document.getElementById('popup');
  const button = popup.querySelector('.button')
  const parent = content.parentNode;
  const parentRect = parent.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();
  const tempEl = document.getElementById('popup-temp');
  tempEl.style = `width:${contentRect.width}px; height:${contentRect.height}px;`;
  //'top:${contentRect.top}px; left:${contentRect.left}px;'
  // width:${contentRect.width}px; height:${contentRect.height}px;
  let style =  `top:${contentRect.top}px; left:${contentRect.left}px; width:${contentRect.width}px; height:${contentRect.height}px; display: block;`;
  popup.style = style;
  // parent.replaceChild(tempEl, content);
  // popup.style = `right:${contentRect.right}px; bottom:${contentRect.bottom}px; display: block;`;

  // const style =  `top:0; left:0; width:100%; height:100%;`;

  // analyseAudio(video, document.getElementById('canvasPopup'));
  requestAnimationFrame(() => {popup.classList.toggle('popup_open')})
  canvasVideo(video);

  // parent.replaceChild(tempEl, content);
  // popup.appendChild(content);
  // popup.style.position = 'absolute';


// const popupParent = popup.parentElement.classList.add('popup_show');
// popup.style = `left: ${contentRect.left}px; top: ${contentRect.top}px;`;
}

function canvasVideo(v, needDraw) {
    var canvas = document.getElementById('c');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var back = document.createElement('canvas');
    var backcontext = back.getContext('2d');

    var cw,ch;

  v.addEventListener('play', function() {
      // console.log('play', v)
      cw = v.clientWidth;
      ch = v.clientHeight;
      canvas.width = cw;
      canvas.height = ch;
      back.width = cw;
      back.height = ch;
      draw(v, context, backcontext, cw, ch);
      // if(needDraw.value) {
      //   requestAnimationFrame(() => draw(v,c,bc,w,h));
      // }
    // draw(v,c,bc,w,h)
    }, {once: true});


  function draw(v,c,bc,w,h) {
    // console.log(v)
    if(v.paused || v.ended) return false;
    // First, draw it into the backing canvas
    bc.drawImage(v,0,0,w,h);
    // Grab the pixel data from the backing canvas
    var idata = bc.getImageData(0,0,w,h);
    var data = idata.data;
    // Loop through the pixels, turning them grayscale
    for(var i = 0; i < data.length; i+=4) {
      var r = data[i];
      var g = data[i+1];
      var b = data[i+2];
      var brightness = (3*r+4*g+b)>>>3;
      data[i] = brightness;
      data[i+1] = brightness;
      data[i+2] = brightness;
    }
    idata.data.set(data);
    // bc.putImageData(data,w,h);
    // Draw the pixels onto the visible canvas
    c.putImageData(idata,0,0);
    // Start over!
    requestAnimationFrame(() => draw(v,c,bc,w,h));
  }
}
