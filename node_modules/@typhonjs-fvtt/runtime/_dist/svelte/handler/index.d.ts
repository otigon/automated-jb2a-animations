/**
 * @param {object}   opts - Optional parameters.
 *
 * @param {Function} opts.single - Single click callback.
 *
 * @param {Function} opts.double - Double click callback.
 *
 * @param {number}   [opts.delay=400] - Double click delay.
 *
 * @param {number}   [opts._clicks] - Private data to track clicks.
 *
 * @param {number}   [opts._timer] - Private data to track timer.
 *
 * @returns {function(): void} The gated multi-click handler.
 */
declare function createMultiClick({ single, double, delay, _clicks, _timer }?: {
    single: Function;
    double: Function;
    delay?: number;
    _clicks?: number;
    _timer?: number;
}): () => void;

export { createMultiClick };
