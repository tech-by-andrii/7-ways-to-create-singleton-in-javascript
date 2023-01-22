const symbol = Symbol('singleton-decorator:instance')

function instance (Class) {
    return Class[symbol] = Class[symbol] instanceof Class ? Class[symbol] : new Class();
}

function singleton (Class) {
    return instance.bind(null, Class)
}

const DecoratorConstructorSingleton = singleton(class  {
    invoke() {};
})

/**
 * Usage
 */

new DecoratorConstructorSingleton().invoke()

/**
 * Or
 */

DecoratorConstructorSingleton().invoke()

/**
 * Proof
 */
console.log(new DecoratorConstructorSingleton() === new DecoratorConstructorSingleton()) // => true

console.log(DecoratorConstructorSingleton() === DecoratorConstructorSingleton()) // => true
