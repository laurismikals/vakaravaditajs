const http = require('http');
const fs = require('fs');

const req = http.request('http://localhost:3000/', (res) => {
  res.setEncoding('utf8');

  const filePath = 'static/shell/index.html'

  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('Shell deleted');
  });
  res.on('data', (chunk) => {
    const wstream = fs.createWriteStream('static/shell/index.html', {'flags': 'a'});
    wstream.write(chunk);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
