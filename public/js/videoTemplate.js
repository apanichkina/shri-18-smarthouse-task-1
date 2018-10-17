export default function fillVideo(card, content) {
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
