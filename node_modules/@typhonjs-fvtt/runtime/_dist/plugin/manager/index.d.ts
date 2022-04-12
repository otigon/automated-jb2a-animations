/**
 * - PluginManager 'getEnabled' return object format.
 */
type DataOutPluginEnabled = {
    /**
     * - The plugin name.
     */
    plugin: string;
    /**
     * - The enabled state of the plugin.
     */
    enabled: boolean;
    /**
     * - True if the plugin is actually loaded.
     */
    loaded: boolean;
};
/**
 * - PluginManager 'getPluginEvents' / 'getPluginByEvent' return object format.
 */
type DataOutPluginEvents = {
    /**
     * - The plugin name.
     */
    plugin: string;
    /**
     * - The event names registered.
     */
    events: string[];
};
/**
 * - PluginManager 'remove' return object format.
 */
type DataOutPluginRemoved = {
    /**
     * - The plugin name.
     */
    plugin: string;
    /**
     * - The success state for removal.
     */
    success: boolean;
    /**
     * - A list of errors that may have been thrown during removal.
     */
    errors: Error[];
};
/**
 * - PluginManager 'add' / 'isValidConfig' plugin configuration.
 */
type PluginConfig = {
    /**
     * - Defines the name of the plugin; if no `target` entry is present the name doubles
     * as the target (please see target).
     */
    name: string;
    /**
     * - Defines the target Node module to load or defines a local file (full path or
     * relative to current working directory to load. Target may also be a file URL / string or in the browser a web URL.
     */
    target?: string | URL;
    /**
     * - Defines an existing object instance to use as the plugin.
     */
    instance?: object;
    /**
     * - Defines an object of options for the plugin.
     */
    options?: object;
};
/**
 * - PluginManager plugin data object describes a loaded plugin.
 */
type PluginData = {
    /**
     * - Data about the plugin manager.
     */
    manager: {
        eventPrepend: string;
        scopedName: string;
    };
    /**
     * - Optional object hash to associate with plugin.
     */
    module: object;
    /**
     * - Data about the plugin.
     */
    plugin: {
        name: string;
        target: string;
        targetEscaped: string;
        type: string;
        options: object;
    };
};
/**
 * - Provides the unified event data including any pass through data to the
 * copied data supplied. Invoked functions may add to or modify this data.
 */
type PluginEventData = object;
/**
 * - PluginManager options.
 */
type PluginManagerOptions = {
    /**
     * - If true this prevents plugins from being added by `plugins:add` and
     * `plugins:add:all` events forcing direct method invocation for addition.
     */
    noEventAdd?: boolean;
    /**
     * - If true this prevents the plugin manager from being destroyed by
     * `plugins:destroy:manager` forcing direct method invocation for destruction.
     */
    noEventDestroy?: boolean;
    /**
     * - If true this prevents plugins from being removed by `plugins:remove` and
     * `plugins:remove:all` events forcing direct method invocation for removal.
     */
    noEventRemoval?: boolean;
    /**
     * - If true this prevents the plugins from being enabled / disabled
     * from the eventbus via `plugins:set:enabled`.
     */
    noEventSetEnabled?: boolean;
    /**
     * - If true this prevents setting options for the plugin manager by
     * `plugins:set:options` forcing direct method invocation for setting options.
     */
    noEventSetOptions?: boolean;
    /**
     * - If true then when a method fails to be invoked by any plugin an exception
     * will be thrown.
     */
    throwNoMethod?: boolean;
    /**
     * - If true then when no plugin is matched to be invoked an exception will be
     * thrown.
     */
    throwNoPlugin?: boolean;
};

/**
 * Describes the interface that all PluginSupport classes must implement.
 */
interface PluginSupportImpl {
    /**
     * Destroys all managed plugins after unloading them.
     *
     * @param {object}     opts - An options object.
     *
     * @param {Eventbus}   opts.eventbus - The eventbus to disassociate.
     *
     * @param {string}     opts.eventPrepend - The current event prepend.
     */
    destroy({ eventbus, eventPrepend }: {
        eventbus: any;
        eventPrepend: string;
    }): Promise<void>;

    /**
     * Sets the eventbus associated with this plugin manager. If any previous eventbus was associated all plugin manager
     * events will be removed then added to the new eventbus. If there are any existing plugins being managed their
     * events will be removed from the old eventbus and then 'onPluginLoad' will be called with the new eventbus.
     *
     * @param {object}     opts - An options object.
     *
     * @param {Eventbus}   opts.oldEventbus - The old eventbus to disassociate.
     *
     * @param {Eventbus}   opts.newEventbus - The new eventbus to associate.
     *
     * @param {string}     opts.oldPrepend - The old event prepend.
     *
     * @param {string}     opts.newPrepend - The new event prepend.
     */
    setEventbus({ oldEventbus, newEventbus, oldPrepend, newPrepend }: {
        oldEventbus: any;
        newEventbus: any;
        oldPrepend: string;
        newPrepend: string;
    }): void;
    
    /**
     * Set optional parameters.
     *
     * @param {PluginManagerOptions} options Defines optional parameters to set.
     */
    setOptions(options: PluginManagerOptions): void;
}

/**
 * The complete options for an event name.
 */
type DataOutOptions = {
    /**
     * - The guarded option.
     */
    guard: boolean;
    /**
     * - The type option.
     */
    type: string;
};
/**
 * - The control object returned by `EventbusSecure.initialize`.
 */
type EventbusSecureObj = {
    /**
     * - A function which destroys the underlying Eventbus reference.
     */
    destroy: Function;
    /**
     * - The EventbusSecure instance.
     */
    eventbusSecure: any;
    /**
     * - A function to set the underlying Eventbus reference.
     */
    setEventbus: Function;
};
/**
 * - Event registration options for Eventbus.
 */
type OnOptions = {
    /**
     * - When set to true this registration is guarded. Further attempts to register an
     *    event by the same name will not be possible as long as a guarded event exists.
     */
    guard?: boolean;
    /**
     * - Provides a hint on the trigger type. May be a string or number 'sync' / 1 or
     *    'async' / 2. Any other value is not recognized and internally type will be
     *    set to undefined / 0.
     */
    type?: string | number;
};
/**
 * - Event registration options.
 */
type ProxyOnOptionsBase = {
    /**
     * -
     */
    private?: boolean;
};
/**
 * - Event registration options for EventbusProxy.
 */
type ProxyOnOptions = OnOptions & ProxyOnOptionsBase;

