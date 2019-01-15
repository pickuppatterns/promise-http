const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/tester') {
    res.setHeader('Content-Type', 'text/JSON', 'testing: 123');
    res.end(JSON.stringify({ testing:123 }));
  }
};

