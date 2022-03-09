export class UserMediaWrapper {
  private _stream: MediaStream | null;
  private _video: MediaStreamTrack | null;
  private _audio: MediaStreamTrack | null;

  constructor() {
    this._stream = null;
    this._video = null;
    this._audio = null;
  }

  async open(constraints: MediaStreamConstraints) {
    if (this._stream) await this.release();

    const stream = this._stream = await navigator.mediaDevices.getUserMedia(constraints);
    this._video = stream.getVideoTracks()[0];
    this._audio = stream.getAudioTracks()[0];
  }

  async release() {
    this._stream?.getTracks().forEach(track => track.stop());
    this._video = this._audio = this._stream = null;
  }

  get stream() {
    return this._stream;
  }

  get video() {
    return this._video;
  }

  get audio() {
    return this._audio;
  }
}