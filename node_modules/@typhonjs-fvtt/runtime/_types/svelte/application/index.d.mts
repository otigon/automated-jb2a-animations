import * as svelte_store from 'svelte/store';
import * as svelte from 'svelte';

/**
 * Contains the reactive functionality / Svelte stores associated with SvelteApplication.
 */
declare class SvelteReactive {
    /**
     * @param {SvelteApplication} application - The host Foundry application.
     */
    constructor(application: any);
    /**
     * Initializes reactive support. Package private for internal use.
     *
     * @returns {SvelteStores} Internal methods to interact with Svelte stores.
     * @package
     */
    initialize(): any;
    /**
     * Sets `this.options.draggable` which is reactive for application shells.
     *
     * @param {boolean}  draggable - Sets the draggable option.
     */
    set draggable(arg: boolean);
    /**
     * Returns the draggable app option.
     *
     * @returns {boolean} Draggable app option.
     */
    get draggable(): boolean;
    /**
     * Sets `this.options.headerButtonNoClose` which is reactive for application shells.
     *
     * @param {boolean}  headerButtonNoClose - Sets the headerButtonNoClose option.
     */
    set headerButtonNoClose(arg: boolean);
    /**
     * Returns the headerButtonNoClose app option.
     *
     * @returns {boolean} Remove the close the button in header app option.
     */
    get headerButtonNoClose(): boolean;
    /**
     * Sets `this.options.headerButtonNoLabel` which is reactive for application shells.
     *
     * @param {boolean}  headerButtonNoLabel - Sets the headerButtonNoLabel option.
     */
    set headerButtonNoLabel(arg: boolean);
    /**
     * Returns the headerButtonNoLabel app option.
     *
     * @returns {boolean} Remove the labels from buttons in header app option.
     */
    get headerButtonNoLabel(): boolean;
    /**
     * Sets `this.options.minimizable` which is reactive for application shells that are also pop out.
     *
     * @param {boolean}  minimizable - Sets the minimizable option.
     */
    set minimizable(arg: boolean);
    /**
     * Returns the minimizable app option.
     *
     * @returns {boolean} Minimizable app option.
     */
    get minimizable(): boolean;
    /**
     * Sets `this.options.popOut` which is reactive for application shells. This will add / remove this application
     * from `ui.windows`.
     *
     * @param {boolean}  popOut - Sets the popOut option.
     */
    set popOut(arg: boolean);
    /**
     * @inheritDoc
     */
    get popOut(): boolean;
    /**
     * Sets `this.options.resizable` which is reactive for application shells.
     *
     * @param {boolean}  resizable - Sets the resizable option.
     */
    set resizable(arg: boolean);
    /**
     * Returns the resizable option.
     *
     * @returns {boolean} Resizable app option.
     */
    get resizable(): boolean;
    /**
     * Returns the store for app options.
     *
     * @returns {StoreAppOptions} App options store.
     */
    get storeAppOptions(): any;
    /**
     * Returns the store for UI options.
     *
     * @returns {StoreUIOptions} UI options store.
     */
    get storeUIState(): any;
    /**
     * Sets `this.options.title` which is reactive for application shells.
     *
     * @param {string}   title - Application title; will be localized, so a translation key is fine.
     */
    set title(arg: string);
    /**
     * Returns the title accessor from the parent Application class.
     * TODO: Application v2; note that super.title localizes `this.options.title`; IMHO it shouldn't.
     *
     * @returns {string} Title.
     */
    get title(): string;
    /**
     * Sets `this.options.zIndex` which is reactive for application shells.
     *
     * @param {number}   zIndex - Application z-index.
     */
    set zIndex(arg: number);
    /**
     * Returns the zIndex app option.
     *
     * @returns {number} z-index app option.
     */
    get zIndex(): number;
    /**
     * Provides a way to safely get this applications options given an accessor string which describes the
     * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
     * to walk.
     *
     * // TODO DOCUMENT the accessor in more detail.
     *
     * @param {string}   accessor - The path / key to set. You can set multiple levels.
     *
     * @param {*}        [defaultValue] - A default value returned if the accessor is not found.
     *
     * @returns {*} Value at the accessor.
     */
    getOptions(accessor: string, defaultValue?: any): any;
    /**
     * Provides a way to merge `options` into this applications options and update the appOptions store.
     *
     * @param {object}   options - The options object to merge with `this.options`.
     */
    mergeOptions(options: object): void;
    /**
     * Provides a way to safely set this applications options given an accessor string which describes the
     * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
     * to walk.
     *
     * Additionally if an application shell Svelte component is mounted and exports the `appOptions` property then
     * the application options is set to `appOptions` potentially updating the application shell / Svelte component.
     *
     * // TODO DOCUMENT the accessor in more detail.
     *
     * @param {string}   accessor - The path / key to set. You can set multiple levels.
     *
     * @param {*}        value - Value to set.
     */
    setOptions(accessor: string, value: any): void;
    /**
     * Updates the UI Options store with the current header buttons. You may dynamically add / remove header buttons
     * if using an application shell Svelte component. In either overriding `_getHeaderButtons` or responding to the
     * Hooks fired return a new button array and the uiOptions store is updated and the application shell will render
     * the new buttons.
     *
     * Optionally you can set in the Foundry app options `headerButtonNoClose` to remove the close button and
     * `headerButtonNoLabel` to true and labels will be removed from the header buttons.
     *
     * @param {object} opts - Optional parameters (for internal use)
     *
     * @param {boolean} opts.headerButtonNoClose - The value for `headerButtonNoClose`.
     *
     * @param {boolean} opts.headerButtonNoLabel - The value for `headerButtonNoLabel`.
     */
    updateHeaderButtons({ headerButtonNoClose, headerButtonNoLabel }?: {
        headerButtonNoClose: boolean;
        headerButtonNoLabel: boolean;
    }): void;
    #private;
}

