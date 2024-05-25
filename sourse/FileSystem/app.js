const { log } = require('console');
const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, data) => {

    fs.mkdirSync('./files', () => { });

    fs.writeFileSync('./files/test2.txt', `${data} New text!`, (error) => {
        error ? console.error(error) : null;
    });
});



setTimeout(() => {
    if (fs.existsSync('./files/test2.txt')){
        fs.unlink('./files/test2.txt', () => { })
    }

}, 4000)

setTimeout(() => {
    if (fs.existsSync('./files')){
        fs.rmdir('./files', () => { })
    }
}, 6000)