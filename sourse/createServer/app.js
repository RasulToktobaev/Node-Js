const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const server = http.createServer((req, res) => {
    console.log('Server requst');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

    let basePath = "";

    switch(req.url) {
        case '/':
        case '/home':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
            case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts');
            res.end();
            break;
        case '/about':
            basePath = createPath('about');
            break;
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }


    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500;
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    });
});


    // res.write('<head><link rel="stylesheet" href="#"></link></head>');

    // res.write('<h1>Hello, world!</h1>');
    // res.write('<h2>Hello, world!</h2>');

    // const data = JSON.stringify([
    //     {
    //         id: 1,
    //         text: 'Hello'
    //     },
    //     {
    //         id: 2,
    //         text: 'World'
    //     },
    //     {
    //         id: 3,
    //         text: '!'
    //     }
    // ])
    // res.end(data);


server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});