class LazyGetter {
    private static instanceCache?: Lazy

    public static get instance(): Lazy {
        if (!this.instanceCache) {
            this.instanceCache = new this();
        }

        return this.instanceCache;
    }

    public invoke(): void {};
}

LazyGetter.instance.invoke()
