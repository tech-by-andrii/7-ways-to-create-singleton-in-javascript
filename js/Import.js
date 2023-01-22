class ImportSingleton {
    invoke() {};
}

const importSingleton = new ImportSingleton();

/**
 * ES6 Module imports example
 */
export {
    importSingleton,
}

/**
 * Node.js example
 */

module.exports = importSingleton;

/**
 * Usage
 */

/**
 * ES6 Module usage
 */

import { importSingletion } from "./ImportSingleton";

importSingleton.invoke()

/**
 * Node.js example
 */

const importSingleton = require("./ImportSingleton");

importSingleton.invoke()
