/* FS  - reading and writing files */
console.log('**********READIND FILES')
var fs = require('fs');
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

fs.writeFileSync('writeMe.txt', readMe);

/* FS  - reading and writing files asyncronos */
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeFileSync.txt', data);
});

/* Creating and Removing directories */
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeFile.txt', data);
  });
});

/* Remover archivos primero y luego un directorio

fs.unlink('./stuff/writeFile.txt', function(){
  fs.rmdir('stuff');
});
*/
