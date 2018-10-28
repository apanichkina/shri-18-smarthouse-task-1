import '../css/index.css';
import eventData from '../mocks/events.json';
import videoData from '../mocks/videos.json';
import fillCard from './cardTemplate';
import drawChart from './chart';
import {TChartData} from '../interfaces/chart';
import InteractiveElement from './pointer';
import { initVideoSource, initVideoContainerHandlers } from './video';
import { ICardContent, ICardDataGraph } from '../interfaces/card';

function setContent(parentEl: HTMLElement) {
  const template = document.getElementsByTagName('template')[0];
  const cardTmpl = template.content.querySelector('div.card');

  if (cardTmpl) {
    const content = eventData.events as ICardContent[];
    let card = null;
    let currentContentEl;

    for (let i = 0; i < content.length; i++) {
      currentContentEl = content[i];
      card = document.importNode(cardTmpl, true);
      fillCard(card, content[i]);
      parentEl.appendChild(card);
      const chartContainer = document.querySelector<HTMLCanvasElement>('#chart');

      if (chartContainer && currentContentEl.data && (currentContentEl.data as ICardDataGraph).type === 'graph') {
        drawChart(chartContainer, (currentContentEl.data as ICardDataGraph).values as TChartData);
      }
    }
  }

  const camera = document.querySelector<HTMLDivElement>('#camera .camera-view');
  const zoom = document.querySelector<HTMLDivElement>('#camera .camera-zoom__value');
  const bright = document.querySelector<HTMLInputElement>('#camera .camera-bright__value');
  if (('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    document.body.classList.add('touch-support');

    if (camera && zoom && bright && window.PointerEvent) {
      const cameraProcessor = new InteractiveElement(camera, zoom, bright);
      cameraProcessor.init();
    }
  }
}

function setContentVideo(parentEl: HTMLElement) {
  const template = document.getElementsByTagName('template')[2];
  const videoContainerTmpl = template.content.querySelector('.video-container');

  if (videoContainerTmpl) {
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

}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content__layout');
  const title = document.getElementsByClassName('content__title')[0];

  if (root && title) {
    const { href } = window.location;
    const url = new URL(href);
    const page = url.searchParams.get('page');

    if (page === 'events') {
      title.textContent = 'Лента событий';
      setContent(root);
    } else {
      title.textContent = 'Видеонаблюдение';
      root.classList.add('content__layout_four-rows');
      setContentVideo(root);
    }
  }

});
