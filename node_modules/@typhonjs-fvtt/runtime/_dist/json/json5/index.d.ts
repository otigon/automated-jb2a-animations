declare namespace lib {
    export { parse };
    export { stringify };
}
declare function parse(text: any, reviver: any): any;
declare function stringify(value: any, replacer: any, space: any): any;

export { lib as JSON5 };