/**
 * Provides a helper class for {@link SvelteApplication} by combining all methods that work on the {@link SvelteData[]}
 * of mounted components. This class is instantiated and can be retrieved by the getter `svelte` via SvelteApplication.
 */
declare class GetSvelteData {
    /**
     * Keep a direct reference to the SvelteData array in an associated {@link SvelteApplication}.
     *
     * @param {MountedAppShell[]|null[]}  applicationShellHolder - A reference to the MountedAppShell array.
     *
     * @param {SvelteData[]}  svelteData - A reference to the SvelteData array of mounted components.
     */
    constructor(applicationShellHolder: any[] | null[], svelteData: any[]);
    /**
     * Returns any mounted {@link MountedAppShell}.
     *
     * @returns {MountedAppShell|null} Any mounted application shell.
     */
    get applicationShell(): any;
    /**
     * Returns the indexed Svelte component.
     *
     * @param {number}   index -
     *
     * @returns {object} The loaded Svelte component.
     */
    component(index: number): object;
    /**
     * Returns the Svelte component entries iterator.
     *
     * @returns {Generator<Array<number|SvelteComponent>>} Svelte component entries iterator.
     * @yields
     */
    componentEntries(): Generator<Array<number | any>>;
    /**
     * Returns the Svelte component values iterator.
     *
     * @returns {Generator<SvelteComponent>} Svelte component values iterator.
     * @yields
     */
    componentValues(): Generator<any>;
    /**
     * Returns the indexed SvelteData entry.
     *
     * @param {number}   index -
     *
     * @returns {SvelteData} The loaded Svelte config + component.
     */
    data(index: number): any;
    /**
     * Returns the {@link SvelteData} instance for a given component.
     *
     * @param {object} component - Svelte component.
     *
     * @returns {SvelteData} -  The loaded Svelte config + component.
     */
    dataByComponent(component: object): any;
    /**
     * Returns the SvelteData entries iterator.
     *
     * @returns {IterableIterator<[number, SvelteData]>} SvelteData entries iterator.
     */
    dataEntries(): IterableIterator<[number, any]>;
    /**
     * Returns the SvelteData values iterator.
     *
     * @returns {IterableIterator<SvelteData>} SvelteData values iterator.
     */
    dataValues(): IterableIterator<any>;
    /**
     * Returns the length of the mounted Svelte component list.
     *
     * @returns {number} Length of mounted Svelte component list.
     */
    get length(): number;
    #private;
}

