class LazySingleton {
    private static instanceCache?: LazySingleton

    public static instance(): LazySingleton {
        if (!this.instanceCache) {
            this.instanceCache = new this();
        }

        return this.instanceCache;
    }

    public invoke(): void {};
}

LazySingleton.instance().invoke();
