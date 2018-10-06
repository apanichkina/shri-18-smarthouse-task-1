import '../css/index.css';
import getIconSrc from './icons'
import data from '../mocks/events.json'

function fillCardDataEl(type, data) {
  const template = document.getElementsByTagName("template")[0];

  if (type === "fridge" && data.buttons && data.buttons.length > 1) {
    const controlsTmpl = template.content.querySelector("div.controls");
    const buttonTmpl =  template.content.querySelector("button.button");
    const controls = document.importNode(controlsTmpl, true);


    for (let i = 0; i < data.buttons.length; i++) {
      const button = document.importNode(buttonTmpl, true);
      button.textContent = data.buttons[i];
      controls.appendChild(button);
    }

    return controls
  }

  return null
}

function fillCard(card, content) {
  const header = card.querySelector("div.card__header");
  const title = card.querySelector("span.card__title");
  const icon = card.querySelector("img.card__icon");
  const body = card.querySelector("div.card__body");
  const isCritical = content.type === 'critical';

  if (isCritical) {
    header.classList.add('card__header_red');
  }

  icon.src = getIconSrc(content.icon, isCritical);
  title.textContent = content.title;
  body.textContent = content.description;

  if (content.data) {
    const cardDataEl = fillCardDataEl(content.icon, content.data);

    if (cardDataEl) {
      body.appendChild(cardDataEl)
    }
  }

  card.classList.add(`card_${content.size}`);
}

function setContent(parentEl) {
  const template = document.getElementsByTagName("template")[0];
  const cardTmpl = template.content.querySelector("div.card");
  const content = data.events || [];
  let card = null;

  for (let i = 0; i < content.length; i++) {
    card = document.importNode(cardTmpl, true);
    fillCard(card, content[i]);
    parentEl.appendChild(card);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  setContent(root);
});


