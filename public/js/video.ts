import Popup from './popup';

export function initVideoSource(video, url) {
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
  const popup = new Popup(document.getElementById('popup'));

  for (let i = 0; i < videoContents.length; ++i) {
    const videoContent = videoContents[i];
    const videoSource = videoContent.querySelector('video');

    videoSource.addEventListener('click', () => {
      popup.open(videoSource);
    });
  }
}
