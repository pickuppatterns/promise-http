const http = require('http');


http.createServer((req, res) => {
  console.log('request incoming');
  res.setHeader();
  res.end('hi there!');
})
  .listen(7890);

