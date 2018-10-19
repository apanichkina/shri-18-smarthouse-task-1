export default class AudioAnalyser {
  constructor(canvas, AudioContext) {
    this.audioContext = new AudioContext();
    this.source = null;

    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

    this.canvasContext = canvas.getContext('2d');

    this.canvasContext.lineWidth = 1;
    this.canvasContext.strokeStyle = '#fff';
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  init(sourceInput) {
    if (sourceInput.mediaElementSource) {
      this.source = sourceInput.mediaElementSource;
    } else {
      this.source = this.audioContext.createMediaElementSource(sourceInput);
      sourceInput.mediaElementSource = this.source;
    }
    this.source.connect(this.audioContext.destination);
    this.source.connect(this.analyser);

    if (!this.alreadyDraw) {
      this.startDrawing();
    }
  }

  drop() {
    this.source.disconnect(this.analyser);
  }

  startDrawing() {
    this.alreadyDraw = true;
    this.drawAgain();
  }

  drawAgain() {
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    requestAnimationFrame(this.drawAgain.bind(this));

    this.analyser.getByteFrequencyData(this.dataArray);

    const sliceWidth = this.canvasWidth * 1.0 / this.bufferLength;
    let x = 0;

    for (let i = 0; i < this.bufferLength; i++) {
      this.canvasContext.beginPath();
      this.canvasContext.moveTo(x, this.canvasHeight);
      this.canvasContext.lineTo(x, this.canvasHeight - this.dataArray[i]);
      this.canvasContext.closePath();
      this.canvasContext.stroke();

      x += sliceWidth;
    }
  }
}