/**
 * EventbusProxy provides a protected proxy of another Eventbus instance.
 *
 * The main use case of EventbusProxy is to allow indirect access to an eventbus. This is handy when it comes to
 * managing the event lifecycle for a plugin system. When a plugin is added it could receive a callback, perhaps named
 * `onPluginLoaded`, which contains an EventbusProxy instance rather than the direct eventbus. This EventbusProxy
 * instance is associated in the management system controlling plugin lifecycle. When a plugin is removed / unloaded the
 * management system can automatically unregister all events for the plugin without requiring the plugin author doing it
 * correctly if they had full control. IE This allows to plugin system to guarantee no dangling listeners.
 *
 * EventbusProxy provides the on / off, before, once, and trigger methods with the same signatures as found in
 * Eventbus. However, the proxy tracks all added event bindings which is used to proxy between the target
 * eventbus which is passed in from the constructor. All registration methods (on / off / once) proxy. In addition
 * there is a `destroy` method which will unregister all of proxied events and remove references to the managed
 * eventbus. Any further usage of a destroyed EventbusProxy instance results in a ReferenceError thrown.
 *
 * Finally the EventbusProxy only allows events registered through it to be turned off providing a buffer between
 * any consumers such that they can not turn off other registrations made on the eventbus or other proxy instances.
 */
declare class EventbusProxy {
    /**
     * Creates the event proxy with an existing instance of Eventbus.
     *
     * @param {Eventbus}   eventbus - The target eventbus instance.
     */
    constructor(eventbus: any);
    /**
     * Just like `on`, but causes the bound callback to fire several times up to the count specified before being
     * removed. When multiple events are passed in using the space separated syntax, the event
     * will fire count times for every event you passed in, not once for a combination of all events.
     *
     * @param {number}            count - Number of times the function will fire before being removed.
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            [context] - Event context
     *
     * @param {ProxyOnOptions}    [options] - Event registration options.
     *
     * @returns {EventbusProxy} This EventbusProxy instance.
     */
    before(count: number, name: string | object, callback: Function | object, context?: object, options?: ProxyOnOptions): EventbusProxy;
    /**
     * Creates an EventbusProxy wrapping the backing Eventbus instance. An EventbusProxy proxies events allowing all
     * listeners added to be easily removed from the wrapped Eventbus.
     *
     * @returns {EventbusProxy} A new EventbusProxy for this eventbus.
     */
    createProxy(): EventbusProxy;
    /**
     * Unregisters all proxied events from the target eventbus and removes any local references. All subsequent calls
     * after `destroy` has been called result in a ReferenceError thrown.
     */
    destroy(): void;
    /**
     * Returns an iterable for all events from the proxied eventbus yielding an array with event name, callback function,
     * and event context.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    entries(regex?: RegExp): Generator<any, void, unknown>;
    /**
     * Returns the current proxied eventbus event count.
     *
     * @returns {number} Returns the current proxied event count.
     */
    get eventCount(): number;
    /**
     * Returns the current proxied eventbus callback count.
     *
     * @returns {number} Returns the current proxied callback count.
     */
    get callbackCount(): number;
    /**
     * Returns an iterable for the event names / keys of proxied eventbus event listeners.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keys(regex?: RegExp): Generator<any, void, unknown>;
    /**
     * Returns an iterable for the event names / keys of registered event listeners along with event options.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keysWithOptions(regex?: RegExp): Generator<any, void, unknown>;
    /**
     * Returns whether this EventbusProxy has already been destroyed.
     *
     * @returns {boolean} Is destroyed state.
     */
    get isDestroyed(): boolean;
    /**
     * Returns the target eventbus name.
     *
     * @returns {string} The target eventbus name.
     */
    get name(): string;
    /**
     * Returns the current proxied event count.
     *
     * @returns {number} Returns the current proxied event count.
     */
    get proxyEventCount(): number;
    /**
     * Returns the current proxied callback count.
     *
     * @returns {number} Returns the current proxied callback count.
     */
    get proxyCallbackCount(): number;
    /**
     * Returns the options of an event name.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {DataOutOptions} The event options.
     */
    getOptions(name: string): DataOutOptions;
    /**
     * Returns the trigger type of an event name.
     * Note: if trigger type is not set then undefined is returned for type otherwise 'sync' or 'async' is returned.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {string|undefined} The trigger type.
     */
    getType(name: string): string | undefined;
    /**
     * Returns whether an event name is guarded.
     *
     * @param {string|object}  name - Event name(s) or event map to verify.
     *
     * @param {object}         [data] - Stores the output of which names are guarded.
     *
     * @returns {boolean} Whether the given event name is guarded.
     */
    isGuarded(name: string | object, data?: object): boolean;
    /**
     * Remove a previously-bound proxied event binding.
     *
     * Please see {@link Eventbus#off}.
     *
     * @param {string|object}  [name] - Event name(s) or event map.
     *
     * @param {Function}       [callback] - Event callback function
     *
     * @param {object}         [context] - Event context
     *
     * @returns {EventbusProxy} This EventbusProxy
     */
    off(name?: string | object, callback?: Function, context?: object): EventbusProxy;
    /**
     * Bind a callback function to an object. The callback will be invoked whenever the event is fired. If you have a
     * large number of different events on a page, the convention is to use colons to namespace them: "poll:start", or
     * "change:selection".
     *
     * Please see {@link Eventbus#on}.
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            [context] - Event context.
     *
     * @param {ProxyOnOptions}    [options] - Event registration options.
     *
     * @returns {EventbusProxy} This EventbusProxy
     */
    on(name: string | object, callback: Function | object, context?: object, options?: ProxyOnOptions): EventbusProxy;
    /**
     * Just like `on`, but causes the bound callback to fire only once before being removed. Handy for saying "the next
     * time that X happens, do this". When multiple events are passed in using the space separated syntax, the event
     * will fire once for every event you passed in, not once for a combination of all events
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            context - Event context
     *
     * @param {ProxyOnOptions}    [options] - Event registration options.
     *
     * @returns {EventbusProxy} This EventbusProxy instance.
     */
    once(name: string | object, callback: Function | object, context?: object, options?: ProxyOnOptions): EventbusProxy;
    /**
     * Returns an iterable for all stored locally proxied events yielding an array with event name, callback
     * function, and event context.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    proxyEntries(regex?: RegExp): Generator<any[], void, unknown>;
    /**
     * Returns an iterable for the event names / keys of the locally proxied event names.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    proxyKeys(regex?: RegExp): Generator<string, void, unknown>;
    /**
     * Returns an iterable for the event names / keys of the locally proxied event names with event options.
     *
     * Note: The event options returned will respect all of the event options from a registered event event on the main
     * eventbus if applicable.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    proxyKeysWithOptions(regex?: RegExp): Generator<any[], void, unknown>;
    /**
     * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be
     * passed along to the event callbacks.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {EventbusProxy} This EventbusProxy.
     */
    trigger(name: string, ...args: any[]): EventbusProxy;
    /**
     * Provides `trigger` functionality, but collects any returned Promises from invoked targets and returns a
     * single Promise generated by `Promise.resolve` for a single value or `Promise.all` for multiple results. This is
     * a very useful mechanism to invoke asynchronous operations over an eventbus.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {Promise<void|*|*[]>} A Promise returning any results.
     */
    triggerAsync(name: string, ...args: any[]): Promise<void | any | any[]>;
    /**
     * Defers invoking `trigger`. This is useful for triggering events in the next clock tick.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {EventbusProxy} This EventbusProxy.
     */
    triggerDefer(name: string, ...args: any[]): EventbusProxy;
    /**
     * Provides `trigger` functionality, but collects any returned result or results from invoked targets as a single
     * value or in an array and passes it back to the callee in a synchronous manner.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {void|*|*[]} An Array of returned results.
     */
    triggerSync(name: string, ...args: any[]): void | any | any[];
    #private;
}

