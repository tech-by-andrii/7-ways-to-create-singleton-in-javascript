const symbol: symbol = Symbol('singleton')

function instance(Class: any): any {
    if (!(Class[symbol] instanceof Class)) {
        Class[symbol] = new Class()
    }

    return Class[symbol]
}

function singleton<BaseClass>(Class: BaseClass): BaseClass {
    return instance.bind(null, Class) as BaseClass;
}

class Base {
    invoke(): void {};
}

const BindSingleton = singleton<typeof Base>(Base)

/**
 * Usage
 */

new BindSingleton().invoke()

/**
 * Proof
 */
console.log(new BindSingleton() === new BindSingleton()) // => true
