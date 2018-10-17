export function initVideo(video, url) {
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.addEventListener('loadedmetadata', function () {
      video.play();
    });
  }
}

export function initControls(brightnessFilterEl, contrastFilterEl, brightnessControl, contrastControl) {
  const initialBrightness = 100;
  const initialContrast = 100;

  brightnessFilterEl.filter = `brightness(${initialBrightness}%)`;
  contrastFilterEl.filter = `contrast(${initialContrast}%)`;
  brightnessControl.value = `${initialBrightness}`;
  contrastControl.value = `${initialContrast}`;

  brightnessControl.addEventListener('input', (evt) => {
    brightnessFilterEl.style.filter = `brightness(${evt.target.value}%)`;
  });

  contrastControl.addEventListener('input', (evt) => {
    contrastFilterEl.style.filter = `contrast(${evt.target.value}%)`;
  })

}

function draw(){

  // fill vertically
  var vratio = (c.height / v.videoHeight) * v.videoWidth;
  ctx.drawImage(v, 0,0, vratio, c.height);

  // fill horizontally
  var hratio = (c.width / v.videoWidth) * v.videoHeight;
  ctx1.drawImage(v, 0,0, c1.width, hratio);

  requestAnimationFrame(draw);
}
//
//
// var c=document.createElement('canvas');
// c.width = 640;
// c.height= 480;
// var ctx = c.getContext('2d')
//
// var c1 = c.cloneNode(true);
// var ctx1 = c1.getContext('2d')
//
// var v = document.createElement('video');
// v.controls=true;
//
// document.body.appendChild(document.createTextNode('fill vertical\n'));
// document.body.appendChild(c);
// document.body.appendChild(document.createTextNode('fill horizontal\n'));
// document.body.appendChild(c1);
// document.body.appendChild(document.createTextNode('original'));
// document.body.appendChild(v);
//
// var anim;
// v.onplaying = function(){
//   anim = requestAnimationFrame(draw);
// };
// v.onpause= function(){
//   cancelAnimationFrame(anim);
// };
//
// v.onloadedmetadata = function(){v.play();};
// v.src = 'http://media.w3.org/2010/05/sintel/trailer.mp4';
// var inputs = document.querySelectorAll('input');
// inputs[0].addEventListener('change', inpHandler);
// inputs[1].addEventListener('change', inpHandler);
// function inpHandler(){
//   c[this.name]=this.value;
//   c1[this.name]=this.value;
//   v.currentTime=0;
//   v.play();
// }
