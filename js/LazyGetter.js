class LazyGetterSingleton {
    static _instanceCache

    static get instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        return this._instanceCache;
    }

    invoke() {};
}

LazyGetterSingleton.instance.invoke()
