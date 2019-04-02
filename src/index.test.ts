import {transformMessageAttributes} from './index';

it('should transform message attributes', () => {
  const result = transformMessageAttributes({
    string: 'hello',
    array: ['hello', 'world'],
    number: 1
  });

  expect(result).toEqual({
    array: {DataType: 'String.Array', StringValue: '["hello","world"]'},
    number: {DataType: 'Number', StringValue: 1},
    string: {DataType: 'String', StringValue: 'hello'}
  });
});
