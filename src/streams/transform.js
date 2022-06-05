import { pipeline } from 'stream';
import { Transform } from 'node:stream';

export const transform = async () => {
    class TransformStream extends Transform {
        constructor(options) {
            super(options);
        }

        _transform(chunk, enc, cb) {
            if (chunk) {

                this.push(chunk.toString('utf8').split('').reverse().join(''));
            }
            cb();
        }
    }

    const ts = new TransformStream();


    try {
        pipeline(process.stdin, ts, process.stdout, () => {
            console.log('Tranformed');
        });
    } catch {
        console.log('Something went wrong');
    }
    
};

transform();