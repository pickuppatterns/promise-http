const fs = require('fs').promises;

fs.readFile('./.travis.yml', { encoding: 'utf-8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

fs.writeFile('test.txt', 'thiswrotetoyourfile', { encoding: 'utf-8' })
  .then(()=> console.log('DONE!'))
  .catch(err => console.error(err));

//Promise States:

//pending state ->waiting for the promise to finish
//fulfilled -> the promised finished & resolved
//rejected -> the promise finished & rejected




