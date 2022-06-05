import { readFile } from 'fs';
import crypto from 'crypto';

export const calculateHash = async () => {
    const secret = 'secret';

    readFile('files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        try {
            const sha256Hasher = crypto.createHmac("sha256", secret);
            const hash = sha256Hasher.update(data).digest("hex");
            console.log(hash);
        } catch {
            console.log('Something went wrong')
        }
    });
};

calculateHash();