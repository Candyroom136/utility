const util = require('util');

const jsonParser = function({ json }) {
    const parsedJSON = JSON.parse(json);

    return parsedJSON;
}

const json = ``
const parsedJSON = jsonParser({json});

console.log(util.inspect(parsedJSON, false, null, true))