/**
 * EventbusSecure provides a secure wrapper around another Eventbus instance.
 *
 * The main use case of EventbusSecure is to provide a secure eventbus window for general public consumption. Only
 * events can be triggered, but not registered / unregistered.
 *
 * You must use the initialize method passing in an existing Eventbus instance as the eventbus reference is private.
 * In order to secure the eventbus from unwanted access there is no way to access the eventbus reference externally from
 * the EventbusSecure instance. The initialize method returns an {@link EventbusSecureObj} object which
 * contains two functions to control the secure eventbus externally; `destroy` and `setEventbus`. Expose to end
 * consumers just the `eventbusSecure` instance.
 */
declare class EventbusSecure {
    /**
     * Creates the EventbusSecure instance with an existing instance of Eventbus. An object / EventbusSecureObj is
     * returned with an EventbusSecure reference and two functions for controlling the underlying Eventbus reference.
     *
     * `destroy()` will destroy the underlying Eventbus reference.
     * `setEventbus(<eventbus>)` will set the underlying reference.
     *
     * @param {Eventbus|EventbusProxy}  eventbus - The target eventbus instance.
     *
     * @param {string}                  [name] - If a name is provided this will be used instead of eventbus name.
     *
     * @returns {EventbusSecureObj} The control object which contains an EventbusSecure reference and control functions.
     */
    static initialize(eventbus: any | any, name?: string): EventbusSecureObj;
    /**
     * Returns an iterable for the event names / keys of secured eventbus event listeners.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keys(regex?: RegExp): Generator<any, void, unknown>;
    /**
     * Returns an iterable for the event names / keys of registered event listeners along with event options.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keysWithOptions(regex?: RegExp): Generator<any, void, unknown>;
    /**
     * Returns whether this instance has already been destroyed.
     *
     * @returns {boolean} Is destroyed state.
     */
    get isDestroyed(): boolean;
    /**
     * Returns the name associated with this instance.
     *
     * @returns {string} The target eventbus name.
     */
    get name(): string;
    /**
     * Returns the options of an event name.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {DataOutOptions} The event options.
     */
    getOptions(name: string): DataOutOptions;
    /**
     * Returns the trigger type of an event name.
     * Note: if trigger type is not set then undefined is returned for type otherwise 'sync' or 'async' is returned.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {string|undefined} The trigger type.
     */
    getType(name: string): string | undefined;
    /**
     * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be
     * passed along to the event callbacks.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {EventbusSecure} This instance.
     */
    trigger(name: string, ...args: any[]): EventbusSecure;
    /**
     * Provides `trigger` functionality, but collects any returned Promises from invoked targets and returns a
     * single Promise generated by `Promise.resolve` for a single value or `Promise.all` for multiple results. This is
     * a very useful mechanism to invoke asynchronous operations over an eventbus.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {Promise<void|*|*[]>} A Promise to returning any results.
     */
    triggerAsync(name: string, ...args: any[]): Promise<void | any | any[]>;
    /**
     * Defers invoking `trigger`. This is useful for triggering events in the next clock tick.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {EventbusSecure} This EventbusProxy.
     */
    triggerDefer(name: string, ...args: any[]): EventbusSecure;
    /**
     * Provides `trigger` functionality, but collects any returned result or results from invoked targets as a single
     * value or in an array and passes it back to the callee in a synchronous manner.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {void|*|*[]} An Array of returned results.
     */
    triggerSync(name: string, ...args: any[]): void | any | any[];
    #private;
}

/**
 * `@typhonjs-plugin/eventbus` / Provides the ability to bind and trigger custom named events.
 *
 * This module is an evolution of Backbone Events. (http://backbonejs.org/#Events). Eventbus extends the
 * functionality provided in Backbone Events with additional triggering methods to receive asynchronous and
 * synchronous results.
 *
 * ---------------
 */
