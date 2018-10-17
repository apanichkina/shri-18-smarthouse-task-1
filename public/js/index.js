import '../css/index.css';
import eventData from '../mocks/events';
import videoData from '../mocks/videos';
import fillCard from './cardTemplate';
import drawChart from './chart';
import { InteractiveElement } from './pointer';
import { initVideoSource, initVideoContainerHandlers } from './video';
import analyseAudio from './audioAnalyser';
import popup from './popup';


function setContent(parentEl) {
  const template = document.getElementsByTagName('template')[0];
  const cardTmpl = template.content.querySelector('div.card');
  const content = eventData.events || [];
  let card = null;

  for (let i = 0; i < content.length; i++) {
    card = document.importNode(cardTmpl, true);
    fillCard(card, content[i]);
    parentEl.appendChild(card);


    if (content[i].data && content[i].data.type === 'graph') {
      const chartContainer = document.getElementById('chart');
      drawChart(chartContainer, content[i].data.values);
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
  const template = document.getElementsByTagName('template')[2];
  const videoContainerTmpl = template.content.querySelector('.video-container');
  const content = videoData.source || [];
  let videoContainer = null;
  let video = null;

  for (let i = 0; i < content.length; i++) {
    videoContainer = document.importNode(videoContainerTmpl, true);
    video = videoContainer.querySelector('.video');
    initVideoSource(video, content[i]);
    parentEl.appendChild(videoContainer);
  }

  initVideoContainerHandlers();
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content__layout');
  const title = document.getElementsByClassName('content__title')[0];
  const { href } = window.location;
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
