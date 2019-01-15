const fs = require('fs');


const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    });
};

const toUpperCase = str => str.toUpperCase();
const reverse = str => str.reverse();
const trim = str => str.trim();


const transformer = src => {
  fs.readFile(src, { encoding : 'utf8' })
    .then(removeCapitals)
    .then(toUpperCase)
    .then(reverse)
    .then(trim);
};



module.exports = { 
  transformer, 
  removeCapitals,
  toUpperCase,
  reverse
};
