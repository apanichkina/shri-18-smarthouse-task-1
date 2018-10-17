import { AudioAnalyser } from './audioAnalyser';

const px = value => `${value}px`;

export class CanvasVideo {
  constructor(canvas) {
    this.el = canvas;
    this.context = canvas.getContext('2d');

    this.video = null;
    this.cw = canvas.clientWidth;
    this.ch = canvas.clientHeight;

    this.needDraw = false;
  }

  init(v) {
    this.video = v;
    this.cw = this.el.clientWidth;
    this.ch = v.clientHeight * this.cw / v.clientWidth;
    this.el.width = this.cw;
    this.el.height = this.ch;

    this.needDraw = true;
    this.draw();
  }

  draw() {
    console.log('draW ', this.video)
    if (!this.needDraw || (!this.video.played && (this.video.paused || this.video.ended))) {
      return false;
    }
    this.context.drawImage(this.video, 0, 0, this.cw, this.ch);

    return requestAnimationFrame(() => this.draw());
  }

  drawStop() {
    this.needDraw = false;
  }
}

export class Popup {
  constructor(el) {
    this.el = el;
    this.button = el.querySelector('.button');
    this.brightnessControl = el.querySelector('.brightness-bar');
    this.contrastControl = el.querySelector('.contrast-bar');
    this.indicator = el.querySelector('.popup_audio-indicator');
    this.video = el.querySelector('.popup_video');

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioAnalyser = AudioContext ? new AudioAnalyser(this.indicator, AudioContext) : null;
    this.canvasVideo = new CanvasVideo(this.video);

    this.brightness = '';
    this.contrast = '';
    this.sourceEl = null;

    this.initListeners();
  }

  initListeners() {
    this.button.addEventListener('click', () => {
      this.close();
    });

    this.brightnessControl.addEventListener('input', (evt) => {
      this.brightness = evt.target.value;
      this.setFilter();
    });

    this.contrastControl.addEventListener('input', (evt) => {
      this.contrast = evt.target.value;
      this.setFilter();
    });
  }

  initFilter() {
    const styleInitial = this.sourceEl.style.filter || '';
    const contrast = styleInitial.match(/contrast\((\d+)%\)/i);
    const brightness = styleInitial.match(/brightness\((\d+)%\)/i);

    this.contrast = contrast ? contrast[1] : 100;
    this.brightness = brightness ? brightness[1] : 100;

    this.brightnessControl.value = this.brightness;
    this.contrastControl.value = this.contrast;

    this.setFilter();
  }

  setFilter() {
    this.video.style.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%)`;
  }

  init() {
    this.initFilter();
    const contentRect = this.sourceEl.getBoundingClientRect();
    Object.assign(this.el.style, {
      top: px(contentRect.top),
      left: px(contentRect.left),
      width: px(contentRect.width),
      height: px(contentRect.height),
      display: 'block',
    });

    this.audioAnalyser.init(this.sourceEl);

    requestAnimationFrame(() => this.el.classList.toggle('popup_open'));

    this.canvasVideo.init(this.sourceEl);
  }

  clear() {
    this.canvasVideo.drawStop();
  }

  open(sourceEl) {
    this.sourceEl = sourceEl;
    this.init();
  }

  close() {
    this.sourceEl.style.filter = this.video.style.filter;

    requestAnimationFrame(() => this.el.classList.toggle('popup_open'));
    setTimeout(() => { this.el.style.display = 'none'; }, 2000);
    this.sourceEl.muted = true;
    this.audioAnalyser.drop();
    this.clear();
  }
}
