/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
export default class ArrayBufferConverter {
  load(data) {
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  toString(data) {
    const arrayString = new Uint16Array(data);
    return String.fromCharCode(...arrayString);
  }
}
