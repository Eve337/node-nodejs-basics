import { unlink } from 'fs';

export const remove = async () => {
    const pathToFile = 'files/fileToRemove.txt';
    unlink(pathToFile, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

remove();