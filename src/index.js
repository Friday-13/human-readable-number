module.exports = function toReadable(number) {
  const uniq = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
  ];
  const prefix = [
    '',
    '',
    'twen',
    'thir',
    'for',
    'fif',
    'six',
    'seven',
    'eigh',
    'nine',
  ];

  if (number < 15) {
    return uniq[number];
  }

  if (number < 20) {
    return `${prefix[number - 10]}teen`;
  }

  if (number < 100) {
    let lowerOrder = '';
    if (number % 10 !== 0) {
      lowerOrder = ` ${toReadable(number % 10)}`;
    }
    return `${prefix[Math.floor(number / 10)]}ty${lowerOrder}`;
  }

  if (number < 1000) {
    let lowerOrder = '';
    if (number % 100 !== 0) {
      lowerOrder = ` ${toReadable(number % 100)}`;
    }
    return `${uniq[Math.floor(number / 100)]} hundred${lowerOrder}`;
  }
  return 'wait';
};
