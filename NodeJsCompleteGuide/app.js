const http=require('http');

// const reqListener = (req, res) => {
//     console.log(req);
// }
// http.createServer(reqListener);

const server=http.createServer((req, res) => {
    console.log(req);
    // // process.exit();
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('<h1>Hello World</h1>');
    // res.end();
})

server.listen(3000);