class ClassicSingleton {
    static instance = new this();

    invoke() {};
}

ClassicSingleton.instance.invoke();
