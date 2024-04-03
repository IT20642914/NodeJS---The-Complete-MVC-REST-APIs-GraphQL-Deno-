const http=require('http');
const fs=require('fs');
// const reqListener = (req, res) => {
//     console.log(req);
// }
// http.createServer(reqListener);

const server=http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(req.url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        // const body = [];
        // req.on('data', (chunk) => {
        //     console.log(chunk);
        //     body.push(chunk);
        // });
        // req.on('end', () => {
        //     const parsedBody = Buffer.concat(body).toString();
        //     console.log(parsedBody);
        // });
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<head><title>My First Page</title></head');
    res.write('<body><h1>Hello World from my First nodejs Server</h1>')
    res.write('</html>');
    res.end();
})

server.listen(3000);