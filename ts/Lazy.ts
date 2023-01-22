class Lazy {
    private static instanceCache?: Lazy

    public static instance(): Lazy {
        if (!this.instanceCache) {
            this.instanceCache = new this();
        }

        return this.instanceCache;
    }

    public invoke(): void {};
}

Lazy.instance().invoke();