declare class Eventbus {
    /**
     * Provides a constructor which optionally takes the eventbus name.
     *
     * @param {string}   name - Optional eventbus name.
     */
    constructor(name?: string);
    /**
     * Just like `on`, but causes the bound callback to fire several times up to the count specified before being
     * removed. When multiple events are passed in using the space separated syntax, the event
     * will fire count times for every event you passed in, not once for a combination of all events.
     *
     * @param {number}            count - Number of times the function will fire before being removed.
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            [context] - Event context
     *
     * @param {OnOptions}         [options] - Event registration options.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    before(count: number, name: string | object, callback: Function | object, context?: object, options?: OnOptions): Eventbus;
    /**
     * Returns an iterable for all stored events yielding an array with event name, callback function, and event context.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    entries(regex?: RegExp): Generator<any[], void, unknown>;
    /**
     * Returns the current event count.
     *
     * @returns {number} Returns the current event count.
     */
    get eventCount(): number;
    /**
     * Returns the current callback count.
     *
     * @returns {number} The current callback count.
     */
    get callbackCount(): number;
    /**
     * Returns the options of an event name.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {DataOutOptions} The event options.
     */
    getOptions(name: string): DataOutOptions;
    /**
     * Returns the trigger type of an event name.
     * Note: if trigger type is not set then undefined is returned for type otherwise 'sync' or 'async' is returned.
     *
     * @param {string}   name - Event name(s) to verify.
     *
     * @returns {string|undefined} The trigger type.
     */
    getType(name: string): string | undefined;
    /**
     * Returns whether an event name is guarded.
     *
     * @param {string|object}  name - Event name(s) or event map to verify.
     *
     * @param {object}         [data] - Stores the output of which names are guarded.
     *
     * @returns {boolean} Whether the given event name is guarded.
     */
    isGuarded(name: string | object, data?: object): boolean;
    /**
     * Returns an iterable for the event names / keys of registered event listeners.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keys(regex?: RegExp): Generator<string, void, unknown>;
    /**
     * Returns an iterable for the event names / keys of registered event listeners along with event options.
     *
     * @param {RegExp} [regex] - Optional regular expression to filter event names.
     *
     * @yields
     */
    keysWithOptions(regex?: RegExp): Generator<(string | DataOutOptions)[], void, unknown>;
    /**
     * Returns the current eventbus name.
     *
     * @returns {string} The current eventbus name.
     */
    get name(): string;
    /**
     * Tell an object to listen to a particular event on an other object. The advantage of using this form, instead of
     * other.on(event, callback, object), is that listenTo allows the object to keep track of the events, and they can
     * be removed all at once later on. The callback will always be called with object as context.
     *
     * @example
     * view.listenTo(model, 'change', view.render);
     *
     * @param {object}            obj - Event context
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    listenTo(obj: object, name: string | object, callback: Function | object): Eventbus;
    _listeningTo: {};
    _listenId: string;
    /**
     * Just like `listenTo`, but causes the bound callback to fire count times before being removed.
     *
     * @param {number}            count - Number of times the function will fire before being removed.
     *
     * @param {object}            obj - Target event context.
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    listenToBefore(count: number, obj: object, name: string | object, callback: Function | object): Eventbus;
    /**
     * Just like `listenTo`, but causes the bound callback to fire only once before being removed.
     *
     * @param {object}            obj - Target event context
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    listenToOnce(obj: object, name: string | object, callback: Function | object): Eventbus;
    /**
     * Remove a previously-bound callback function from an object. If no context is specified, all of the versions of
     * the callback with different contexts will be removed. If no callback is specified, all callbacks for the event
     * will be removed. If no event is specified, callbacks for all events will be removed.
     *
     * Note that calling model.off(), for example, will indeed remove all events on the model — including events that
     * Backbone uses for internal bookkeeping.
     *
     * @example
     * // Removes just the `onChange` callback.
     * object.off("change", onChange);
     *
     * // Removes all "change" callbacks.
     * object.off("change");
     *
     * // Removes the `onChange` callback for all events.
     * object.off(null, onChange);
     *
     * // Removes all callbacks for `context` for all events.
     * object.off(null, null, context);
     *
     * // Removes all callbacks on `object`.
     * object.off();
     *
     * @param {string|object}  [name] - Event name(s) or event map.
     *
     * @param {Function}       [callback] - Event callback function
     *
     * @param {object}         [context] - Event context
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    off(name?: string | object, callback?: Function, context?: object): Eventbus;
    /**
     * Bind a callback function to an object. The callback will be invoked whenever the event is fired. If you have a
     * large number of different events on a page, the convention is to use colons to namespace them: "poll:start", or
     * "change:selection".
     *
     * To supply a context value for this when the callback is invoked, pass the optional last argument:
     * model.on('change', this.render, this) or model.on({change: this.render}, this).
     *
     * @example
     * The event string may also be a space-delimited list of several events...
     * book.on("change:title change:author", ...);
     *
     * @example
     * Callbacks bound to the special "all" event will be triggered when any event occurs, and are passed the name of
     * the event as the first argument. For example, to proxy all events from one object to another:
     * proxy.on("all", function(eventName) {
     *    object.trigger(eventName);
     * });
     *
     * @example
     * All Backbone event methods also support an event map syntax, as an alternative to positional arguments:
     * book.on({
     *    "change:author": authorPane.update,
     *    "change:title change:subtitle": titleView.update,
     *    "destroy": bookView.remove
     * });
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            [context] - Event context
     *
     * @param {OnOptions}         [options] - Event registration options.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    on(name: string | object, callback: Function | object, context?: object, options?: OnOptions): Eventbus;
    _listeners: {};
    /**
     * Just like `on`, but causes the bound callback to fire only once before being removed. Handy for saying "the next
     * time that X happens, do this". When multiple events are passed in using the space separated syntax, the event
     * will fire once for every event you passed in, not once for a combination of all events
     *
     * @param {string|object}     name - Event name(s) or event map.
     *
     * @param {Function|object}   callback - Event callback function or context for event map.
     *
     * @param {object}            [context] - Event context.
     *
     * @param {OnOptions}         [options] - Event registration options.
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    once(name: string | object, callback: Function | object, context?: object, options?: OnOptions): Eventbus;
    /**
     * Tell an object to stop listening to events. Either call stopListening with no arguments to have the object remove
     * all of its registered callbacks ... or be more precise by telling it to remove just the events it's listening to
     * on a specific object, or a specific event, or just a specific callback.
     *
     * @example
     * view.stopListening();
     *
     * view.stopListening(model);
     *
     * @param {object}   obj - Event context
     *
     * @param {string}   [name] - Event name(s)
     *
     * @param {Function} [callback] - Event callback function
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    stopListening(obj: object, name?: string, callback?: Function): Eventbus;
    /**
     * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be
     * passed along to the event callbacks.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    trigger(name: string, ...args: any[]): Eventbus;
    /**
     * Provides `trigger` functionality, but collects any returned Promises from invoked targets and returns a
     * single Promise generated by `Promise.resolve` for a single value or `Promise.all` for multiple results. This is
     * a very useful mechanism to invoke asynchronous operations over an eventbus.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {Promise<void|*|*[]>} A Promise with any results.
     */
    triggerAsync(name: string, ...args: any[]): Promise<void | any | any[]>;
    /**
     * Defers invoking `trigger`. This is useful for triggering events in the next clock tick.
     *
     * @param {string}   name - Event name(s)
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {Eventbus} This Eventbus instance.
     */
    triggerDefer(name: string, ...args: any[]): Eventbus;
    /**
     * Provides `trigger` functionality, but collects any returned result or results from invoked targets as a single
     * value or in an array and passes it back to the callee in a synchronous manner.
     *
     * @param {string}   name - Event name(s).
     *
     * @param {...*}     args - Additional arguments passed to the event function(s).
     *
     * @returns {void|*|*[]} The results of the event invocation.
     */
    triggerSync(name: string, ...args: any[]): void | any | any[];
    #private;
}

/**
 * Provides a main eventbus instance.
 *
 * @type {Eventbus}
 */
declare const eventbus: Eventbus;
/**
 * Provides an eventbus instance potentially for use with a plugin system.
 *
 * @type {Eventbus}
 */
declare const pluginEventbus: Eventbus;
/**
 * Provides an eventbus instance potentially for use for testing.
 *
 * @type {Eventbus}
 */
declare const testEventbus: Eventbus;

/**
 * Defines a class holding the data associated with a plugin including its instance.
 */
declare class PluginEntry {
    /**
     * Instantiates a PluginEntry.
     *
     * @param {string}      name - The plugin name.
     *
     * @param {PluginData}  data - Describes the plugin, manager, and optional module data.
     *
     * @param {object}      instance - The loaded plugin instance.
     *
     * @param {EventbusProxy}  eventbusProxy - The EventbusProxy associated with the plugin wrapping the plugin manager
     *                                         eventbus.
     */
    constructor(name: string, data: PluginData, instance: object, eventbusProxy?: any);
    /**
     * Get plugin data.
     *
     * @returns {PluginData} The associated PluginData.
     */
    get data(): PluginData;
    /**
     * Set enabled.
     *
     * @param {boolean} enabled - New enabled state.
     */
    set enabled(arg: boolean);
    /**
     * Get enabled.
     *
     * @returns {boolean} Current enabled state.
     */
    get enabled(): boolean;
    /**
     * Set any associated import.meta data.
     *
     * @param {object} importmeta - import.meta data.
     */
    set importmeta(arg: any);
    /**
     * Get any stored import.meta object.
     *
     * @returns {undefined|object} Any set import.meta info.
     */
    get importmeta(): any;
    /**
     * Reset will cleanup most resources for remove / reload. 'remove' should manually destroy #eventbusProxy.
     */
    reset(): void;
    /**
     * Set associated EventbusProxy.
     *
     * @param {EventbusProxy} eventbusProxy - EventbusProxy instance to associate.
     */
    set eventbusProxy(arg: any);
    /**
     * Get associated EventbusProxy.
     *
     * @returns {EventbusProxy} Associated EventbusProxy.
     */
    get eventbusProxy(): any;
    /**
     * Set plugin instance.
     *
     * @param {object} instance - The plugin instance.
     */
    set instance(arg: any);
    /**
     * Get plugin instance.
     *
     * @returns {object} The plugin instance.
     */
    get instance(): any;
    /**
     * Get plugin name.
     *
     * @returns {string} Plugin name.
     */
    get name(): string;
    #private;
}

