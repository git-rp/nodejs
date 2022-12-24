const {
  caculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../math');
// test('hello', () => {
//   console.log('');
// });
// test('this should fail', () => {
//   throw new Error('fail');
// });
test('should calculate total with tip', () => {
  const total = caculateTip(10, 1.3);
  expect(total).toBe(13);

  //   if (total != 13) {
  //     throw new Error('Failed ', total);
  //   }
});

test('should caculate total with default tip', () => {
  const total = caculateTip(10);
  expect(total).toBe(12);
});

test('should convert fahrenheitToCelsius', () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
  console.log('temp---', temp);
});

test('should convert celsius to fahrenheit', () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});
