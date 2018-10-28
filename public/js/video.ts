import Popup from './popup';

export function initVideoSource(video: HTMLVideoElement, url: string) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }

  video.muted = true; // for Firefox
}

export function initVideoContainerHandlers() {
  const videoContents = document.getElementsByClassName('video-content');
  const popupEl = document.querySelector<HTMLDivElement>('#popup');

  if (popupEl) {
    const popup = new Popup(popupEl);

    for (let i = 0; i < videoContents.length; ++i) {
      const videoContent = videoContents[i];
      const videoSource = videoContent.querySelector('video');

      if (videoSource) {
        videoSource.addEventListener('click', () => {
          popup.open(videoSource);
        });
      }

    }
  }
}
