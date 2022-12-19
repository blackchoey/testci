interface Parser {
    toInt(input: string): number;
    toString(input: number): string;
}
declare class NumberParser implements Parser {
    toInt(input: string): number;
    toString(input: number): string;
    toFloat(): number;
}
interface FloatParser {
    toFloat(): number;
}
declare class AnotherParser implements Parser {
    toInt(input: string): number;
    toString(input: number): string;
}
declare let a: AnotherParser;
//# sourceMappingURL=test.d.ts.map