/**
 * Provides a Svelte aware extension to Application to control the app lifecycle appropriately. You can declaratively
 * load one or more components from `defaultOptions`.
 */
declare class SvelteApplication {
    /**
     * Specifies the default options that SvelteApplication supports.
     *
     * @returns {object} options - Application options.
     * @see https://foundryvtt.com/api/Application.html#options
     */
    static get defaultOptions(): any;
    /**
     * @inheritDoc
     */
    constructor(options: any);
    /**
     * Returns the content element if an application shell is mounted.
     *
     * @returns {HTMLElement} Content element.
     */
    get elementContent(): HTMLElement;
    /**
     * Returns the target element or main element if no target defined.
     *
     * @returns {HTMLElement} Target element.
     */
    get elementTarget(): HTMLElement;
    /**
     * Returns the reactive accessors & Svelte stores for SvelteApplication.
     *
     * @returns {SvelteReactive} The reactive accessors & Svelte stores.
     */
    get reactive(): SvelteReactive;
    /**
     * Returns the Svelte helper class w/ various methods to access mounted Svelte components.
     *
     * @returns {GetSvelteData} GetSvelteData
     */
    get svelte(): GetSvelteData;
    /**
     * In this case of when a template is defined in app options `html` references the inner HTML / template. However,
     * to activate classic v1 tabs for a Svelte component the element target is passed as an array simulating JQuery as
     * the element is retrieved immediately and the core listeners use standard DOM queries.
     *
     * @inheritDoc
     * @protected
     * @ignore
     */
    protected _activateCoreListeners(html: any): void;
    /**
     * Provide an override to set reactive z-index after calling super method.
     */
    bringToTop(): void;
    /**
     * Note: This method is fully overridden and duplicated as Svelte components need to be destroyed manually and the
     * best visual result is to destroy them after the default JQuery slide up animation occurs, but before the element
     * is removed from the DOM.
     *
     * If you destroy the Svelte components before the slide up animation the Svelte elements are removed immediately
     * from the DOM. The purpose of overriding ensures the slide up animation is always completed before
     * the Svelte components are destroyed and then the element is removed from the DOM.
     *
     * Close the application and un-register references to it within UI mappings.
     * This function returns a Promise which resolves once the window closing animation concludes
     *
     * @param {object}   [options] - Optional parameters.
     *
     * @param {boolean}  [options.force] - Force close regardless of render state.
     *
     * @returns {Promise<void>}    A Promise which resolves once the application is closed.
     * @ignore
     */
    close(options?: {
        force?: boolean;
    }): Promise<void>;
    /**
     * @ignore
     */
    _state: any;
    /**
     * @ignore
     */
    _element: any;
    /**
     * @ignore
     */
    _minimized: boolean;
    /**
     * @ignore
     */
    _scrollPositions: any;
    /**
     * Inject the Svelte components defined in `this.options.svelte`. The Svelte component can attach to the existing
     * pop-out of Application or provide no template and render into a document fragment which is then attached to the
     * DOM.
     *
     * @param {JQuery} html -
     *
     * @inheritDoc
     * @ignore
     */
    _injectHTML(html: any): void;
    /**
     * Provides a mechanism to update the UI options store for minimized.
     *
     * Note: the sanity check is duplicated from {@link Application.maximize} and the store is updated _before_
     * the actual parent method is invoked. This allows application shells to remove / show any resize handlers
     * correctly.
     *
     * @inheritDoc
     * @ignore
     */
    maximize(): Promise<any>;
    /**
     * Provides a mechanism to update the UI options store for minimized.
     *
     * Note: the sanity check is duplicated from {@link Application.minimize} and the store is updated _before_
     * the actual parent method is invoked. This allows application shells to remove / show any resize handlers
     * correctly.
     *
     * @inheritDoc
     * @ignore
     */
    minimize(): Promise<any>;
    /**
     * Provides a callback after all Svelte components are initialized.
     *
     * @param {object}      [opts] - Optional parameters.
     *
     * @param {HTMLElement} [opts.element] - HTMLElement container for main application element.
     *
     * @param {HTMLElement} [opts.elementContent] - HTMLElement container for content area of application shells.
     *
     * @param {HTMLElement} [opts.elementTarget] - HTMLElement container for main application target element.
     */
    onSvelteMount({ element, elementContent, elementTarget }?: {
        element?: HTMLElement;
        elementContent?: HTMLElement;
        elementTarget?: HTMLElement;
    }): void;
    /**
     * Override replacing HTML as Svelte components control the rendering process. Only potentially change the outer
     * application frame / title for pop-out applications.
     *
     * @inheritDoc
     * @ignore
     */
    _replaceHTML(element: any, html: any): void;
    /**
     * Provides an override verifying that a new Application being rendered for the first time doesn't have a
     * corresponding DOM element already loaded. This is a check that only occurs when `this._state` is
     * `Application.RENDER_STATES.NONE`. It is useful in particular when SvelteApplication has a static ID
     * explicitly set in `this.options.id` and long intro / outro transitions are assigned. If a new application
     * sharing this static ID attempts to open / render for the first time while an existing DOM element sharing
     * this static ID exists then the initial render is cancelled below rather than crashing later in the render
     * cycle (at setPosition).
     *
     * @inheritDoc
     * @protected
     * @ignore
     */
    protected _render(force?: boolean, options?: {}): Promise<any>;
    /**
     * Render the inner application content. Only render a template if one is defined otherwise provide an empty
     * JQuery element.
     *
     * @param {Object} data         The data used to render the inner template
     *
     * @returns {Promise.<JQuery>}   A promise resolving to the constructed jQuery object
     *
     * @protected
     * @ignore
     */
    protected _renderInner(data: any): Promise<any>;
    /**
     * Stores the initial z-index set in `_renderOuter` which is used in `_injectHTML` to set the target element
     * z-index after the Svelte component is mounted.
     *
     * @returns {Promise<JQuery>} Outer frame / unused.
     * @protected
     * @ignore
     */
    protected _renderOuter(): Promise<any>;
    /**
     * Modified Application `setPosition` which changes a few aspects from the default {@link Application.setPosition}.
     * The gate on `popOut` is removed, so if manually called popOut applications can set `this.options.setPosition` to
     * false to not apply any positional styles.
     *
     * `applyHeight` / `applyWidth` is set to true when el.style.height / width is not 'auto' and height & width is
     * applied.
     *
     * The initial setPosition call on an application will always set width / height as this is necessary for correct
     * calculations.
     *
     * Styles are not applied immediately and the newly constructed `currentPosition` is passed to all validators that
     * may further modify it or veto the change before styles are applied.
     *
     * @param {PositionData}         [pos] - Position data.
     *
     * @param {number|null}          [pos.left] - The left offset position in pixels
     *
     * @param {number|null}          [pos.top] - The top offset position in pixels
     *
     * @param {number|string|null}   [pos.width] - The application width in pixels
     *
     * @param {number|string|null}   [pos.height] - The application height in pixels
     *
     * @param {number|null}          [pos.scale] - The application scale as a numeric factor where 1.0 is default
     *
     * @param {...*}                 [pos.rest] - Any additional data is captured and added to the `currentPosition`
     *                               object used in `setPosition`. This allows sending this data to any validators added.
     *
     * @returns {PositionData} The updated position object for the application containing the new values
     */
    setPosition({ left, top, width, height, scale, ...rest }?: any): any;
    #private;
}
type SvelteData = {
    /**
     * -
     */
    config: object;
    /**
     * -
     */
    component: svelte.SvelteComponent;
    /**
     * -
     */
    element: HTMLElement;
    /**
     * -
     */
    injectHTML: boolean;
};
type SvelteStores = {
    /**
     * - Update function for app options store.
     */
    appOptionsUpdate: any;
    /**
     * - Subscribes to local stores.
     */
    subscribe: Function;
    /**
     * - Update function for UI options store.
     */
    uiOptionsUpdate: any;
    /**
     * - Unsubscribes from local stores.
     */
    unsubscribe: Function;
};

