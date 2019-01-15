const fs = require('fs').promises;

fs.readFile('./.travis.yml', { encoding: 'utf-8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));




