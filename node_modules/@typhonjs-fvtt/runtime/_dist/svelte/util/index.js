import { group_outros, transition_out, check_outros } from 'svelte/internal';

/**
 * Wraps a callback in a debounced timeout.
 *
 * Delay execution of the callback function until the function has not been called for the given delay in milliseconds.
 *
 * @param {Function} callback - A function to execute once the debounced threshold has been passed.
 *
 * @param {number}   delay - An amount of time in milliseconds to delay.
 *
 * @return {Function} A wrapped function that can be called to debounce execution.
 */
function debounce(callback, delay)
{
   let timeoutId;

   return function(...args)
   {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => { callback.apply(this, args); }, delay);
   }
}

/**
 * Provides a method to determine if the passed in Svelte component has a getter accessor.
 *
 * @param {*}        component - Svelte component.
 *
 * @param {string}   accessor - Accessor to test.
 *
 * @returns {boolean} Whether the component has the getter for accessor.
 */
function hasGetter(component, accessor)
{
   if (component === null || component === void 0) { return false; }

   // Get the prototype which is the parent SvelteComponent that has any getter / setters.
   const prototype = Object.getPrototypeOf(component);
   const descriptor = Object.getOwnPropertyDescriptor(prototype, accessor);

   return !(descriptor === void 0 || descriptor.get === void 0);
}

/**
 * Provides a method to determine if the passed in Svelte component has a getter & setter accessor.
 *
 * @param {*}        component - Svelte component.
 *
 * @param {string}   accessor - Accessor to test.
 *
 * @returns {boolean} Whether the component has the getter and setter for accessor.
 */
function hasAccessor(component, accessor)
{
   if (component === null || component === void 0) { return false; }

   // Get the prototype which is the parent SvelteComponent that has any getter / setters.
   const prototype = Object.getPrototypeOf(component);
   const descriptor = Object.getOwnPropertyDescriptor(prototype, accessor);

   return !(descriptor === void 0 || descriptor.get === void 0 || descriptor.set === void 0);
}

/**
 * Provides a method to determine if the passed in Svelte component has a setter accessor.
 *
 * @param {*}        component - Svelte component.
 *
 * @param {string}   accessor - Accessor to test.
 *
 * @returns {boolean} Whether the component has the setter for accessor.
 */
function hasSetter(component, accessor)
{
   if (component === null || component === void 0) { return false; }

   // Get the prototype which is the parent SvelteComponent that has any getter / setters.
   const prototype = Object.getPrototypeOf(component);
   const descriptor = Object.getOwnPropertyDescriptor(prototype, accessor);

   return !(descriptor === void 0 || descriptor.set === void 0);
}

/**
 * Provides a solid string hashing algorithm.
 *
 * Sourced from: https://stackoverflow.com/a/52171480
 *
 * @param {string}   str - String to hash.
 *
 * @param {number}   seed - A seed value altering the hash.
 *
 * @returns {number} Hash code.
 */