/**
 * Provides a lightweight plugin manager for Node / NPM & the browser with eventbus integration for plugins in a safe
 * and protected manner across NPM modules, local files, and preloaded object instances. This pattern facilitates
 * message passing between modules versus direct dependencies / method invocation.
 *
 * A default eventbus will be created, but you may also pass in an eventbus from `@typhonjs-plugin/eventbus` and the
 * plugin manager will register by default under these event categories:
 *
 * `plugins:async:add` - {@link PluginManager#add}
 *
 * `plugins:async:add:all` - {@link PluginManager#addAll}
 *
 * `plugins:async:destroy:manager` - {@link PluginManager#destroy}
 *
 * `plugins:async:remove` - {@link PluginManager#remove}
 *
 * `plugins:async:remove:all` - {@link PluginManager#removeAll}
 *
 * `plugins:get:enabled` - {@link PluginManager#getEnabled}
 *
 * `plugins:get:options` - {@link PluginManager#getOptions}
 *
 * `plugins:get:plugin:by:event` - {@link PluginManager#getPluginByEvent}
 *
 * `plugins:get:plugin:data` - {@link PluginManager#getPluginData}
 *
 * `plugins:get:plugin:events` - {@link PluginManager#getPluginEvents}
 *
 * `plugins:get:plugin:names` - {@link PluginManager#getPluginNames}
 *
 * `plugins:has:plugin` - {@link PluginManager#hasPlugins}
 *
 * `plugins:is:valid:config` - {@link PluginManager#isValidConfig}
 *
 * `plugins:set:enabled` - {@link PluginManager#setEnabled}
 *
 * `plugins:set:options` - {@link PluginManager#setOptions}
 *
 * Automatically when a plugin is loaded and unloaded respective functions `onPluginLoad` and `onPluginUnload` will
 * be attempted to be invoked on the plugin. This is an opportunity for the plugin to receive any associated eventbus
 * and wire itself into it. It should be noted that a protected proxy around the eventbus is passed to the plugins
 * such that when the plugin is removed automatically all events registered on the eventbus are cleaned up without
 * a plugin author needing to do this manually in the `onPluginUnload` callback. This solves any dangling event binding
 * issues.
 *
 * By supporting ES Modules / CommonJS in Node and ES Modules in the browser the plugin manager is by nature
 * asynchronous for the core methods of adding / removing plugins and destroying the manager. The lifecycle methods
 * `onPluginLoad` and `onPluginUnload` will be awaited on such that if a plugin returns a Promise or is an async method
 * then it will complete before execution continues.
 *
 * It is recommended to interact with the plugin manager eventbus through an eventbus proxy. The
 * `createEventbusProxy` method will return a proxy to the default or currently set eventbus.
 *
 * It should be noted that this module reexports `@typhonjs-plugin/eventbus` which are available as named exports on
 * this module:
 * import {
 *   Eventbus,
 *   EventbusProxy,
 *   EventbusSecure,
 *   eventbus,
 *   pluginEventbus,
 *   testEventbus
 * } from '@typhonjs-plugin/manager';
 *
 * This reexport is for convenience as it provides one single distribution for Node & browser usage.
 *
 * If external eventbus functionality is enabled by passing in an eventbus in the constructor of PluginManager it is
 * important especially if using an existing process / global level eventbus instance from either this module or
 * `@typhonjs-plugin/eventbus` to call {@link PluginManager#destroy} to clean up all plugin eventbus resources and the
 * plugin manager event bindings; this is primarily a testing concern when running repeated tests over a reused
 * eventbus.
 *
 * For more information on Eventbus functionality please see:
 *
 * @see https://www.npmjs.com/package/@typhonjs-plugin/eventbus
 *
 * The PluginManager instance can be extended through runtime composition by passing in _classes_ that implement
 * {@link PluginSupportImpl}. One such implementation is available {@link PluginInvokeSupport} which enables directly
 * invoking methods of all or specific plugins. Please see the documentation for PluginInvokeSupport for more details.
 *
 * Several abbreviated examples follow. Please see the wiki for more details:
 * TODO: add wiki link
 *
 * @example
 * import PluginManager from '@typhonjs-plugin/manager';
 *
 * const pluginManager = new PluginManager();
 *
 * await pluginManager.add({ name: 'an-npm-plugin-enabled-module' });
 * await pluginManager.add({ name: 'my-local-module', target: './myModule.js' });
 *
 * const eventbus = pluginManager.createEventbusProxy();
 *
 * // Let's say an-npm-plugin-enabled-module responds to 'cool:event' which returns 'true'.
 * // Let's say my-local-module responds to 'hot:event' which returns 'false'.
 * // Both of the plugin / modules will have 'onPluginLoaded' invoked with a proxy to the eventbus and any plugin
 * // options defined.
 *
 * // One can then use the eventbus functionality to invoke associated module / plugin methods even retrieving results.
 * assert(eventbus.triggerSync('cool:event') === true);
 * assert(eventbus.triggerSync('hot:event') === false);
 *
 */
