import { readFile } from 'fs';

export const read = async () => {
    const pathToFile = './files/fileToRead.txt';

    readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) throw new Error ('FS operation failed');

        console.log(data);
    })
};

read();