declare class DialogData {
    /**
     * @param {SvelteApplication} application - The host Foundry application.
     */
    constructor(application: any);
    /**
     * Provides a way to safely get this dialogs data given an accessor string which describes the
     * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
     * to walk.
     *
     * // TODO DOCUMENT the accessor in more detail.
     *
     * @param {string}   accessor - The path / key to set. You can set multiple levels.
     *
     * @param {*}        [defaultValue] - A default value returned if the accessor is not found.
     *
     * @returns {*} Value at the accessor.
     */
    get(accessor: string, defaultValue?: any): any;
    /**
     * @param {object} data - Merge provided data object into Dialog data.
     */
    merge(data: object): void;
    /**
     * Provides a way to safely set this dialogs data given an accessor string which describes the
     * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
     * to walk.
     *
     * Automatically the dialog data will be updated in the associated DialogShell Svelte component.
     *
     * // TODO DOCUMENT the accessor in more detail.
     *
     * @param {string}   accessor - The path / key to set. You can set multiple levels.
     *
     * @param {*}        value - Value to set.
     *
     * @returns {boolean} True if successful.
     */
    set(accessor: string, value: any): boolean;
    #private;
}

/**
 * Provides a Foundry API compatible dialog alternative implemented w/ Svelte. There are several features including
 * a glasspane / modal option with various styling and transition capabilities.
 *
 * TODO: document all dialog data parameters; keep track of newly added like button -> styles, title; modal,
 * draggable, transition options, modal transitions
 */
