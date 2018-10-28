import getIconSrc from './icons';
import {
  IIndicatorData,
  IIndicatorValue,
  ICardContent,
  TCardData,
  ICardDataButtons,
  ICardDataMusic,
  IIndicatorDataMeta,
  ICardDataCamera, ICardDataGraph,
} from '../interfaces/card';

const TEMPLATE = document.getElementsByTagName('template');
const SEC_PER_MIN = 60;

const INDICATOR_NAME_RU: IIndicatorDataMeta = {
  temperature: 'Температура',
  humidity: 'Влажность',
};

const INDICATOR_UNIT_RU: IIndicatorDataMeta = {
  temperature: '&#x2103;',
  humidity: '%',
};

function secToTime(seconds: string) {
  const secondsValid = Number(seconds);
  const min = Math.floor(secondsValid / SEC_PER_MIN);
  const sec = secondsValid % SEC_PER_MIN;
  let secValid = String(sec);

  if (sec < 10) {
    secValid = `0${sec}`;
  }

  return [min, secValid].join(':');
}

function timeToSec(time: string): string {
  const timeParts = time.split(':');
  const min = Number(timeParts[0]) * SEC_PER_MIN;
  const sec = Number(timeParts[1]);

  return String(min + sec);
}

function fillIndicator(container: HTMLElement, data: IIndicatorValue) {
  const template = document.getElementsByTagName('template')[1];
  const indicatorTmpl = template.content.querySelector('.indicator');
  const indicator = indicatorTmpl ? indicatorTmpl.cloneNode(true) as HTMLElement : null;
  if (indicator) {
    const keyEl = indicator.querySelector('.indicator__key');
    const valueEl = indicator.querySelector('.indicator__value');

    if (keyEl && valueEl) {
      keyEl.textContent = INDICATOR_NAME_RU[data.key];
      valueEl.innerHTML = data.value + INDICATOR_UNIT_RU[data.key];

      container.appendChild(document.importNode(indicator, true));
    }
  }
}

function fillCardDataEl(type: string, data: TCardData) {
  const template = TEMPLATE[1];
  const result = [];
  let currentData: TCardData;

  if ((data as ICardDataButtons).buttons) {
    currentData = data as ICardDataButtons;
    const controlsTmpl = template.content.querySelector('div.controls');
    const buttonTmpl = template.content.querySelector('button.button');
    const controls = document.importNode(controlsTmpl as Node, true);

    for (let i = 0; i < currentData.buttons.length; i++) {
      const button = document.importNode(buttonTmpl as Node, true);
      button.textContent = currentData.buttons[i];
      controls.appendChild(button);
    }

    result.push(controls);
  }

  if ((data as IIndicatorData).temperature) {
    currentData = data as IIndicatorData;
    const indicatorsTmpl = template.content.querySelector('.indicators');
    const indicators = indicatorsTmpl ? indicatorsTmpl.cloneNode(true) as HTMLElement : null;
    if (indicators) {
      fillIndicator(indicators, { key: 'temperature', value: currentData.temperature });
      fillIndicator(indicators, { key: 'humidity', value: currentData.humidity });

      result.push(document.importNode(indicators, true));
    }
  }

  if ((data as ICardDataMusic).track) {
    currentData = data as ICardDataMusic;
    const musicTmpl = template.content.querySelector<HTMLTemplateElement>('.music');
    const music = musicTmpl ? musicTmpl.cloneNode(true) as HTMLElement : null;
    if (music) {
      const image: HTMLInputElement | null = music.querySelector('.music__album-cover');
      const name = music.querySelector('.music__name');
      const volumeBar: HTMLInputElement | null = music.querySelector('.music__volume-bar');
      const volumeValue = music.querySelector('.music__volume-value');
      const trackBar: HTMLInputElement | null = music.querySelector('.music__track-bar');
      const trackLength = music.querySelector('.music__track-length');

      if (image && trackBar && volumeBar && name && volumeValue && trackLength) {
        image.src = currentData.albumcover;
        name.textContent = [currentData.artist, currentData.track.name].join(' - ');
        volumeBar.value = String(currentData.volume);
        volumeValue.textContent = `${currentData.volume}%`;

        volumeBar.addEventListener('input', (evt) => {
          const target: EventTarget | null = evt.target;

          if (target && target instanceof HTMLInputElement) {
            volumeValue.textContent = `${target.value}%`;
          }
        });

        trackBar.value = timeToSec(currentData.track.length);
        trackLength.textContent = currentData.track.length;

        trackBar.addEventListener('input', (evt) => {
          const target: EventTarget | null = evt.target;

          if (target && target instanceof HTMLInputElement) {
            trackLength.textContent = secToTime(target.value);
          }
        });
        result.push(document.importNode(music, true));
      }
    }
  }

  if ((data as ICardDataCamera).image) {
    const camTmpl = template.content.querySelector('.camera') as Node;
    const cam = document.importNode(camTmpl, true);
    result.push(cam);
  }

  if ((data as ICardDataGraph).type === 'graph') {
    const chartTmpl = template.content.querySelector('.chart-container');
    const chart = document.importNode(chartTmpl as Node, true);
    result.push(chart);
  }

  return result;
}

export default function fillCard(card: Element, content: ICardContent) {
  const header = card.querySelector('.card__header');
  const title = card.querySelector<HTMLDivElement>('.card__title');
  const icon = card.querySelector<HTMLImageElement>('.card__icon');
  const source = card.querySelector('.card__source');
  const time = card.querySelector('.card__time');
  const body = card.querySelector('.card__body');
  const isCritical = content.type === 'critical';

  if (header && title && icon && source && time && body) {
    if (isCritical) {
      header.classList.add('card__header_red');
    }

    icon.src = getIconSrc(content.icon, isCritical);
    title.textContent = content.title;
    title.title = content.title;
    source.textContent = content.source;
    time.textContent = content.time;

    if (!content.description && !content.data) {
      // nothing for fill card body
      const bodyParent = body.parentNode;
      if (bodyParent) {
        bodyParent.removeChild(body);
      }
    } else {
      const description = body.querySelector<HTMLDivElement>('.card__description');
      if (description && content.description) {
        description.textContent = content.description;
      }

      if (content.data) {
        const cardDataEl = fillCardDataEl(content.icon, content.data) || [];

        for (let i = 0; i < cardDataEl.length; i++) {
          body.appendChild(cardDataEl[i]);
        }
      }
    }

    card.classList.add(`card_${content.size}`);
  }
}
