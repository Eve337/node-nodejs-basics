import os from 'os';
import path, { resolve } from 'path';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const cores = os.cpus().map((_, i) => i + 10);
    const pathToWorker = path.resolve('./worker.js');

    const result = cores.map((current) => new Promise((res, rej) => {
      const worker = new Worker(pathToWorker, { workerData: current });
      worker.on("message", res);
      worker.on("error", rej);

      worker.on("exit", (exitCode) => {
        if (exitCode) console.log(exitCode);
      });
    }));


    const response = await Promise.all(result);

    console.log(response);
};

performCalculations();