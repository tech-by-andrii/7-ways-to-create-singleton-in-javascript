class ImportSingleton {
    invoke(): void {};
}

export const importSingleton: ImportSingleton = new ImportSingleton();

import { importSingletion } from "./Import";

importSingleton.invoke()
