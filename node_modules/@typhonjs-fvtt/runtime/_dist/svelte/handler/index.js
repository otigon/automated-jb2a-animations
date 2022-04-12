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
function createMultiClick({ single, double, delay = 400, _clicks = 0,
 _timer = void 0 } = {})
{
   return () =>
   {
      _clicks++;

      if (_clicks === 1)
      {
         _timer = setTimeout(() =>
         {
            if (typeof single === 'function') { single(); }
            _clicks = 0;
         }, delay);
      }
      else
      {
         clearTimeout(_timer);
         if (typeof double === 'function') { double(); }
         _clicks = 0;
      }
   };
}

export { createMultiClick };
//# sourceMappingURL=index.js.map
