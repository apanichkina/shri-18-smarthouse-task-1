const data = {
  "events": [
    {
      "type": "info",
      "title": "Еженедельный отчет по расходам ресурсов",
      "source": "Сенсоры потребления",
      "time": "19:00, Сегодня",
      "description": "Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",
      "icon": "stats",
      "data": {
        "type": "graph",
        "values": [
          {
            "electricity": [
              ["1536883200", 115],
              ["1536969600", 117],
              ["1537056000", 117.2],
              ["1537142400", 118],
              ["1537228800", 120],
              ["1537315200", 123],
              ["1537401600", 129]
            ]
          },
          {
            "water": [
              ["1536883200", 40],
              ["1536969600", 40.2],
              ["1537056000", 40.5],
              ["1537142400", 41],
              ["1537228800", 41.4],
              ["1537315200", 41.9],
              ["1537401600", 42.6]
            ]
          },
          {
            "gas": [
              ["1536883200", 13],
              ["1536969600", 13.2],
              ["1537056000", 13.5],
              ["1537142400", 13.7],
              ["1537228800", 14],
              ["1537315200", 14.2],
              ["1537401600", 14.5]
            ]
          }
        ]
      },
      "size": "l"
    },
    {
      "type": "info",
      "title": "Дверь открыта",
      "source": "Сенсор входной двери",
      "time": "18:50, Сегодня",
      "description": null,
      "icon": "key",
      "size": "s"
    },
    {
      "type": "info",
      "title": "Уборка закончена",
      "source": "Пылесос",
      "time": "18:45, Сегодня",
      "description": null,
      "icon": "robot-cleaner",
      "size": "s"
    },
    {
      "type": "info",
      "title": "Новый пользователь",
      "source": "Роутер",
      "time": "18:45, Сегодня",
      "description": null,
      "icon": "router",
      "size": "s"
    },
    {
      "type": "info",
      "title": "Изменен климатический режим",
      "source": "Сенсор микроклимата",
      "time": "18:30, Сегодня",
      "description": "Установлен климатический режим «Фиджи»",
      "icon": "thermal",
      "size": "m",
      "data": {
        "temperature": 24,
        "humidity": 80
      }
    },
    {
      "type": "critical",
      "title": "Невозможно включить кондиционер",
      "source": "Кондиционер",
      "time": "18:21, Сегодня",
      "description": "В комнате открыто окно, закройте его и повторите попытку",
      "icon": "ac",
      "size": "m"
    },
    {
      "type": "info",
      "title": "Музыка включена",
      "source": "Яндекс.Станция",
      "time": "18:16, Сегодня",
      "description": "Сейчас проигрывается:",
      "icon": "music",
      "size": "m",
      "data": {
        "albumcover": "https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000",
        "artist": "Florence & The Machine",
        "track": {
          "name": "Big God",
          "length": "4:31"
        },
        "volume": 80
      }
    },
    {
      "type": "info",
      "title": "Заканчивается молоко",
      "source": "Холодильник",
      "time": "17:23, Сегодня",
      "description": "Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",
      "icon": "fridge",
      "size": "m",
      "data": {
        "buttons": ["Да", "Нет"]
      }
    },
    {
      "type": "info",
      "title": "Зарядка завершена",
      "source": "Оконный сенсор",
      "time": "16:22, Сегодня",
      "description": "Ура! Устройство «Оконный сенсор» снова в строю!",
      "icon": "battery",
      "size": "s"
    },
    {
      "type": "critical",
      "title": "Пылесос застрял",
      "source": "Сенсор движения",
      "time": "16:17, Сегодня",
      "description": "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
      "icon": "cam",
      "data": {
        "image": "get_it_from_mocks_:3.jpg"
      },
      "size": "l"
    },
    {
      "type": "info",
      "title": "Вода вскипела",
      "source": "Чайник",
      "time": "16:20, Сегодня",
      "description": null,
      "icon": "kettle",
      "size": "s"
    }
  ]
};

const IMAGE_PATH = 'images/icons/';

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

  let imageName = content.icon;

  if (content.type === 'critical') {
    header.classList.add('card__header_red');
    imageName += '-white';
  }

  icon.src = IMAGE_PATH + imageName + '.svg';
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


