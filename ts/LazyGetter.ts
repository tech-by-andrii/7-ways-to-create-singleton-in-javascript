class LazyGetterSingleton {
    private static instanceCache?: LazyGetterSingleton

    public static get instance(): LazyGetterSingleton {
        if (!this.instanceCache) {
            this.instanceCache = new this();
        }

        return this.instanceCache;
    }

    public invoke(): void {};
}

LazyGetterSingleton.instance.invoke()
