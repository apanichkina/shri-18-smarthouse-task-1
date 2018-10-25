import AudioAnalyser from './audioAnalyser';

const px = (value: number | string): string => `${value}px`;

declare global  {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

export default class Popup {
  public el: HTMLDivElement;
  public button: HTMLButtonElement;
  public brightnessControl: HTMLInputElement;
  public contrastControl: HTMLInputElement;
  public indicator: HTMLCanvasElement;
  public video: HTMLDivElement;

  public audioAnalyser: AudioAnalyser;

  public brightness: string;
  public contrast: string;
  public sourceEl: HTMLVideoElement;
  public sourceBaseDestination: HTMLElement;
  public isOpen: boolean;
  public animationDuration: number;

  constructor(el) {
    this.el = el;
    this.button = el.querySelector('.button');
    this.brightnessControl = el.querySelector('.brightness-bar');
    this.contrastControl = el.querySelector('.contrast-bar');
    this.indicator = el.querySelector('.popup_audio-indicator');
    this.video = el.querySelector('.popup_video');

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioAnalyser = new AudioAnalyser(this.indicator, AudioContext);

    this.brightness = '100';
    this.contrast = '100';
    this.sourceEl = null;
    this.sourceBaseDestination = null;
    this.isOpen = false;
    this.animationDuration = 2000;

    this.initListeners();
  }

  public initListeners(): void {
    this.button.addEventListener('click', () => {
      this.close();
    });

    this.brightnessControl.addEventListener('input', (evt) => {
      const target: EventTarget = evt.target;

      if (target && target instanceof HTMLInputElement) {
        this.brightness = target.value;
        this.setFilter();
      }
    });

    this.contrastControl.addEventListener('input', (evt) => {
      const target: EventTarget = evt.target;

      if (target && target instanceof HTMLInputElement) {
        this.contrast = target.value;
        this.setFilter();
      }
    });
  }

  public initFilter(): void {
    const styleInitial = this.sourceEl.style.filter || '';
    const contrast = styleInitial.match(/contrast\((\d+)%\)/i);
    const brightness = styleInitial.match(/brightness\((\d+)%\)/i);

    this.contrast = contrast ? contrast[1] : '100';
    this.brightness = brightness ? brightness[1] : '100';

    this.brightnessControl.value = this.brightness;
    this.contrastControl.value = this.contrast;

    this.setFilter();
  }

  public setFilter(): void {
    this.sourceEl.style.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%)`;
  }

  public init(): void {
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

  public clear(): void {
    this.audioAnalyser.drop();
  }

  public open(sourceEl: HTMLVideoElement): void {
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

  public close(): void {
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
