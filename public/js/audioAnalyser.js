export default function (sourceInput, canvas) {
  let AudioContext;
  let audioContext;
  let source;
  let analyser;

  const canvasContext = canvas.getContext('2d');
  let dataArray;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let alreadyDraw = false;

  function initAudio() {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioContext = new AudioContext();
      source = audioContext.createMediaElementSource(sourceInput);
      source.connect(audioContext.destination);
      analyser = audioContext.createAnalyser();
      source.connect(analyser);
      if (!alreadyDraw) {
        startDrawing();
      }
      // sourceInput.addEventListener("click", function () { // TODO вынести наружу
      //   if (!alreadyDraw) {
      //     startDrawing();
      //   }
      // });
    } else {
      console.log('Ваш браузер не поддерживает Web Audio API');
    }
  }

  function startDrawing() {
    alreadyDraw = true;
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = 'rgba(0, 0, 0, 1)';

    function drawAgain() {
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      requestAnimationFrame(drawAgain);

      analyser.getByteFrequencyData(dataArray);

      const sliceWidth = canvasWidth * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        canvasContext.beginPath();
        canvasContext.moveTo(x, canvasHeight);
        canvasContext.lineTo(x, canvasHeight - dataArray[i]);
        canvasContext.closePath();
        canvasContext.stroke();

        x += sliceWidth;
      }
    }

    drawAgain();
  }

  initAudio();
}
