import fs, { existsSync, readdir, copyFile, mkdir } from 'fs';

export const copy = async () => {
    const pathToFolder = './files';
    const pathToFolderCopy = './files_copy';

    if (!existsSync(pathToFolder) || existsSync(pathToFolderCopy)) {
        throw new Error('FS operation failed');
    } else {
        mkdir(pathToFolderCopy, () => {
            console.log('Created folder: ', pathToFolderCopy);
        });
    }


    readdir(pathToFolder, (err, files) => {
        files.forEach((currentFile) => {
            copyFile(`${pathToFolder}/${currentFile}`, `${pathToFolderCopy}/${currentFile}`, () => {
                console.log('Created copy of file: ', currentFile);
            })
        });
    });
    
};

copy();