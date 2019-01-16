const { parse } = require('url');
const bodyParser = require('./bodyParser');

const notes = {};
let noteId = 0;

// module.exports = (req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/tester') {
//     res.setHeader('Content-Type', 'text/JSON', 'testing: 123');
//     res.end(JSON.stringify({ testing:123 }));
//   }
// };

//Query Strings
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname === '/you') {
//     console.log('this is your name ', url.pathname)
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ hi: `hi there ${url.query.name}` }));
//   }
// };

//POSTing data
module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
};

