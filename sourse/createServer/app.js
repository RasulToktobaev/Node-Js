const http = require('http');

const PORT = 3000;


const server = http.createServer((req, res) => {
    console.log('Server requst');
    console.log(req.url, req.method);

     res.setHeader('Content-Type', 'application/json');

    // res.write('<head><link rel="stylesheet" href="#"></link></head>');

    // res.write('<h1>Hello, world!</h1>');
    // res.write('<h2>Hello, world!</h2>');

    const data = JSON.stringify([
        {
            id: 1,
            text: 'Hello'
        },
        {
            id: 2,
            text: 'World'
        },
        {
            id: 3,
            text: '!'
        }
    ])
    res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});