const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});


//Создание middleware
app.use((req, res, next) => {
    console.log(`path:${req.path}`);
    console.log(`method:${req.method}`);
    next();
})

app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
})

app.get('/', (req, res) => {
    res.render(createPath('index'));
});

app.get('/contacts', (req, res) => {
    res.render(createPath('contacts'));
});

app.get('/about-us', (req, res) => {
    res.render('/contacts');
});


app.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'));
});

