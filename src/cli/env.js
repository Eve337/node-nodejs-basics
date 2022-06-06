export const parseEnv = () => {
    const paramRegex = /^(--)/
    const args = process.argv.slice(2);
    console.log(args);
    for (let i = 0; i < args.length; i++) {
        if (paramRegex.test(args[i])) {
            console.log(`${args[i]} is ${args[i + 1] ? args[i + 1] : 'empty'}`);
        }
    }
};

parseEnv();