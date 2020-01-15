var http = require('http');
var axios = require('axios');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(4000);

axios.get('https://www.wikipedia.org/w/api.php?action=query&tables=players&fields=ID&format=json')
    .then(res => console.log(res.data))