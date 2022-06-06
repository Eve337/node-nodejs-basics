import { fork } from 'child_process';
import path from 'path';
import { stdout } from 'process';

export const spawnChildProcess = async (args) => {
    const pathToFile = path.join('files/script.js');
    stdout.write('stdout \n');
    fork(pathToFile, args);
};

spawnChildProcess([1,2,3,4]);