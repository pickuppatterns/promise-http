const { parse } = require('url');



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

module.exports = req => {
  return new Promise ((resolve, reject) => {
  let body = '';
  req.on('data', chunk =>
  body + chunk )
});
req.on('end', ()=> {
  resolve(JSON.parse(body);)
});
req.on('error', err => reject(err));
}