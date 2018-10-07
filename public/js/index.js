import '../css/index.css';
import data from '../mocks/events.json'
import fillCard from './cardTemplate'

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
  const root = document.getElementById('content__layout');
  setContent(root);
});


