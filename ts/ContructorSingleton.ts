class ConstructorSingleton {
    static cache: ConstructorSingleton = new this();

    constructor() {
        return (<typeof ConstructorSingleton>this.constructor).cache;
    }

    invoke(): void {};
}

/**
 * Usage
 */

new ConstructorSingleton().invoke()

/**
 * Proof
 */

new ConstructorSingleton() === new ConstructorSingleton() // => true
