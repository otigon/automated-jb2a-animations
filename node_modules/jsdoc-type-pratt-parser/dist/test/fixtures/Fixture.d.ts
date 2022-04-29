import 'mocha';
import { RootResult, ParseMode } from '../../src';
export declare type JtpMode = 'jsdoc' | 'closure' | 'typescript' | 'permissive';
export declare type CatharsisMode = 'jsdoc' | 'closure';
export declare type CompareMode = ParseMode | 'fail' | 'differ';
export interface Fixture {
    /**
     * The input that should be parsed
     */
    input: string;
    /**
     * The {@link ParseMode}s that the expression is expected to get parsed in. In all other modes it is expected to fail.
     */
    modes?: ParseMode[];
    jtp?: {
        [K in JtpMode]: CompareMode;
    };
    catharsis?: {
        [K in CatharsisMode]: CompareMode;
    };
    /**
     * The expected parse result object. If you expect different parse results for different parse modes please use
     * `diffExpected`.
     */
    expected?: RootResult;
    error?: string;
    errors?: {
        [K in ParseMode]?: string;
    };
    /**
     * The expected parse results objects for different modes. If a mode is included in `modes` and as a key of
     * `diffExpected` the object in `diffExpected` is used over the result in `expected`.
     */
    diffExpected?: {
        [K in ParseMode]?: RootResult;
    };
    /**
     * If the stringified output differs from the input it can be provided here. These are mostly whitespace differences.
     */
    stringified?: string;
}
/**
 * Function to run all relevant tests for a {@link Fixture}.
 */
export declare function testFixture(fixture: Fixture): void;
