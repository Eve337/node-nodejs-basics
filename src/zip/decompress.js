import { createReadStream, createWriteStream } from'fs';
import zlib from 'zlib';

export const decompress = async () => {
  const pathToFile = 'files/fileToCompress.txt';
  const pathToZip = 'files/archive.gz';
  const handleStream = createReadStream(pathToZip);
  try {
    handleStream
    .pipe(zlib.Gunzip())
    .pipe(createWriteStream(pathToFile));
  } catch {
    console.log('Something went wrong');
  } 
};

decompress();