var http = require('http');
var fs   = require('fs');

/* Haciendo un buffer sobre un streaming y repartiendo por Pipe,
usando un request response HTTP */
var server = http.createServer(function(req, res){
  console.log('Request was made '+ req.url);

  //read or write text plain
  //res.writeHead(200, {'Content-Type': 'text/plain'});

  //send html file by http
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //var myReadStream = fs.createReadStream('./index.html', 'utf8');
  //myReadStream.pipe(res);

  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name : 'Ryu',
    job  : 'Ninja',
    age  : 29
  };

  res.end(JSON.stringify(myObj));
});

server.listen(4001, '127.0.0.1');
console.log('Now listening to port 4001');


/* Forma basica de hacer un streamming
var myReadStream = fs.createReadStream('./readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream('./writeStream.txt');
myReadStream.on('data', function(chunk){
  console.log('*************** new chunk received: ');
  myWriteStream.write(chunk);
});
*/
