import fs from 'fs';

export const rename = async () => {
    const pathToFile = 'files/wrongFilename.txt';
    const newPathToFile = 'files/properFilename.md';

    fs.rename(pathToFile, newPathToFile, (e) => {
        if (e) throw new Error('FS operation failed');
    });
};

rename();