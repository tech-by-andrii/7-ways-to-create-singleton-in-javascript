class ConstructorSingleton {
    static _cache = new this();

    constructor() {
        return this.constructor._cache;
    }

    invoke() {};
}

/**
 * Usage
 */

new ConstructorSingleton().invoke()

/**
 * Proof
 */

new ConstructorSingleton() === new ConstructorSingleton() // => true
