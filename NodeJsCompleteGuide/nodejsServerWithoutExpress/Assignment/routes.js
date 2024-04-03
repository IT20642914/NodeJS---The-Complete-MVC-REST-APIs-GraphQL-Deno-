const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head');
        res.write('<body><h1>Hi Assignment 1</h1></body>')
        res.write('</html>');
        return res.end();
    }
    if(url ==='/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if(url=== '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
       return  req.on('end', () => {
            const praseBody = Buffer.concat(body).toString();
            const message = praseBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

}

// exports.handler=requestHandler;
exports = requestHandler;
exports.someText = 'Some hard coded text';