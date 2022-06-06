import fs from 'fs';
import { pipeline } from 'stream';

export const read = async () => {
    const rs = fs.createReadStream('files/fileToRead.txt', 'utf-8');

    rs.pipe(process.stdout);
    pipeline(rs, process.stdout, () => {
        console.log('file read')
    });
};

read();