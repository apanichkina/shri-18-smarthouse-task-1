import '../css/index.css';
import eventData from '../mocks/events.json';
import videoData from '../mocks/videos.json';
import fillCard from './cardTemplate';
import drawChart from './chart';
import {TChartData} from '../interfaces/chart';
import InteractiveElement from './pointer';
import {initVideoSource, initVideoContainerHandlers} from './video';
import {ICardContent, ICardDataGraph} from '../interfaces/card';
import {IStore, StateSingletonClass} from 'shri-18-flux-framework/lib/public/src/Store';
import {createAction, IAction} from 'shri-18-flux-framework/lib/public/src/Action';

interface INameAction extends IAction {
  payload: {
    name: string;
  }
}

interface IPageActionPayload {
  page: string
}

interface IPageAction extends IAction {
  payload: IPageActionPayload
}

enum EEvents {
  FETCH_START = '@events/FETCH_START',
  FETCH_SUCCESS = '@events/FETCH_SUCCESS ',
}

enum EPageTitle {
  'events' = 'Лента событий',
  'video' = 'Видеонаблюдение',
  'tools' = 'Устройства',
  'scenarios' = 'Сценарии',
}

const actionRoute = (payload: IPageActionPayload) => createAction('ROUTE', payload);
const actionEventsFetchStart = () => createAction(EEvents.FETCH_START);
const actionEventsFetchSuccess = () => createAction(EEvents.FETCH_SUCCESS);

function setContentEvents(parentEl: HTMLElement, isEventsFetching: boolean) {
  if (isEventsFetching) {
    setContentLoader(parentEl);
  } else {
    setEvents(parentEl);
  }
}

function setEvents(parentEl: HTMLElement) {
  const template = document.getElementsByTagName('template')[0];
  const cardTmpl = template.content.querySelector('div.card');

  parentEl.innerHTML = '';

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
  parentEl.innerHTML = '';
  parentEl.classList.add('content__layout_four-rows');
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

function setContentLoader(parentEl: HTMLElement) {
  const loader = document.createElement('div');

  loader.classList.add('loader');
  parentEl.innerHTML = '';
  parentEl.appendChild(loader);
}

const fetchEvents = new Promise(((resolve) => {
  setTimeout(() => {
    resolve(eventData);
  }, 3000);
}));

function changeActiveNavTab(page: string) {
  const prevActive = document.getElementsByClassName('nav__tab_active')[0];
  const navEl = document.querySelector(`.nav__tab[data-page="${page}"]`);

  if (prevActive) {
    prevActive.classList.toggle('nav__tab_active');
  }
  if (navEl) {
    navEl.classList.toggle('nav__tab_active');
  }
}

function initNavTabs(store: IStore) {
  const navBtns = document.getElementsByClassName('nav__tab');

  for (let i = 0; i < navBtns.length; ++i) {
    const el: ElementWithDataset = navBtns[i] as ElementWithDataset;
    const page = el.dataset && el.dataset.page;

    if (page) {
      el.addEventListener('click', () => {
        store.dispatch(actionRoute({page}));
        localStorage.setItem('page', page);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content__layout');
  const title = document.getElementsByClassName('content__title')[0];
  const store = StateSingletonClass.getInstance();
  const initialPage = localStorage.getItem('page') || 'events';

  store.setInitialState({name: 'Anna', page: initialPage});
  store.addReducers({
    name: (store: string = 'some body', action: INameAction): string => {
      switch (action.type) {
        case 'nevPerson':
          return action.payload.name;
        default:
          return store;
      }
    },
    page: (store: string = 'events', action: IPageAction): string => {
      switch (action.type) {
        case 'ROUTE':
          return action.payload.page;
        default:
          return store;
      }
    },
    isEventsFetching: (store: boolean = false, action: IAction): boolean => {
      switch (action.type) {
        case EEvents.FETCH_START:
          return true;
        case EEvents.FETCH_SUCCESS:
          return false;
        default:
          return store;
      }
    },
  });
  initNavTabs(store);

  if (root && title) {
    const renderEventsPage = (isFetching: boolean) => setContentEvents(root, isFetching);
    const renderVideoPage = () => setContentVideo(root);
    const renderEmptyPage = () => root.innerHTML = 'Тут скоро будет интересно';

    const routesManager = (prevSore: any) => {
      const { page, isEventsFetching } = store.getStore();
      const needUpdate = prevSore.page !== page;

      if (needUpdate) {
        changeActiveNavTab(page);
        title.textContent = EPageTitle[page];

        switch (page) {
          case 'events':
            renderEventsPage(isEventsFetching);
            break;
          case 'video':
            renderVideoPage();
            break;
          default:
            renderEmptyPage();
            break;
        }
      }

      // костыль так как мой стор не умеет бызывать только нужных слушателей, а дергает всех
      if (prevSore.isEventsFetching !== isEventsFetching && page === 'events') {
        renderEventsPage(isEventsFetching);
      }
    };

    // init
    routesManager({});

    // callback for navigation
    store.addListener(routesManager);

    // emulation of events async fetch
    store.dispatch(actionEventsFetchStart());
    fetchEvents.then(() => {
      store.dispatch(actionEventsFetchSuccess());
    });
  }

});