declare class TJSDialog extends SvelteApplication {
    /**
     * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
     * If you require more flexibility, a custom Dialog instance is preferred.
     *
     * @param {TJSConfirmConfig} config - Confirm dialog options.
     *
     * @returns {Promise<*>} A promise which resolves once the user makes a choice or closes the window.
     *
     * @example
     * let d = Dialog.confirm({
     *  title: "A Yes or No Question",
     *  content: "<p>Choose wisely.</p>",
     *  yes: () => console.log("You chose ... wisely"),
     *  no: () => console.log("You chose ... poorly"),
     *  defaultYes: false
     * });
     */
    static confirm({ title, content, yes, no, render, defaultYes, rejectClose, options, buttons, draggable, modal, modalOptions, popOut, resizable, transition, zIndex }?: TJSConfirmConfig): Promise<any>;
    /**
     * A helper factory method to display a basic "prompt" style Dialog with a single button
     *
     * @param {TJSPromptConfig} config - Prompt dialog options.
     *
     * @returns {Promise<*>} The returned value from the provided callback function, if any
     */
    static prompt({ title, content, label, callback, render, rejectClose, options, draggable, icon, modal, modalOptions, popOut, resizable, transition, zIndex }?: TJSPromptConfig): Promise<any>;
    /**
     * @param {object}   data - Dialog data.
     *
     * @param {object}   [options] - SvelteApplication options.
     */
    constructor(data: object, options?: object);
    /**
     * Sets the dialog data; this is reactive.
     *
     * @param {object}   data - Dialog data.
     */
    set data(arg: DialogData);
    /**
     * Returns the dialog data.
     *
     * @returns {DialogData} Dialog data.
     */
    get data(): DialogData;
    /**
     * Implemented only for backwards compatibility w/ default Foundry {@link Dialog} API.
     *
     * @param {JQuery}   html - JQuery element for content area.
     */
    activateListeners(html: any): void;
    #private;
}
/**
 * - Configuration options for the confirm dialog.
 */
