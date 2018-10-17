import '../css/index.css';
import { Chart } from 'chart.js';
import data from '../mocks/events';
import fillCard from './cardTemplate';
import { InteractiveElement } from './pointer';
import { initVideo, initControls } from './video';
import analyseAudio from './audioAnalyser'
import popup from './popup'

const chartBackgroundColor = {
  water: 'rgba(54, 162, 235, 0.2)',
  electricity: 'rgba(255, 206, 86, 0.2)',
  gas: 'rgba(255, 159, 64, 0.2)',
  default: 'rgba(255,99,132, 0.2)',
};

const chartBorderColor = {
  water: 'rgba(54, 162, 235, 1)',
  electricity: 'rgba(255, 206, 86, 1)',
  gas: 'rgba(255, 159, 64, 1)',
  default: 'rgba(255,99,132, 1)',
};


function prepareDataForChart(chartData) {
  const defaultBackgroundColor = chartBackgroundColor.default;
  const defaultBorderColor = chartBorderColor.default;

  const result = [];

  for (const item of chartData) {
    Object.keys(item).forEach((key) => {
      const localResult = { label: key, data: [], borderWidth: 1 };

      for (const param of item[key]) {
        localResult.backgroundColor = chartBackgroundColor[key] || defaultBackgroundColor;
        localResult.borderColor = chartBorderColor[key] || defaultBorderColor;
        localResult.data.push({ x: new Date(Number(param[0])), y: param[1] });
      }
      result.push(localResult);
    });
  }

  return result;
}

function drawChart(container, datasets) {
  const ctx = container.getContext('2d');

  // TODO destroy chart
  return new Chart(ctx, {
    type: 'line',
    data: {
      datasets: datasets,
    },
    options: {
      responsive: true,

      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              minute: 'h:mm',
            },
          },
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}


function setContent(parentEl) {
  const template = document.getElementsByTagName('template')[0];
  const cardTmpl = template.content.querySelector('div.card');
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
        drawChart(chartContainer, parsedData);
      }
    }
  }

  const camera = document.querySelector('#camera .camera-view');
  if (('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    document.body.classList.add('touch-support');

    const zoom = document.querySelector('#camera .camera-zoom__value');
    const bright = document.querySelector('#camera .camera-bright__value');
    const cameraProcessor = new InteractiveElement(camera, zoom, bright);
  }
}

function setContentVideo(parentEl) {
  // const template = document.getElementsByTagName("template")[2];
  // const videoTmpl = template.content.querySelector(".video");
  // // fillCard(card, content[i]);
  // const video = document.importNode(videoTmpl, true);
  // parentEl.appendChild(video);
  // const v1 = document.getElementById('video-1')
  //   v1.addEventListener('click', ()=> {
  //     v1.parentElement.classList.add('video-content_big')
  //     popup(v1.parentElement)
  //
  //     console.log('click')
  //
  //     v1.muted = false;
  //     v1.play()
  //   })

  const videoContents = document.getElementsByClassName('video-content');
  const popupEl = document.getElementById('popup');
  const button = popupEl.querySelector('.button')
  button.addEventListener('click', () => {
    // video.removeEventListener('play', goCanvas) ;
    requestAnimationFrame(() => popupEl.classList.toggle('popup_open'))
    setTimeout(()=>{ popupEl.style.display = 'none';}, 1000)

  })
  for(let i = 0; i < videoContents.length; ++i) {
    const videoContent = videoContents[i];
    const videoSource = videoContent.querySelector('video');
    const canvas = videoContent.querySelector('.theCanvas');

    // analyseAudio(videoSource, canvas);

    const brightnessFilterEl = videoContent.querySelector('.video-filter');
    const videoBrightnessControl = videoContent.querySelector('.brightness-bar');
    const videoContrastControl = videoContent.querySelector('.contrast-bar');
    initControls(brightnessFilterEl, videoSource, videoBrightnessControl, videoContrastControl);

    videoSource.addEventListener('play', () => console.log('rrr'))
    videoContent.addEventListener('click', () => {
      videoSource.pause();
      popup(videoContent, videoSource);
      console.log('click');
      videoContent.classList.add('video-content_big');
      videoSource.muted = false;
      videoSource.play();
    });

  }


  initVideo(
    document.getElementById('video-3'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8'
  );

  initVideo(
    document.getElementById('video-2'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8'
  );

  initVideo(
    document.getElementById('video-1'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8'
  );

  initVideo(
    document.getElementById('video-4'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content__layout');
  const title = document.getElementsByClassName('content__title')[0];
  const href = window.location.href;
  const url = new URL(href);
  const page = url.searchParams.get('page');

  if (page === 'video') {
    title.textContent = 'Видео';
    setContentVideo(root);
  } else {
    title.textContent = 'Лента событий';
    setContent(root);
  }
});
