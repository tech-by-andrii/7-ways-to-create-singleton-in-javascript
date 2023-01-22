class ClassicSingleton {
    public static instance: ClassicSingleton = new this();

    public invoke(): void {};
}

ClassicSingleton.instance.invoke();

