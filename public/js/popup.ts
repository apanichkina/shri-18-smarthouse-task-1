import AudioAnalyser from './audioAnalyser';
import {VideoElementWithMedia} from '../interfaces/video';

const px = (value: number | string): string => `${value}px`;

declare global  {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

export default class Popup {
  public el: HTMLDivElement;
  public button: HTMLButtonElement | null;
  public brightnessControl: HTMLInputElement | null;
  public contrastControl: HTMLInputElement | null;
  public indicator: HTMLCanvasElement | null;
  public video: HTMLDivElement | null;

  public audioAnalyser: AudioAnalyser | null;

  public brightness: string;
  public contrast: string;
  public sourceEl: HTMLVideoElement | null;
  public sourceBaseDestination: HTMLElement | null;
  public isOpen: boolean;
  public animationDuration: number;

  constructor(el: HTMLDivElement) {
    this.el = el;
    this.button = el.querySelector('.button');
    this.brightnessControl = el.querySelector('.brightness-bar');
    this.contrastControl = el.querySelector('.contrast-bar');
    this.indicator = el.querySelector<HTMLCanvasElement>('.popup_audio-indicator');
    this.video = el.querySelector('.popup_video');

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioAnalyser = this.indicator && AudioContext ? new AudioAnalyser(this.indicator, new AudioContext()) : null;

    this.brightness = '100';
    this.contrast = '100';
    this.sourceEl = null;
    this.sourceBaseDestination = null;
    this.isOpen = false;
    this.animationDuration = 2000;

    this.initListeners();
  }

  public initListeners(): void {
    if (this.button) {
      this.button.addEventListener('click', () => {
        this.close();
      });
    }

    if (this.brightnessControl) {
      this.brightnessControl.addEventListener('input', (evt) => {
        const target: EventTarget | null = evt.target;

        if (target && target instanceof HTMLInputElement) {
          this.brightness = target.value;
          this.setFilter();
        }
      });
    }

    if (this.contrastControl) {
      this.contrastControl.addEventListener('input', (evt) => {
        const target: EventTarget | null = evt.target;

        if (target && target instanceof HTMLInputElement) {
          this.contrast = target.value;
          this.setFilter();
        }
      });
    }
  }

  public initFilter(): void {
    if (this.sourceEl && this.brightnessControl && this.contrastControl) {
      const styleInitial = this.sourceEl.style.filter || '';
      const contrast = styleInitial.match(/contrast\((\d+)%\)/i);
      const brightness = styleInitial.match(/brightness\((\d+)%\)/i);

      this.contrast = contrast ? contrast[1] : '100';
      this.brightness = brightness ? brightness[1] : '100';

      this.brightnessControl.value = this.brightness;
      this.contrastControl.value = this.contrast;

      this.setFilter();
    }
  }
  public setFilter(): void {
    if (this.sourceEl) {
      this.sourceEl.style.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%)`;
    }
  }

  public init(): void {
    if (this.sourceEl) {
      if (this.audioAnalyser) {
        this.audioAnalyser.init(this.sourceEl as VideoElementWithMedia);
      }
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
  }

  public clear(): void {
    if (this.audioAnalyser) {
      this.audioAnalyser.drop();
    }
  }

  public open(sourceEl: HTMLVideoElement): void {
    if (!this.isOpen && this.video && this.sourceEl) {
      this.sourceBaseDestination = this.sourceEl.parentElement;

      if (this.sourceBaseDestination) {
        this.isOpen = true;
        this.sourceEl = sourceEl;

        this.init();

        requestAnimationFrame(() => this.el.classList.toggle('popup_open'));

        // reserve place at this.sourceEl paren element
        Object.assign(this.sourceBaseDestination.style, {
          height: px(this.sourceBaseDestination.getBoundingClientRect().height),
        });

        this.sourceEl.pause();
        this.video.appendChild(this.sourceEl);
        this.sourceEl.play();
        this.sourceEl.muted = false;
      }
    }
  }

  private attacheVideoToBase() {
    if (this.sourceBaseDestination && this.sourceEl && this.video) {
      this.sourceBaseDestination.appendChild(this.sourceEl);

      // clear reserved place at this.sourceEl paren element
      Object.assign(this.sourceBaseDestination.style, {
        height: null,
      });

      this.el.style.display = 'none';
      this.sourceEl.play();
      this.isOpen = false;
    }
  }

  public close(): void {
    if (this.isOpen && this.sourceBaseDestination && this.sourceEl && this.video) {
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
        this.attacheVideoToBase();
      }, this.animationDuration);

      this.sourceEl.muted = true;
      this.clear();
    }
  }
}
