export interface pluginInterface {
    name: string;
    scaffold(): void;
}
export interface anotherInterface {
    hi(b: string): Promise<void>;
}
export declare class pluginA implements pluginInterface {
    name: string;
    constructor(n: string);
    scaffold(): void;
    hi(b: string): Promise<void>;
}
export declare class pluginB implements pluginInterface {
    name: string;
    constructor(n: string);
    scaffold(): void;
}
//# sourceMappingURL=index.d.ts.map