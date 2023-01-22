function decorateSingleton(Class) {
    Class.instance = new Class();
}

class DecoratorSingleton {
    invoke() {};
}

decorateSingleton(DecoratorSingleton);

DecoratorSingleton.instance.invoke()
