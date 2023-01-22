const symbol = Symbol('singleton')

function instance (Class) {
    if (!(Class[symbol] instanceof Class)) {
        Class[symbol] = new Class()
    }

    return Class[symbol]
}

function singleton (Class) {
    return instance.bind(null, Class)
}

const BindSingleton = singleton(class  {
    invoke() {};
})

/**
 * Usage
 */

new BindSingleton().invoke()

/**
 * Or
 */

BindSingleton().invoke()

/**
 * Proof
 */
console.log(new BindSingleton() === new BindSingleton()) // => true

console.log(BindSingleton() === BindSingleton()) // => true
