import getIconSrc from './icons';

const TEMPLATE = document.getElementsByTagName('template');

const INDICATOR_NAME_RU = {
  temperature: 'Температура',
  humidity: 'Влажность',
};

const INDICATOR_UNIT_RU = {
  temperature: '&#x2103;',
  humidity: '%',
};

const SEC_PER_MIN = 60;

function secToTime(seconds) {
  const min = Math.floor(seconds / SEC_PER_MIN);
  const sec = seconds % SEC_PER_MIN;
  let secValid = String(sec);

  if (sec < 10) {
    secValid = `0${sec}`;
  }

  return [min, secValid].join(':');
}

function timeToSec(time): string {
  const timeParts = time.split(':');
  const min = Number(timeParts[0]) * SEC_PER_MIN;
  const sec = Number(timeParts[1]);

  return String(min + sec);
}

function fillIndicator(container, data) {
  const template = document.getElementsByTagName('template')[1];
  const indicatorTmpl = template.content.querySelector('.indicator');
  const indicator = document.importNode(indicatorTmpl, true);
  const keyEl = indicator.querySelector('.indicator__key');
  const valueEl = indicator.querySelector('.indicator__value');

  keyEl.textContent = INDICATOR_NAME_RU[data.key];
  valueEl.innerHTML = data.value + INDICATOR_UNIT_RU[data.key];

  container.appendChild(indicator);
}

function fillCardDataEl(type, data) {
  const template = TEMPLATE[1];
  const result = [];

  if (data.buttons) {
    const controlsTmpl = template.content.querySelector('div.controls');
    const buttonTmpl = template.content.querySelector('button.button');
    const controls = document.importNode(controlsTmpl, true);

    for (let i = 0; i < data.buttons.length; i++) {
      const button = document.importNode(buttonTmpl, true);
      button.textContent = data.buttons[i];
      controls.appendChild(button);
    }

    result.push(controls);
  }

  if (data.temperature && data.humidity) {
    const indicatorsTmpl = template.content.querySelector('.indicators');
    const indicators = document.importNode(indicatorsTmpl, true);

    fillIndicator(indicators, { key: 'temperature', value: data.temperature });
    fillIndicator(indicators, { key: 'humidity', value: data.humidity });

    result.push(indicators);
  }

  if (data.track && data.volume) {
    const musicTmpl = template.content.querySelector('.music');
    const music = document.importNode(musicTmpl, true);
    const image: HTMLInputElement = music.querySelector('.music__album-cover');
    const name = music.querySelector('.music__name');
    const volumeBar: HTMLInputElement = music.querySelector('.music__volume-bar');
    const volumeValue = music.querySelector('.music__volume-value');
    const trackBar: HTMLInputElement = music.querySelector('.music__track-bar');
    const trackLength = music.querySelector('.music__track-length');

    image.src = data.albumcover;
    name.textContent = [data.artist, data.track.name].join(' - ');
    volumeBar.value = data.volume;
    volumeValue.textContent = `${data.volume}%`;

    volumeBar.addEventListener('input', (evt) => {
      const target: EventTarget = evt.target;

      if (target && target instanceof HTMLInputElement) {
        volumeValue.textContent = `${target.value}%`;
      }
    });

    trackBar.value = timeToSec(data.track.length);
    trackLength.textContent = data.track.length;

    trackBar.addEventListener('input', (evt) => {
      const target: EventTarget = evt.target;

      if (target && target instanceof HTMLInputElement) {
        trackLength.textContent = secToTime(target.value);
      }
    });

    result.push(music);
  }

  if (data.image) {
    const camTmpl = template.content.querySelector('.camera');
    const cam = document.importNode(camTmpl, true);
    result.push(cam);
  }

  if (data.type === 'graph') {
    const chartTmpl = template.content.querySelector('.chart-container');
    const chart = document.importNode(chartTmpl, true);
    result.push(chart);
  }

  return result;
}

export default function fillCard(card, content) {
  const header = card.querySelector('.card__header');
  const title = card.querySelector('.card__title');
  const icon = card.querySelector('.card__icon');
  const source = card.querySelector('.card__source');
  const time = card.querySelector('.card__time');
  const body = card.querySelector('.card__body');
  const isCritical = content.type === 'critical';

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
    body.parentNode.removeChild(body);
  } else {
    const description = body.querySelector('.card__description');
    description.textContent = content.description;

    if (content.data) {
      const cardDataEl = fillCardDataEl(content.icon, content.data) || [];

      for (let i = 0; i < cardDataEl.length; i++) {
        body.appendChild(cardDataEl[i]);
      }
    }
  }

  card.classList.add(`card_${content.size}`);
}
