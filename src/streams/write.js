import fs from 'fs';
import { pipeline } from 'stream';

export const write = async () => {
    try {
        const ws = fs.createWriteStream('files/fileToWrite.txt', 'utf-8');

        // process.stdin.pipe(ws);

        pipeline(process.stdin, ws, () => {
            console.log('Successfully writed');
        })

    } catch (e) {
        if (e) console.log('FS operation failed');
    }
    
};

write();