declare class PluginManager {
    /**
     * Instantiates PluginManager
     *
     * @param {object}   [options] - Provides various configuration options:
     *
     * @param {Eventbus} [options.eventbus] - An instance of '@typhonjs-plugin/eventbus' used as the plugin
     *                                        eventbus. If not provided a default eventbus is created.
     *
     * @param {string}   [options.eventPrepend='plugin'] - A customized name to prepend PluginManager events on the
     *                                                     eventbus.
     *
     * @param {PluginManagerOptions}  [options.manager] - The plugin manager options.
     *
     * @param {PluginSupportImpl|Iterable<PluginSupportImpl>} [options.PluginSupport] - Optional classes to
     *                                        pass in which extends the plugin manager. A default implementation is
     *                                        available: {@link PluginInvokeSupport}
     */
    constructor(options?: {
        eventbus?: Eventbus;
        eventPrepend?: string;
        manager?: PluginManagerOptions;
        PluginSupport?: any | Iterable<any>;
    });
    /**
     * Adds a plugin by the given configuration parameters. A plugin `name` is always required. If no other options
     * are provided then the `name` doubles as the NPM module / local file to load. The loading first checks for an
     * existing `instance` to use as the plugin. Then the `target` is chosen as the NPM module / local file to load.
     * By passing in `options` this will be stored and accessible to the plugin during all callbacks.
     *
     * @param {PluginConfig}   pluginConfig - Defines the plugin to load.
     *
     * @param {object}         [moduleData] - Optional object hash to associate with plugin.
     *
     * @returns {Promise<PluginData>} The PluginData that represents the plugin added.
     */
    add(pluginConfig: PluginConfig, moduleData?: object): Promise<PluginData>;
    /**
     * Initializes multiple plugins in a single call.
     *
     * @param {Iterable<PluginConfig>}   pluginConfigs - An iterable list of plugin config object hash entries.
     *
     * @param {object}                   [moduleData] - Optional object hash to associate with all plugins.
     *
     * @returns {Promise<PluginData[]>} An array of PluginData objects of all added plugins.
     */
    addAll(pluginConfigs: Iterable<PluginConfig>, moduleData?: object): Promise<PluginData[]>;
    /**
     * Provides the eventbus callback which may prevent addition if optional `noEventAdd` is enabled. This disables
     * the ability for plugins to be added via events preventing any external code adding plugins in this manner.
     *
     * @param {PluginConfig}   pluginConfig - Defines the plugin to load.
     *
     * @param {object}         [moduleData] - Optional object hash to associate with all plugins.
     *
     * @returns {Promise<PluginData>} The PluginData that represents the plugin added.
     * @private
     */
    private _addEventbus;
    /**
     * Provides the eventbus callback which may prevent addition if optional `noEventAdd` is enabled. This disables
     * the ability for plugins to be added via events preventing any external code adding plugins in this manner.
     *
     * @param {Iterable<PluginConfig>}  pluginConfigs - An iterable list of plugin config object hash entries.
     *
     * @param {object}                  [moduleData] - Optional object hash to associate with all plugins.
     *
     * @returns {Promise<PluginData[]>} An array of PluginData objects of all added plugins.
     * @private
     */
    private _addAllEventbus;
    /**
     * If an eventbus is assigned to this plugin manager then a new EventbusProxy wrapping this eventbus is returned.
     * It is added to `this.#eventbusProxies` so †hat the instances are destroyed when the plugin manager is destroyed.
     *
     * @returns {EventbusProxy} A proxy for the currently set Eventbus.
     */
    createEventbusProxy(): EventbusProxy;
    /**
     * If an eventbus is assigned to this plugin manager then a new EventbusSecure wrapping this eventbus is returned.
     * It is added to `this.#eventbusSecure` so †hat the instances are destroyed when the plugin manager is destroyed.
     *
     * @param {string}   [name] - Optional name for the EventbusSecure instance.
     *
     * @returns {EventbusSecure} A secure wrapper for the currently set Eventbus.
     */
    createEventbusSecure(name?: string): EventbusSecure;
    /**
     * Destroys all managed plugins after unloading them.
     *
     * @returns {Promise<DataOutPluginRemoved[]>} A list of plugin names and removal success state.
     */
    destroy(): Promise<DataOutPluginRemoved[]>;
    /**
     * Provides the eventbus callback which may prevent plugin manager destruction if optional `noEventDestroy` is
     * enabled. This disables the ability for the plugin manager to be destroyed via events preventing any external
     * code removing plugins in this manner.
     *
     * @private
     * @returns {Promise<DataOutPluginRemoved[]>} A list of plugin names and removal success state.
     */
    private _destroyEventbus;
    /**
     * Returns whether this plugin manager has been destroyed.
     *
     * @returns {boolean} Returns whether this plugin manager has been destroyed.
     */
    get isDestroyed(): boolean;
    /**
     * Returns the enabled state of a plugin, a list of plugins, or all plugins.
     *
     * @param {object}                  [opts] - Options object. If undefined all plugin enabled state is returned.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to get state.
     *
     * @returns {boolean|DataOutPluginEnabled[]} Enabled state for single plugin or array of results for multiple
     *                                                plugins.
     */
    getEnabled({ plugins }?: {
        plugins?: string | Iterable<string>;
    }): boolean | DataOutPluginEnabled[];
    /**
     * Returns any associated eventbus.
     *
     * @returns {Eventbus} The associated eventbus.
     */
    getEventbus(): Eventbus;
    /**
     * Returns a copy of the plugin manager options.
     *
     * @returns {PluginManagerOptions} A copy of the plugin manager options.
     */
    getOptions(): PluginManagerOptions;
    /**
     * Returns the event binding names registered on any associated plugin EventbusProxy.
     *
     * @param {object}          opts - Options object.
     *
     * @param {string|RegExp}   opts.event - Event name or RegExp to match event names.
     *
     * @returns {string[]|DataOutPluginEvents[]} Event binding names registered from the plugin.
     */
    getPluginByEvent({ event }: {
        event: string | RegExp;
    }): string[] | DataOutPluginEvents[];
    /**
     * Gets the plugin data for a plugin, list of plugins, or all plugins.
     *
     * @param {object}                  [opts] - Options object. If undefined all plugin data is returned.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to get plugin data.
     *
     * @returns {PluginData|PluginData[]|undefined} The plugin data for a plugin or list of plugins.
     */
    getPluginData({ plugins }?: {
        plugins?: string | Iterable<string>;
    }): PluginData | PluginData[] | undefined;
    /**
     * Gets a PluginEntry instance for the given plugin name. This method is primarily for {@link PluginSupportImpl}
     * classes.
     *
     * @param {string} plugin - The plugin name to get.
     *
     * @returns {void|PluginEntry} The PluginEntry for the given plugin name.
     */
    getPluginEntry(plugin: string): void | PluginEntry;
    /**
     * Returns the event binding names registered on any associated plugin EventbusProxy.
     *
     * @param {object}                  [opts] - Options object. If undefined all plugin data is returned.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to get plugin data.
     *
     * @returns {string[]|DataOutPluginEvents[]} Event binding names registered from the plugin.
     */
    getPluginEvents({ plugins }?: {
        plugins?: string | Iterable<string>;
    }): string[] | DataOutPluginEvents[];
    /**
     * Returns an iterable of plugin map keys (plugin names). This method is primarily for {@link PluginSupportImpl}
     * classes.
     *
     * @returns {Iterable<string>} An iterable of plugin map keys.
     */
    getPluginMapKeys(): Iterable<string>;
    /**
     * Returns an iterable of plugin map keys (plugin names). This method is primarily for {@link PluginSupportImpl}
     * classes.
     *
     * @returns {Iterable<PluginEntry>} An iterable of plugin map keys.
     */
    getPluginMapValues(): Iterable<PluginEntry>;
    /**
     * Returns all plugin names or if enabled is set then return plugins matching the enabled state.
     *
     * @param {object}  [opts] - Options object. If undefined all plugin names are returned regardless of enabled state.
     *
     * @param {boolean} [opts.enabled] - If enabled is a boolean it will return plugins given their enabled state.
     *
     * @returns {string[]} A list of plugin names optionally by enabled state.
     */
    getPluginNames({ enabled }?: {
        enabled?: boolean;
    }): string[];
    /**
     * Returns true if there is a plugin loaded with the given plugin name(s). If no options are provided then
     * the result will be if any plugins are loaded.
     *
     * @param {object}                  [opts] - Options object. If undefined returns whether there are any plugins.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to check existence.
     *
     * @returns {boolean} True if given plugin(s) exist.
     */
    hasPlugins({ plugins }?: {
        plugins?: string | Iterable<string>;
    }): boolean;
    /**
     * Performs validation of a PluginConfig.
     *
     * @param {PluginConfig}   pluginConfig - A PluginConfig to validate.
     *
     * @returns {boolean} True if the given PluginConfig is valid.
     */
    isValidConfig(pluginConfig: PluginConfig): boolean;
    /**
     * Unloads / reloads the plugin invoking `onPluginUnload` / then `onPluginReload`
     *
     * @param {object}   opts - Options object.
     *
     * @param {string}   opts.plugin - Plugin name to reload.
     *
     * @param {object}   [opts.instance] - Optional instance to replace.
     *
     * @param {boolean}  [opts.silent] - Does not trigger any reload notification on the eventbus.
     *
     * @returns {Promise<boolean>} Result of reload attempt.
     */
    reload({ plugin, instance, silent }: {
        plugin: string;
        instance?: object;
        silent?: boolean;
    }): Promise<boolean>;
    /**
     * Removes a plugin by name or all names in an iterable list unloading them and clearing any event bindings
     * automatically.
     *
     * @param {object}                  opts - Options object.
     *
     * @param {string|Iterable<string>} opts.plugins - Plugin name or iterable list of names to remove.
     *
     * @returns {Promise<DataOutPluginRemoved[]>} A list of plugin names and removal success state.
     */
    remove({ plugins }: {
        plugins: string | Iterable<string>;
    }): Promise<DataOutPluginRemoved[]>;
    /**
     * Removes all plugins after unloading them and clearing any event bindings automatically.
     *
     * @returns {Promise.<DataOutPluginRemoved[]>} A list of plugin names and removal success state.
     */
    removeAll(): Promise<DataOutPluginRemoved[]>;
    /**
     * Provides the eventbus callback which may prevent removal if optional `noEventRemoval` is enabled. This disables
     * the ability for plugins to be removed via events preventing any external code removing plugins in this manner.
     *
     * @param {object}                  opts - Options object
     *
     * @param {string|Iterable<string>} opts.plugins - Plugin name or iterable list of names to remove.
     *
     * @returns {Promise<DataOutPluginRemoved>} A list of plugin names and removal success state.
     * @private
     */
    private _removeEventbus;
    /**
     * Provides the eventbus callback which may prevent removal if optional `noEventRemoval` is enabled. This disables
     * the ability for plugins to be removed via events preventing any external code removing plugins in this manner.
     *
     * @returns {Promise.<DataOutPluginRemoved[]>} A list of plugin names and removal success state.
     * @private
     */
    private _removeAllEventbus;
    /**
     * Sets the enabled state of a plugin, a list of plugins, or all plugins.
     *
     * @param {object}            opts - Options object.
     *
     * @param {boolean}           opts.enabled - The enabled state.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to set state.
     */
    setEnabled({ enabled, plugins }: {
        enabled: boolean;
        plugins?: string | Iterable<string>;
    }): void;
    /**
     * Provides the eventbus callback which may prevent setEnabled if optional `noEventSetEnabled` is true. This
     * disables the ability for setting plugin enabled state via events preventing any external code from setting state.
     *
     * @param {object}   opts - Options object.
     *
     * @private
     */
    private _setEnabledEventbus;
    /**
     * Sets the eventbus associated with this plugin manager. If any previous eventbus was associated all plugin manager
     * events will be removed then added to the new eventbus. If there are any existing plugins being managed their
     * events will be removed from the old eventbus and then `onPluginLoad` will be called with the new eventbus.
     *
     * @param {object}     opts - An options object.
     *
     * @param {Eventbus}   opts.eventbus - The new eventbus to associate.
     *
     * @param {string}     [opts.eventPrepend='plugins'] - An optional string to prepend to all of the event
     *                                                     binding targets.
     */
    setEventbus({ eventbus, eventPrepend }: {
        eventbus: Eventbus;
        eventPrepend?: string;
    }): Promise<void>;
    /**
     * Stores the prepend string for eventbus registration.
     *
     * @type {string}
     * @private
     */
    private _eventPrepend;
    /**
     * Set optional parameters.
     *
     * @param {PluginManagerOptions} options - Defines optional parameters to set.
     */
    setOptions(options: PluginManagerOptions): void;
    /**
     * Provides the eventbus callback which may prevent plugin manager options being set if optional `noEventSetOptions`
     * is enabled. This disables the ability for the plugin manager options to be set via events preventing any external
     * code modifying options.
     *
     * @param {PluginManagerOptions} options - Defines optional parameters to set.
     *
     * @private
     */
    private _setOptionsEventbus;
    #private;
}

