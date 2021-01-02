const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = {
    sourceMap: true,
    defaults: {
        script: "typescript",
        style: "scss",
    },
};

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),
    preprocessOptions,
};
