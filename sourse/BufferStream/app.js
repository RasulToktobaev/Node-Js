const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/text2.txt');
const compressStream = zlib.createGzip()

// readStream.on('data', (chunk) => {
//     writeStream.write('\n ---- CHUNK ----\n')
//     writeStream.write(chunk);
// });

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finish with error...')
}

readStream
.on('error', handleError)
.pipe(compressStream)
.pipe(writeStream)
.on('error', handleError);
