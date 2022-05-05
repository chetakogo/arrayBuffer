export default class ArrayBufferConverter {
  static load(data) {
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i + 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  static toString(data) {
    const arrayString = new Uint16Array(data);
    return String.fromCharCode(...arrayString);
  }
}
