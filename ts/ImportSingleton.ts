class ImportSingleton {
    invoke(): void {};
}

const importSingleton: ImportSingleton = new ImportSingleton();

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

const importSingleton: ImportSingleton = require("./ImportSingleton");

importSingleton.invoke()
