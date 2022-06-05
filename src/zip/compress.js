import { createReadStream, createWriteStream } from'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
  const pathToFile = 'files/fileToCompress.txt';
  const pathToZip = 'files/archive.gz';
  const handleStream = createReadStream(pathToFile);
  try {
    handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(pathToZip));
  } catch {
    console.log('Something went wrong');
  }
  

};

compress();