import { readdir } from 'fs';

export const list = async () => {
    const pathToFolder = './files';

    readdir(pathToFolder, (err, files) => {
        if (err) throw new Error('FS operation failed');

        files.forEach((currentFile) => {
            console.log(currentFile);
        });
    });
};

list();