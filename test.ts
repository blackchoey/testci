interface Parser {
    toInt(input: string): number;
    toString(input: number): string;
}

class NumberParser implements Parser {
    toInt(input: string): number {
        return 0;
    }

    toString(input: number): string {
        return "";
    }

    toFloat(): number {
        return 0;
    }
}

interface FloatParser {
    toFloat(): number;
}

class AnotherParser implements Parser {
    toInt(input: string): number {
        return 0;
    }

    toString(input: number): string {
        return "";
    }
}

let a = new AnotherParser();