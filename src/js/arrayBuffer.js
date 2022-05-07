export default class ArrayBufferConverter {
  static load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i += 1) {
      bufferView[i] = data.charCodeAt(i);
    }
    return buffer;
  }

  static toString(data) {
    const arrayString = new Uint16Array(data);
    return String.fromCharCode(...arrayString);
  }
}