/**
 * PluginInvokeSupport adds direct method invocation support to PluginManager via the eventbus and alternately through
 * a wrapped instance of PluginManager depending on the use case.
 *
 * There are two types of invocation methods the first spreads an array of arguments to the invoked method. The second
 * constructs a {@link PluginInvokeEvent} to pass to the method with a single parameter.
 *
 * TODO: more info and wiki link
 *
 * When added to a PluginManager through constructor initialization the following events are registered on the plugin
 * manager eventbus:
 *
 * `plugins:async:invoke` - {@link PluginInvokeSupport#invokeAsync}
 *
 * `plugins:async:invoke:event` - {@link PluginInvokeSupport#invokeAsyncEvent}
 *
 * `plugins:get:method:names` - {@link PluginInvokeSupport#getMethodNames}
 *
 * `plugins:has:method` - {@link PluginInvokeSupport#hasMethod}
 *
 * `plugins:invoke` - {@link PluginInvokeSupport#invoke}
 *
 * `plugins:sync:invoke` - {@link PluginInvokeSupport#invokeSync}
 *
 * `plugins:sync:invoke:event` - {@link PluginInvokeSupport#invokeSyncEvent}
 *
 * @example
 * // One can also indirectly invoke any method of the plugin.
 * // Any plugin with a method named `aCoolMethod` is invoked.
 * eventbus.triggerSync('plugins:invoke:sync:event', { method: 'aCoolMethod' });
 *
 * // A specific invocation just for the 'an-npm-plugin-enabled-module'
 * eventbus.triggerSync('plugins:invoke:sync:event', {
 *    method: 'aCoolMethod',
 *    plugins: 'an-npm-plugin-enabled-module'
 * });
 *
 * // There are two other properties `copyProps` and `passthruProps` which can be set with object data to _copy_ or
 * // _pass through_ to the invoked method.
 *
 * @implements {PluginSupportImpl}
 */
