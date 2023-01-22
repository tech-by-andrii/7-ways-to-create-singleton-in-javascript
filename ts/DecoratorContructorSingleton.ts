const symbol: symbol = Symbol('singleton')

function instance(Class: any): any {
    return Class[symbol] = Class[symbol] instanceof Class ? Class[symbol] : new Class();
}

function singleton<BaseClass>(Class: BaseClass): BaseClass {
    return instance.bind(null, Class) as BaseClass;
}

class Base {
    invoke(): void {};
}

const DecoratorConstructorSingleton = singleton<typeof Base>(Base)

/**
 * Usage
 */

new DecoratorConstructorSingleton().invoke()

/**
 * Proof
 */
console.log(new DecoratorConstructorSingleton() === new DecoratorConstructorSingleton()) // => true
