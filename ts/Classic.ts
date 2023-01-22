class Classic {
    public static instance: Classic = new this();

    public invoke(): void {};
}

Classic.instance.invoke();

