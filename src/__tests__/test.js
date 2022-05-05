import ArrayBufferConverter from '../js/arrayBuffer';

test('load data', () => {
  const data = '{ data: { user: { id: 1, name: "Hitman", level: 10 } } }';
  const change = ArrayBufferConverter.load(data);
  const string = ArrayBufferConverter.toString(change);
  expect(string).toEqual('{ data: { user: { id: 1, name: "Hitman", level: 10 } } }');
});