declare class PluginInvokeSupport implements PluginSupportImpl {
    /**
     * Create PluginInvokeSupport
     *
     * @param {PluginManager} pluginManager - The plugin manager to associate.
     */
    constructor(pluginManager: any);
    /**
     * Returns whether the associated plugin manager has been destroyed.
     *
     * @returns {boolean} Returns whether the plugin manager has been destroyed.
     */
    get isDestroyed(): boolean;
    /**
     * Returns the associated plugin manager options.
     *
     * @returns {PluginManagerOptions} The associated plugin manager options.
     */
    get options(): PluginManagerOptions;
    /**
     * Gets the associated plugin manager.
     *
     * @returns {PluginManager} The associated plugin manager
     */
    get pluginManager(): any;
    /**
     * Destroys all managed plugins after unloading them.
     *
     * @param {object}     opts - An options object.
     *
     * @param {Eventbus}   opts.eventbus - The eventbus to disassociate.
     *
     * @param {string}     opts.eventPrepend - The current event prepend.
     */
    destroy({ eventbus, eventPrepend }: {
        eventbus: any;
        eventPrepend: string;
    }): Promise<void>;
    /**
     * Returns method names for a specific plugin, list of plugins, or all plugins. The enabled state can be specified
     * along with sorting methods by plugin name.
     *
     * @param {object}                  [opts] - Options object. If undefined all plugin data is returned.
     *
     * @param {boolean}                 [opts.enabled] - If enabled is a boolean it will return plugin methods names
     *                                                   given the respective enabled state.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names.
     *
     * @returns {string[]} A list of method names
     */
    getMethodNames({ enabled, plugins }?: {
        enabled?: boolean;
        plugins?: string | Iterable<string>;
    }): string[];
    /**
     * Checks if the provided method name exists across all plugins or specific plugins if defined.
     *
     * @param {object}                  opts - Options object.
     *
     * @param {string}                  opts.method - Method name to test.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Plugin name or iterable list of names to check for method. If
     *                                                   undefined all plugins must contain the method.
     *
     * @returns {boolean} - True method is found.
     */
    hasMethod({ method, plugins }: {
        method: string;
        plugins?: string | Iterable<string>;
    }): boolean;
    /**
     * This dispatch method simply invokes any plugin targets for the given method name.
     *
     * @param {object}   opts - Options object.
     *
     * @param {string}   opts.method - Method name to invoke.
     *
     * @param {*[]}      [opts.args] - Method arguments. This array will be spread as multiple arguments.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Specific plugin name or iterable list of plugin names to invoke.
     */
    invoke({ method, args, plugins }: {
        method: string;
        args?: any[];
        plugins?: string | Iterable<string>;
    }): void;
    /**
     * This dispatch method is asynchronous and adds any returned results to an array which is resolved via Promise.all
     * Any target invoked may return a Promise or any result.
     *
     * @param {object}   opts - Options object.
     *
     * @param {string}   opts.method - Method name to invoke.
     *
     * @param {*[]}      [opts.args] - Method arguments. This array will be spread as multiple arguments.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Specific plugin name or iterable list of plugin names to invoke.
     *
     * @returns {Promise<*|*[]>} A single result or array of results.
     */
    invokeAsync({ method, args, plugins }: {
        method: string;
        args?: any[];
        plugins?: string | Iterable<string>;
    }): Promise<any | any[]>;
    /**
     * This dispatch method synchronously passes to and returns from any invoked targets a PluginEvent.
     *
     * @param {object}   opts - Options object.
     *
     * @param {string}   opts.method - Method name to invoke.
     *
     * @param {object}   [opts.copyProps] - Properties that are copied.
     *
     * @param {object}   [opts.passthruProps] - Properties that are passed through.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Specific plugin name or iterable list of plugin names to invoke.
     *
     * @returns {Promise<PluginEventData>} The PluginEvent data.
     */
    invokeAsyncEvent({ method, copyProps, passthruProps, plugins }: {
        method: string;
        copyProps?: object;
        passthruProps?: object;
        plugins?: string | Iterable<string>;
    }): Promise<PluginEventData>;
    /**
     * This dispatch method synchronously passes back a single value or an array with all results returned by any
     * invoked targets.
     *
     * @param {object}   opts - Options object.
     *
     * @param {string}   opts.method - Method name to invoke.
     *
     * @param {*[]}      [opts.args] - Method arguments. This array will be spread as multiple arguments.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Specific plugin name or iterable list of plugin names to invoke.
     *
     * @returns {*|*[]} A single result or array of results.
     */
    invokeSync({ method, args, plugins }: {
        method: string;
        args?: any[];
        plugins?: string | Iterable<string>;
    }): any | any[];
    /**
     * This dispatch method synchronously passes to and returns from any invoked targets a PluginEvent.
     *
     * @param {object}            opts - Options object.
     *
     * @param {string}            opts.method - Method name to invoke.
     *
     * @param {object}            [opts.copyProps] - Properties that are copied.
     *
     * @param {object}            [opts.passthruProps] - Properties that are passed through.
     *
     * @param {string|Iterable<string>} [opts.plugins] - Specific plugin name or iterable list of plugin names to invoke.
     *
     * @returns {PluginEventData} The PluginEvent data.
     */
    invokeSyncEvent({ method, copyProps, passthruProps, plugins }: {
        method: string;
        copyProps?: object;
        passthruProps?: object;
        plugins?: string | Iterable<string>;
    }): PluginEventData;
    /**
     * Sets the eventbus associated with this plugin manager. If any previous eventbus was associated all plugin manager
     * events will be removed then added to the new eventbus. If there are any existing plugins being managed their
     * events will be removed from the old eventbus and then `onPluginLoad` will be called with the new eventbus.
     *
     * @param {object}     opts - An options object.
     *
     * @param {Eventbus}   opts.oldEventbus - The old eventbus to disassociate.
     *
     * @param {Eventbus}   opts.newEventbus - The new eventbus to associate.
     *
     * @param {string}     opts.oldPrepend - The old event prepend.
     *
     * @param {string}     opts.newPrepend - The new event prepend.
     */
    setEventbus({ oldEventbus, newEventbus, oldPrepend, newPrepend }: {
        oldEventbus: any;
        newEventbus: any;
        oldPrepend: string;
        newPrepend: string;
    }): void;
    /**
     * Set optional parameters.
     *
     * @param {PluginManagerOptions} options Defines optional parameters to set.
     */
    setOptions(options: PluginManagerOptions): void;
    #private;
}

/**
 * Creates an escaped path which is suitable for use in RegExp construction.
 *
 * Note: This function will throw if a malformed URL string is the target. In AbstractPluginManager this function
 * is used after the module has been loaded / is a good target.
 *
 * @param {string|URL}  target - Target full / relative path or URL to escape.
 *
 * @returns {string} The escaped target.
 */
declare function escapeTarget(target: string | URL): string;

/**
 * Performs validation of a PluginConfig.
 *
 * @param {PluginConfig}   pluginConfig A PluginConfig to validate.
 *
 * @returns {boolean} True if the given PluginConfig is valid.
 */
declare function isValidConfig(pluginConfig: PluginConfig): boolean;

export { Eventbus, EventbusProxy, EventbusSecure, PluginInvokeSupport, PluginManager, PluginSupportImpl, escapeTarget, eventbus, isValidConfig, pluginEventbus, testEventbus };