type TJSConfirmConfig = {
    /**
     * - The confirmation window title
     */
    title: string;
    /**
     * - The confirmation message
     */
    content: string;
    /**
     * - Callback function upon yes
     */
    yes?: Function;
    /**
     * - Callback function upon no
     */
    no?: Function;
    /**
     * - A function to call when the dialog is rendered
     */
    render?: Function;
    /**
     * - Make "yes" the default choice?
     */
    defaultYes?: boolean;
    /**
     * - Reject the Promise if the Dialog is closed without making a choice.
     */
    rejectClose?: boolean;
    /**
     * - Additional rendering options passed to the Dialog
     */
    options?: object;
    /**
     * - Provides a button override that is merged with default buttons.
     */
    buttons?: object;
    /**
     * - The dialog is draggable when true.
     */
    draggable?: boolean;
    /**
     * - When true a modal dialog is displayed.
     */
    modal?: boolean;
    /**
     * - Additional options for modal dialog display.
     */
    modalOptions?: object;
    /**
     * - When true the dialog is a pop out Application.
     */
    popOut?: boolean;
    /**
     * - When true the dialog is resizable.
     */
    resizable?: boolean;
    /**
     * - Transition options for the dialog.
     */
    transition?: object;
    /**
     * - A specific z-index for the dialog. *
     */
    zIndex?: number | null;
};
/**
 * - Configuration options for the confirm dialog.
 */
type TJSPromptConfig = {
    /**
     * - The confirmation window title
     */
    title: string;
    /**
     * - The confirmation message
     */
    content: string;
    /**
     * - The confirmation button text.
     */
    label?: string;
    /**
     * - A callback function to fire when the button is clicked.
     */
    callback?: Function;
    /**
     * - A function to call when the dialog is rendered.
     */
    render?: Function;
    /**
     * - Reject the Promise if the Dialog is closed without making a choice.
     */
    rejectClose?: boolean;
    /**
     * - Additional rendering options passed to the Dialog
     */
    options?: object;
    /**
     * - The dialog is draggable when true.
     */
    draggable?: boolean;
    /**
     * fas fa-check"></i>"] - Set another icon besides `fa-check` for button.
     */
    icon?: string;
    /**
     * - When true a modal dialog is displayed.
     */
    modal?: boolean;
    /**
     * - Additional options for modal dialog display.
     */
    modalOptions?: object;
    /**
     * - When true the dialog is a pop out Application.
     */
    popOut?: boolean;
    /**
     * - When true the dialog is resizable.
     */
    resizable?: boolean;
    /**
     * - Transition options for the dialog.
     */
    transition?: object;
    /**
     * - A specific z-index for the dialog. *
     */
    zIndex?: number | null;
};

/**
 * - Application shell contract for Svelte components.
 */
type MountedAppShell = {
    /**
     * - The root element / exported prop.
     */
    elementRoot: HTMLElement;
    /**
     * - The content element / exported prop.
     */
    elementContent?: HTMLElement;
    /**
     * - The target element / exported prop.
     */
    elementTarget?: HTMLElement;
};
/**
 * - Provides a custom readable Svelte store for Application options state.
 */
type StoreAppOptions = {
    /**
     * - Subscribe to all app options updates.
     */
    subscribe: any;
    /**
     * - Derived store for `draggable` updates.
     */
    draggable: svelte_store.Readable<boolean>;
    /**
     * - Derived store for `minimizable` updates.
     */
    minimizable: svelte_store.Readable<boolean>;
    /**
     * - Derived store for `popOut` updates.
     */
    popOut: svelte_store.Readable<boolean>;
    /**
     * - Derived store for `resizable` updates.
     */
    resizable: svelte_store.Readable<boolean>;
    /**
     * - Derived store for `title` updates.
     */
    title: svelte_store.Readable<string>;
    /**
     * - Derived store for `zIndex` updates.
     */
    zIndex: svelte_store.Readable<number>;
};
/**
 * - Provides a custom readable Svelte store for UI options state.
 */
type StoreUIOptions = {
    /**
     * - Subscribe to all UI options updates.
     */
    subscribe: any;
    /**
     * - Derived store for
     *   `headerButtons` updates.
     */
    headerButtons: svelte_store.Readable<any[]>;
    /**
     * - Derived store for `minimized` updates.
     */
    minimized: svelte_store.Readable<boolean>;
};

export { MountedAppShell, StoreAppOptions, StoreUIOptions, SvelteApplication, SvelteData, SvelteStores, TJSConfirmConfig, TJSDialog, TJSPromptConfig };
