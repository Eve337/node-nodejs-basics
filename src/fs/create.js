import { writeFile } from 'fs'; 

export const create = async () => {
    const pathToFile = 'files/fresh.txt';

        writeFile(pathToFile, 'I am fresh and young', { flag: "wx+" }, function(err){
            if(err) throw new Error('FS operation failed');
            console.log('Data saved');
        });
    
};



create();