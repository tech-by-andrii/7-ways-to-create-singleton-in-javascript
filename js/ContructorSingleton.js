class ConstructorSingleton {
    static cache = new this();

    constructor() {
        return this.constructor.cache;
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