function hashCode(str, seed = 0)
{
   if (typeof str !== 'string') { return 0; }

   let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;

   for (let ch, i = 0; i < str.length; i++)
   {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
   }

   h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
   h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

   return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

/**
 * Generates a UUID v4 compliant ID. Please use a complete UUID generation package for guaranteed compliance.
 *
 * This code is an evolution of the following Gist.
 * https://gist.github.com/jed/982883
 *
 * There is a public domain / free copy license attached to it that is not a standard OSS license...
 * https://gist.github.com/jed/982883#file-license-txt
 *
 * @returns {string} UUIDv4
 */
function uuidv4()
{
   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (globalThis.crypto || globalThis.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

/**
 * Performs linear interpolation between a start & end value by given amount between 0 - 1 inclusive.
 *
 * @param {number}   start - Start value.
 *
 * @param {number}   end - End value.
 *
 * @param {number}   amount - Current amount between 0 - 1 inclusive.
 *
 * @returns {number} Linear interpolated value between start & end.
 */
function lerp(start, end, amount)
{
   return (1 - amount) * start + amount * end;
}

/**
 * Defines the application shell contract. If Svelte components export getter / setters for the following properties
 * then that component is considered an application shell.
 *
 * @type {string[]}
 */
const applicationShellContract = ['elementRoot'];

Object.freeze(applicationShellContract);

/**
 * Provides a method to determine if the passed in object is ApplicationShell or TJSApplicationShell.
 *
 * @param {*}  component - Object / component to test.
 *
 * @returns {boolean} Whether the component is a ApplicationShell or TJSApplicationShell.
 */
function isApplicationShell(component)
{
   if (component === null || component === void 0) { return false; }

   // Get the prototype which is the parent SvelteComponent that has any getter / setters.
   const prototype = Object.getPrototypeOf(component);

   // Verify the application shell contract. If the accessors (getters / setters) are defined for
   // `applicationShellContract`.
   for (const accessor of applicationShellContract)
   {
      const descriptor = Object.getOwnPropertyDescriptor(prototype, accessor);
      if (descriptor === void 0 || descriptor.get === void 0 || descriptor.set === void 0) { return false; }
   }

   return true;
}

/**
 * Provides basic duck typing to determine if the provided function is a constructor function for a Svelte component.
 *
 * @param {*}  comp - Data to check as a Svelte component.
 *
 * @returns {boolean} Whether basic duck typing succeeds.
 */
function isSvelteComponent(comp)
{
   if (comp === null || comp === void 0 || typeof comp !== 'function') { return false; }

   return typeof window !== void 0 ?
    typeof comp.prototype.$destroy === 'function' && typeof comp.prototype.$on === 'function' : // client-side
     typeof comp.render === 'function'; // server-side
}

/**
 * Runs outro transition then destroys Svelte component.
 *
 * Workaround for https://github.com/sveltejs/svelte/issues/4056
 *
 * @param {*}  instance - A Svelte component.
 */
async function outroAndDestroy(instance)
{
   return new Promise((resolve) =>
   {
      if (instance.$$.fragment && instance.$$.fragment.o)
      {
         group_outros();
         transition_out(instance.$$.fragment, 0, 0, () =>
         {
            instance.$destroy();
            resolve();
         });
         check_outros();
      }
      else
      {
         instance.$destroy();
         resolve();
      }
   });
}

/**
 * Parses a TyphonJS Svelte config object ensuring that classes specified are Svelte components and props are set
 * correctly.
 *
 * @param {object}   config - Svelte config object.
 *
 * @param {*}        [thisArg] - `This` reference to set for invoking any props function.
 *
 * @returns {object} The processed Svelte config object.
 */
function parseSvelteConfig(config, thisArg = void 0)
{
   if (typeof config !== 'object')
   {
      throw new TypeError(`parseSvelteConfig - 'config' is not an object:\n${JSON.stringify(config)}.`);
   }

   if (!isSvelteComponent(config.class))
   {
      throw new TypeError(
       `parseSvelteConfig - 'class' is not a Svelte component constructor for config:\n${JSON.stringify(config)}.`);
   }

   if (config.hydrate !== void 0 && typeof config.hydrate !== 'boolean')
   {
      throw new TypeError(
       `parseSvelteConfig - 'hydrate' is not a boolean for config:\n${JSON.stringify(config)}.`);
   }

   if (config.intro !== void 0 && typeof config.intro !== 'boolean')
   {
      throw new TypeError(
       `parseSvelteConfig - 'intro' is not a boolean for config:\n${JSON.stringify(config)}.`);
   }

   if (config.target !== void 0 && typeof config.target !== 'string' && !(config.target instanceof HTMLElement) &&
    !(config.target instanceof ShadowRoot) && !(config.target instanceof DocumentFragment))
   {
      throw new TypeError(
       `parseSvelteConfig - 'target' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${
        JSON.stringify(config)}.`);
   }

   if (config.anchor !== void 0 && typeof config.anchor !== 'string' && !(config.anchor instanceof HTMLElement) &&
    !(config.anchor instanceof ShadowRoot) && !(config.anchor instanceof DocumentFragment))
   {
      throw new TypeError(
       `parseSvelteConfig - 'anchor' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${
        JSON.stringify(config)}.`);
   }

   if (config.context !== void 0 && typeof config.context !== 'function' && !(config.context instanceof Map) &&
    typeof config.context !== 'object')
   {
      throw new TypeError(
       `parseSvelteConfig - 'context' is not a Map, function or object for config:\n${JSON.stringify(config)}.`);
   }

   // Validate extra TyphonJS options --------------------------------------------------------------------------------

   // `selectorTarget` optionally stores a target element found in main element.
   if (config.selectorTarget !== void 0 && typeof config.selectorTarget !== 'string')
   {
      throw new TypeError(
       `parseSvelteConfig - 'selectorTarget' is not a string for config:\n${JSON.stringify(config)}.`);
   }

   // `options` stores `injectApp`, `injectEventbus`, and `selectorElement`.
   if (config.options !== void 0 && typeof config.options !== 'object')
   {
      throw new TypeError(
       `parseSvelteConfig - 'options' is not an object for config:\n${JSON.stringify(config)}.`);
   }

   // Validate TyphonJS standard options.
   if (config.options !== void 0)
   {
      if (config.options.injectApp !== void 0 && typeof config.options.injectApp !== 'boolean')
      {
         throw new TypeError(
          `parseSvelteConfig - 'options.injectApp' is not a boolean for config:\n${JSON.stringify(config)}.`);
      }

      if (config.options.injectEventbus !== void 0 && typeof config.options.injectEventbus !== 'boolean')
      {
         throw new TypeError(
          `parseSvelteConfig - 'options.injectEventbus' is not a boolean for config:\n${JSON.stringify(config)}.`);
      }

      // `selectorElement` optionally stores a main element selector to be found in a HTMLElement target.
      if (config.options.selectorElement !== void 0 && typeof config.options.selectorElement !== 'string')
      {
         throw new TypeError(
          `parseSvelteConfig - 'selectorElement' is not a string for config:\n${JSON.stringify(config)}.`);
      }
   }

   const svelteConfig = { ...config };

   // Delete extra Svelte options.
   delete svelteConfig.options;

   let externalContext = {};

   // If a context callback function is provided then invoke it with `this` being the Foundry app.
   // If an object is returned it adds the entries to external context.
   if (typeof svelteConfig.context === 'function')
   {
      const contextFunc = svelteConfig.context;
      delete svelteConfig.context;

      const result = contextFunc.call(thisArg);
      if (typeof result === 'object')
      {
         externalContext = { ...result };
      }
      else
      {
         throw new Error(`parseSvelteConfig - 'context' is a function that did not return an object for config:\n${
          JSON.stringify(config)}`);
      }
   }
   else if (svelteConfig.context instanceof Map)
   {
      externalContext = Object.fromEntries(svelteConfig.context);
      delete svelteConfig.context;
   }
   else if (typeof svelteConfig.context === 'object')
   {
      externalContext = svelteConfig.context;
      delete svelteConfig.context;
   }

   // If a props is a function then invoke it with `this` being the Foundry app.
   // If an object is returned set it as the props.
   svelteConfig.props = s_PROCESS_PROPS(svelteConfig.props, thisArg, config);

   // Process children components attaching to external context.
   if (Array.isArray(svelteConfig.children))
   {
      const children = [];

      for (let cntr = 0; cntr < svelteConfig.children.length; cntr++)
      {
         const child = svelteConfig.children[cntr];

         if (!isSvelteComponent(child.class))
         {
            throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for child[${cntr}] for config:\n${
             JSON.stringify(config)}`);
         }

         child.props = s_PROCESS_PROPS(child.props, thisArg, config);

         children.push(child);
      }

      if (children.length > 0)
      {
         externalContext.children = children;
      }

      delete svelteConfig.children;
   }
   else if (typeof svelteConfig.children === 'object')
   {
      if (!isSvelteComponent(svelteConfig.children.class))
      {
         throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for children object for config:\n${
          JSON.stringify(config)}`);
      }

      svelteConfig.children.props = s_PROCESS_PROPS(svelteConfig.children.props, thisArg, config);

      externalContext.children = [svelteConfig.children];
      delete svelteConfig.children;
   }

   if (!(svelteConfig.context instanceof Map))
   {
      svelteConfig.context = new Map();
   }

   svelteConfig.context.set('external', externalContext);

   return svelteConfig;
}

/**
 * Processes Svelte props. Potentially props can be a function to invoke with `thisArg`.
 *
 * @param {object|Function}   props - Svelte props.
 *
 * @param {*}                 thisArg - `This` reference to set for invoking any props function.
 *
 * @param {object}            config - Svelte config
 *
 * @returns {object|void}     Svelte props.
 */
function s_PROCESS_PROPS(props, thisArg, config)
{
   // If a props is a function then invoke it with `this` being the Foundry app.
   // If an object is returned set it as the props.
   if (typeof props === 'function')
   {
      const result = props.call(thisArg);
      if (typeof result === 'object')
      {
         return result;
      }
      else
      {
         throw new Error(`parseSvelteConfig - 'props' is a function that did not return an object for config:\n${
          JSON.stringify(config)}`);
      }
   }
   else if (typeof props === 'object')
   {
      return props;
   }
   else if (props !== void 0)
   {
      throw new Error(
       `parseSvelteConfig - 'props' is not a function or an object for config:\n${JSON.stringify(config)}`);
   }

   return {};
}

/**
 * Provides common object manipulation utilities including depth traversal, obtaining accessors, safely setting values /
 * equality tests, and validation.
 */

const s_TAG_OBJECT = '[object Object]';

/**
 * Recursively deep merges all source objects into the target object in place. Like `Object.assign` if you provide `{}`
 * as the target a copy is produced. If the target and source property are object literals they are merged.
 * Deleting keys is supported by specifying a property starting with `-=`.
 *
 * @param {object}      target - Target object.
 *
 * @param {...object}   sourceObj - One or more source objects.
 *
 * @returns {object}    Target object.
 */
function deepMerge(target = {}, ...sourceObj)
{
   if (Object.prototype.toString.call(target) !== s_TAG_OBJECT)
   {
      throw new TypeError(`deepMerge error: 'target' is not an 'object'.`);
   }

   for (let cntr = 0; cntr < sourceObj.length; cntr++)
   {
      if (Object.prototype.toString.call(sourceObj[cntr]) !== s_TAG_OBJECT)
      {
         throw new TypeError(`deepMerge error: 'sourceObj[${cntr}]' is not an 'object'.`);
      }
   }

   return _deepMerge(target, ...sourceObj);
}

/**
 * Tests for whether an object is iterable.
 *
 * @param {object} object - An object.
 *
 * @returns {boolean} Whether object is iterable.
 */
function isIterable(object)
{
   if (object === null || object === void 0 || typeof object !== 'object') { return false; }

   return typeof object[Symbol.iterator] === 'function';
}

/**
 * Tests for whether an object is async iterable.
 *
 * @param {object} object - An object.
 *
 * @returns {boolean} Whether object is async iterable.
 */
function isIterableAsync(object)
{
   if (object === null || object === void 0 || typeof object !== 'object') { return false; }

   return typeof object[Symbol.asyncIterator] === 'function';
}

/**
 * Tests for whether object is not null and a typeof object.
 *
 * @param {object} object - An object.
 *
 * @returns {boolean} Is it an object.
 */
function isObject(object)
{
   return object !== null && typeof object === 'object';
}

/**
 * Provides a way to safely access an objects data / entries given an accessor string which describes the
 * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
 * to walk.
 *
 * @param {object}   data - An object to access entry data.
 *
 * @param {string}   accessor - A string describing the entries to access.
 *
 * @param {*}        defaultValue - (Optional) A default value to return if an entry for accessor is not found.
 *
 * @returns {object} The data object.
 */
function safeAccess(data, accessor, defaultValue = void 0)
{
   if (typeof data !== 'object') { return defaultValue; }
   if (typeof accessor !== 'string') { return defaultValue; }

   const access = accessor.split('.');

   // Walk through the given object by the accessor indexes.
   for (let cntr = 0; cntr < access.length; cntr++)
   {
      // If the next level of object access is undefined or null then return the empty string.
      if (typeof data[access[cntr]] === 'undefined' || data[access[cntr]] === null) { return defaultValue; }

      data = data[access[cntr]];
   }

   return data;
}

/**
 * Provides a way to safely set an objects data / entries given an accessor string which describes the
 * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
 * to walk.
 *
 * @param {object}   data - An object to access entry data.
 *
 * @param {string}   accessor - A string describing the entries to access.
 *
 * @param {*}        value - A new value to set if an entry for accessor is found.
 *
 * @param {string}   [operation='set'] - Operation to perform including: 'add', 'div', 'mult', 'set',
 *                                       'set-undefined', 'sub'.
 *
 * @param {boolean}  [createMissing=true] - If true missing accessor entries will be created as objects
 *                                          automatically.
 *
 * @returns {boolean} True if successful.
 */
function safeSet(data, accessor, value, operation = 'set', createMissing = true)
{
   if (typeof data !== 'object') { throw new TypeError(`safeSet Error: 'data' is not an 'object'.`); }
   if (typeof accessor !== 'string') { throw new TypeError(`safeSet Error: 'accessor' is not a 'string'.`); }

   const access = accessor.split('.');

   // Walk through the given object by the accessor indexes.
   for (let cntr = 0; cntr < access.length; cntr++)
   {
      // If data is an array perform validation that the accessor is a positive integer otherwise quit.
      if (Array.isArray(data))
      {
         const number = (+access[cntr]);

         if (!Number.isInteger(number) || number < 0) { return false; }
      }

      if (cntr === access.length - 1)
      {
         switch (operation)
         {
            case 'add':
               data[access[cntr]] += value;
               break;

            case 'div':
               data[access[cntr]] /= value;
               break;

            case 'mult':
               data[access[cntr]] *= value;
               break;

            case 'set':
               data[access[cntr]] = value;
               break;

            case 'set-undefined':
               if (typeof data[access[cntr]] === 'undefined') { data[access[cntr]] = value; }
               break;

            case 'sub':
               data[access[cntr]] -= value;
               break;
         }
      }
      else
      {
         // If createMissing is true and the next level of object access is undefined then create a new object entry.
         if (createMissing && typeof data[access[cntr]] === 'undefined') { data[access[cntr]] = {}; }

         // Abort if the next level is null or not an object and containing a value.
         if (data[access[cntr]] === null || typeof data[access[cntr]] !== 'object') { return false; }

         data = data[access[cntr]];
      }
   }

   return true;
}

/**
 * Internal implementation for `deepMerge`.
 *
 * @param {object}      target - Target object.
 *
 * @param {...object}   sourceObj - One or more source objects.
 *
 * @returns {object}    Target object.
 */
function _deepMerge(target = {}, ...sourceObj)
{
   // Iterate and merge all source objects into target.
   for (let cntr = 0; cntr < sourceObj.length; cntr++)
   {
      const obj = sourceObj[cntr];

      for (const prop in obj)
      {
         if (Object.prototype.hasOwnProperty.call(obj, prop))
         {
            // Handle the special property starting with '-=' to delete keys.
            if (prop.startsWith('-='))
            {
               delete target[prop.slice(2)];
               continue;
            }

            // If target already has prop and both target[prop] and obj[prop] are object literals then merge them
            // otherwise assign obj[prop] to target[prop].
            target[prop] = Object.prototype.hasOwnProperty.call(target, prop) && target[prop]?.constructor === Object &&
            obj[prop]?.constructor === Object ? _deepMerge({}, target[prop], obj[prop]) : obj[prop];
         }
      }
   }

   return target;
}

export { debounce, deepMerge, hasAccessor, hasGetter, hasSetter, hashCode, isApplicationShell, isIterable, isIterableAsync, isObject, isSvelteComponent, lerp, outroAndDestroy, parseSvelteConfig, safeAccess, safeSet, uuidv4 };
//# sourceMappingURL=index.js.map
