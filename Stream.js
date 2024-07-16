import { Writable } from 'stream';

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(`Writing chunk: ${chunk.toString()}`);
        callback();
    }
});


console.log('Default encoding:', writableStream._writableState.defaultEncoding);
console.log('Writable length:', writableStream.writableLength);
console.log('Is writable ended?', writableStream.writableEnded);

writableStream.write('Hello, world!');
writableStream.end(); 





import fs from 'fs';
import zlib from 'zlib';
import { Transform } from 'stream';
import path from 'path';


function compressPdf(filePath) {
    if (path.extname(filePath) !== '.pdf') {
        throw new Error('The file must have a .pdf extension');
    }

    const readStream = fs.createReadStream(filePath);
    const zip = zlib.createGzip();
    const writeStream = fs.createWriteStream(filePath + '.gz');

    readStream
        .pipe(zip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('PDF file has been compressed successfully.');
        });
}


compressPdf('path/to/file.pdf');
