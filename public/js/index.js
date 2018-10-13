import '../css/index.css';
import data from '../mocks/events.js'
import fillCard from './cardTemplate'
import {Chart} from "chart.js";
import {InteractiveElement} from './pointer'

const chartBackgroundColor = {
  'water': 'rgba(54, 162, 235, 0.2)',
  'electricity': 'rgba(255, 206, 86, 0.2)',
  'gas': 'rgba(255, 159, 64, 0.2)',
  'default': 'rgba(255,99,132, 0.2)',
};

const chartBorderColor = {
  'water': 'rgba(54, 162, 235, 1)',
  'electricity': 'rgba(255, 206, 86, 1)',
  'gas': 'rgba(255, 159, 64, 1)',
  'default': 'rgba(255,99,132, 1)',
};


function prepareDataForChart(data) {
  const defaultBackgroundColor = chartBackgroundColor['default'];
  const defaultBorderColor = chartBorderColor['default'];

  let result = [];

  for (let item of data) {
    Object.keys(item).forEach((key) => {
      let localResult = {label: key, data: [], borderWidth: 1};

      for (let param of item[key]) {
        localResult.backgroundColor = chartBackgroundColor[key] || defaultBackgroundColor;
        localResult.borderColor = chartBorderColor[key] || defaultBorderColor;
        localResult.data.push({x: new Date(Number(param[0])), y: param[1]})
      }
      result.push(localResult)
    });
  }

  return result;
}

function drawChart(container, data) {
  const ctx = container.getContext('2d');

  // TODO destroy chart
  return new Chart(ctx, {
    type: 'line',
    data: {
      datasets: data
    },
    options: {
      responsive: true,

      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              minute: 'h:mm'
            }
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
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


    if (content[i].data && content[i].data.type === 'graph') {
      const chartContainer = document.getElementById('chart');
      const parsedData = prepareDataForChart(content[i].data.values);

      if (parsedData.length && chartContainer) {
        drawChart(chartContainer, parsedData)
      }
    }
  }

  const camera = document.querySelector('#camera .camera-view');
  if (('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)  {
    document.body.classList.add('touch-support');

    const zoom = document.querySelector('#camera .camera-zoom__value');
    const bright = document.querySelector('#camera .camera-bright__value');
    const cameraProcessor = new InteractiveElement(camera, zoom, bright)
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content__layout');
  setContent(root);
});
