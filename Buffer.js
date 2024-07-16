
import { Writable } from "stream"

function logToConsole() {
    
    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });

 
    writableStream.write('First line');
    writableStream.write('Second line');

    
    const buffer = Buffer.from('This is a buffer');
    writableStream.write(buffer);

    writableStream.end(); 
}


logToConsole();
