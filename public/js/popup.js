import AudioAnalyser from './audioAnalyser';

const px = value => `${value}px`;

export default class Popup {
  constructor(el) {
    this.el = el;
    this.button = el.querySelector('.button');
    this.brightnessControl = el.querySelector('.brightness-bar');
    this.contrastControl = el.querySelector('.contrast-bar');
    this.indicator = el.querySelector('.popup_audio-indicator');
    this.video = el.querySelector('.popup_video');

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioAnalyser = AudioContext ? new AudioAnalyser(this.indicator, AudioContext) : null;

    this.brightness = '';
    this.contrast = '';
    this.sourceEl = null;
    this.sourceBaseDestination = null;
    this.isOpen = false;
    this.animationDuration = 2000;

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
    this.sourceEl.style.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%)`;
  }

  init() {
    this.audioAnalyser.init(this.sourceEl);
    this.initFilter();
    const contentRect = this.sourceEl.getBoundingClientRect();
    // set popup start size
    Object.assign(this.el.style, {
      top: px(contentRect.top),
      left: px(contentRect.left),
      width: px(contentRect.width),
      height: px(contentRect.height),
      display: 'block',
    });
  }

  clear() {
    this.audioAnalyser.drop();
  }

  open(sourceEl) {
    if (this.isOpen) {
      return;
    } else {
      this.isOpen = true;
    }

    this.sourceEl = sourceEl;

    this.init();

    requestAnimationFrame(() => this.el.classList.toggle('popup_open'));

    this.sourceBaseDestination = this.sourceEl.parentElement;
    // reserve place at this.sourceEl paren element
    Object.assign(this.sourceBaseDestination.style, {
      height: px(this.sourceBaseDestination.getBoundingClientRect().height),
    });

    this.sourceEl.pause();
    this.video.appendChild(this.sourceEl);
    this.sourceEl.play();
    this.sourceEl.muted = false;
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.sourceEl.pause();

    const destinationRect = this.sourceBaseDestination.getBoundingClientRect();
    // set popup end size
    Object.assign(this.el.style, {
      top: px(destinationRect.top),
      left: px(destinationRect.left),
      width: px(destinationRect.width),
      height: px(this.video.clientHeight * destinationRect.width / this.video.clientWidth),
    });

    // reserve place at this.sourceEl paren element
    Object.assign(this.sourceBaseDestination.style, {
      height: px(Math.floor(this.video.clientHeight * destinationRect.width / this.video.clientWidth)),
    });

    requestAnimationFrame(() => this.el.classList.toggle('popup_open'));
    setTimeout(() => {
      this.sourceBaseDestination.appendChild(this.sourceEl);

      // clear reserved place at this.sourceEl paren element
      Object.assign(this.sourceBaseDestination.style, {
        height: null,
      });

      this.el.style.display = 'none';
      this.sourceEl.play();
      this.isOpen = false;
    }, this.animationDuration);

    this.sourceEl.muted = true;
    this.clear();
  }
}
