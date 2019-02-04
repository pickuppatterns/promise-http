const fs = require('fs').promises;

// const read = src => fs.Promises.readFile(src, { encoding: 'utf8' });


const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const toUpperCase = str => str.toUpperCase();
const reverse = str => str.split('').reverse().join('');
const trim = str => str.trim();


const transformer = src => {
  return fs.readFile(src, { encoding : 'utf8' })
    .then(data => removeCapitals(data))
    .then(data => toUpperCase(data))
    .then(data => reverse(data))
    .then(data => trim(data));
};
module.exports = { 
  transformer, 
  removeCapitals,
  toUpperCase,
  reverse
};
