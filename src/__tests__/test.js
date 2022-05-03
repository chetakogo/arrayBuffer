import ArrayBufferConverter from '../js/arrayBuffer';

test('load data', () => {
  const data = '{ data: { user: { id: 1, name: "Hitman", level: 10 } } }';
  const arrayBuf = new ArrayBufferConverter();
  const change = arrayBuf.load(data);
  const string = arrayBuf.toString(change);
  expect(string).toEqual('{ data: { user: { id: 1, name: "Hitman", level: 10 } } }');
});
