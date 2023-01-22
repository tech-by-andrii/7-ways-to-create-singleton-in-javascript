class Lazy {
    static _instanceCache

    static instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        return this._instanceCache;
    }

    invoke() {};
}

Lazy.instance().invoke();
