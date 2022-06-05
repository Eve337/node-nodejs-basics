export const parseArgs = () => {
    const nodeEnvs = process.env;
    process.env.RSS_jopa = 'ochko';
    const rssRegex = /^(RSS_)/;

    for (let key in nodeEnvs) {
        if (rssRegex.test(key)) {
            console.log(`${key} : ${nodeEnvs[key]}`);
        }
    }
};

parseArgs();