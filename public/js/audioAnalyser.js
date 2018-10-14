export default function(sourceInput) {
  var AudioContext;
  var audio;
  var audioContext;
  var source;
  var analyser;

  var canvas = document.getElementById("theCanvas");
  var canvasContext = canvas.getContext("2d");
  var dataArray;
  var analyserMethod = "getByteTimeDomainData";
  var isIdle = false;

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  function initAudio(streamUrl) {


    // var context = new window.webkitAudioContext();
    // var analyser = context.createAnalyser();
    //
    //
    //   // Our <audio> element will be the audio source.
    //   var source = context.createMediaElementSource(v1);
    //   source.connect(analyser);
    //   analyser.connect(context.destination);
    //
    //   // ...call requestAnimationFrame() and render the analyser's output to canvas.



    AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {

    } else {
      alert('Ваш браузер не поддерживает Web Audio API');
    }

    audioContext = new AudioContext();
    source = audioContext.createMediaElementSource(sourceInput);
    source.connect(audioContext.destination);
    analyser = audioContext.createAnalyser();
    source.connect(analyser);
  };


  function startDrawing() {
    // Stop drawing idle animation
    isIdle = false;
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    dataArray = new Uint8Array(bufferLength);
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = 'rgba(0, 0, 0, 1)';

    function drawAgain() {
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      requestAnimationFrame(drawAgain);

      analyser[analyserMethod](dataArray);
      for (var i = 0; i < bufferLength; i++) {
        canvasContext.beginPath();
        canvasContext.moveTo(i, 255);
        canvasContext.lineTo(i, 255 - dataArray[i]);
        canvasContext.closePath();
        canvasContext.stroke();
      }
    }

    drawAgain();
  }

  sourceInput.addEventListener("click", function () {
    analyserMethod = "getByteFrequencyData";
    startDrawing();
  });


  initAudio();
};
