<script>
    // Copy of the TJSSvgFolder component to add an icon that denotes whether or not advanced recogntion features are being used
    /**
     * TJSFolder provides a collapsible folder using the details and summary HTMLElements.
     *
     * This is a slotted component. The default slot is the collapsible contents. There are also two additional optional
     * named slots available for the summary element. `label` allows setting custom content with the fallback being the
     * `label` string. Additionally, `summary-end` allows a component or text to be slotted after the label. This can be
     * useful for say an "expand all" button.
     *
     * ----------------------------------------------------------------------------------------------------------------
     * Exported props include:
     * `folder`: An object containing id (any), label (string), store (writable boolean)
     *
     * Or in lieu of passing the folder object you can assign these props directly:
     * `id`: Anything used for an ID.
     * `label`: The label name of the folder; string.
     * `store`: The store tracking the open / close state: writable<boolean>
     *
     * The final prop is `styles` which follows the `applyStyles` action; see `applyStyles` or `StylesProperties`
     * component for more information. This is an object that applies inline styles.
     *
     * ----------------------------------------------------------------------------------------------------------------
     * Events: There are several events that are fired and / or bubbled up through parents. There are four
     * custom events that pass a details object including: `the details element, id, label, and store`.
     *
     * The following events are bubbled up such that assigning a listener in any parent component receives them
     * from all children folders:
     * `click` - Basic MouseEvent of folder being clicked.
     * `closeAny` - Triggered when any child folder is closed w/ details object.
     * `openAny` - Triggered when any child folder is opened w/ details object.
     *
     * The following events do not propagate / bubble up and can be registered with:
     * `close` - Triggered when direct descendent folder is closed w/ details object.
     * `open` - Triggered when direct descendent folder is opened w/ details object.
     *
     * ----------------------------------------------------------------------------------------------------------------
     * Styling: To style this component use `details.tjs-folder` as a selector. Each element also contains data
     * attributes for `id` and `label`.
     *
     * There are several local CSS variables that you can use to change the appearance dynamically. Either use
     * CSS props or pass in a `styles` object w/ key / value props to set to the details. Another alternative is using
     * `StyleProperties` component which wraps a section in locally defined CSS variables. Useful for a large group of
     * folders where the goal is changing the appearance of all of them as a group.
     *
     * The following CSS variables are supported, but not defined by default.
     *
     * Details element (attributes follow `--tjs-details-`):
     * --tjs-details-padding-left: 5px; set for children to indent more;
     *
     * Summary element (attributes follow `--tjs-summary-`):
     * --tjs-summary-background-blend-mode: initial
     * --tjs-summary-background: none
     * --tjs-summary-border: none
     * --tjs-summary-cursor: pointer
     * --tjs-summary-font-size: inherit
     * --tjs-summary-font-weight: bold
     * --tjs-summary-font-family: inherit
     * --tjs-summary-padding: 4px
     * --tjs-summary-width: fit-content; wraps content initially, set to 100% or other width measurement
     *
     * Summary SVG / chevron element (attributes follow `--tjs-summary-chevron-`):
     *
     * The width and height use multiple fallback variables before setting a default of 15px. You can provide
     * `--tjs-summary-chevron-size`. If not provided then the chevron dimensions are set by `--tjs-summary-font-size`.
     *
     * --tjs-summary-chevron-color: currentColor
     * --tjs-summary-chevron-opacity: 0.2; Opacity when not hovering.
     * --tjs-summary-chevron-rotate-closed: -90deg; rotation angle when closed.
     * --tjs-summary-chevron-opacity-hover: 1; Opacity when hovering.
     * --tjs-summary-chevron-rotate-open: 0; rotation angle when open.
     *
     * Contents element (attributes follow `--tjs-contents-`):
     * --tjs-contents-background-blend-mode: initial
     * --tjs-contents-background: none
     * --tjs-contents-border: none
     * --tjs-contents-margin: 0 0 0 -5px
     *
     * Padding is set directly by `--tjs-contents-padding` or follows the following calculation:
     * `0 0 0 calc(var(--tjs-summary-font-size, 13px) * 0.8)`
     *
     * If neither `--tjs-contents-padding` or `--tjs-summary-font-size` is defined the default is `13px * 0.8`.
     */
    import { onDestroy }         from 'svelte';
    import { writable }          from 'svelte/store';
    import { applyStyles }       from '@typhonjs-fvtt/runtime/svelte/action';
    import { isWritableStore }   from '@typhonjs-fvtt/runtime/svelte/store';
    import { isObject }          from '@typhonjs-fvtt/runtime/svelte/util';
    import { toggleDetails }     from '@typhonjs-fvtt/svelte-standard/action';
    /** @type {TJSFolderData} */
    export let folder = void 0;
    /** @type {string} */
    export let id = isObject(folder) && typeof folder.id === 'string' ? folder.id : void 0;
    /** @type {string} */
    export let label = isObject(folder) && typeof folder.label === 'string' ? folder.label : '';
    /** @type {TJSFolderOptions} */
    export let options = isObject(folder) && isObject(folder.options) ? folder.options : {};
    /** @type {import('svelte/store').Writable<boolean>} */
    export let store = isObject(folder) && isWritableStore(folder.store) ? folder.store : writable(false);
    /** @type {object} */
    export let styles = isObject(folder) && isObject(folder.styles) ? folder.styles : void 0;
    /** @type {(event?: MouseEvent) => void} */
    export let onClick = isObject(folder) && typeof folder.onClick === 'function' ? folder.onClick : () => null;
    /** @type {(event?: MouseEvent) => void} */
    export let onContextMenu = isObject(folder) && typeof folder.onContextMenu === 'function' ? folder.onContextMenu :
     () => null;
    /** @type {TJSFolderOptions} */
    const localOptions = {
       chevronOnly: false,
       noKeys: false
    }
    let detailsEl, summaryEl, svgEl;
    $: id = isObject(folder) && typeof folder.id === 'string' ? folder.id :
     typeof id === 'string' ? id : void 0;
    $: label = isObject(folder) && typeof folder.label === 'string' ? folder.label :
     typeof label === 'string' ? label : '';
    $: {
       options = isObject(folder) && isObject(folder.options) ? folder.options :
        isObject(options) ? options : {};
       if (typeof options?.chevronOnly === 'boolean') { localOptions.chevronOnly = options.chevronOnly; }
       if (typeof options?.noKeys === 'boolean') { localOptions.noKeys = options.noKeys; }
    }
    $: store = isObject(folder) && isWritableStore(folder.store) ? folder.store :
     isWritableStore(store) ? store : writable(false);
    $: styles = isObject(folder) && isObject(folder.styles) ? folder.styles :
     isObject(styles) ? styles : void 0;
    $: onClick = isObject(folder) && typeof folder.onClick === 'function' ? folder.onClick :
     typeof onClick === 'function' ? onClick : () => null;
    $: onContextMenu = isObject(folder) && typeof folder.onContextMenu === 'function' ? folder.onContextMenu :
     typeof onContextMenu === 'function' ? onContextMenu : () => null;
    // For performance reasons when the folder is closed the main slot is not rendered.
    // When the folder is closed `visible` is set to false with a slight delay to allow the closing animation to
    // complete.
    let visible = $store;
    let timeoutId;
    $: if (!$store)
    {
       timeoutId = setTimeout(() => visible = false, 500);
    }
    else
    {
       clearTimeout(timeoutId);
       visible = true;
    }
    /**
     * Create a CustomEvent with details object containing relevant element and props.
     *
     * @param {string}   type - Event name / type.
     *
     * @param {boolean}  [bubbles=false] - Does the event bubble.
     *
     * @returns {CustomEvent<object>}
     */
    function createEvent(type, bubbles = false)
    {
       return new CustomEvent(type, {
          detail: {element: detailsEl, folder, id, label, store},
          bubbles
       });
    }
    function onClickSummary(event)
    {
       const target = event.target;
       const chevronTarget = target === svgEl || svgEl.contains(target);
       if (target === summaryEl || chevronTarget || target.querySelector('.summary-click') !== null)
       {
          if (localOptions.chevronOnly && !chevronTarget)
          {
             event.preventDefault();
             event.stopPropagation();
             return;
          }
          $store = !$store;
          onClick(event);
          event.preventDefault();
          event.stopPropagation();
       }
       else
       {
          // Handle exclusion cases when no-summary-click class is in target, targets children, or targets parent
          // element.
          if (target.classList.contains('no-summary-click') || target.querySelector('.no-summary-click') !== null ||
           (target.parentElement && target.parentElement.classList.contains('no-summary-click')))
          {
             event.preventDefault();
             event.stopPropagation();
          }
       }
    }
    /**
     * When localOptions `noKeys` is true prevent `space bar` / 'space' from activating folder open / close.
     *
     * @param {KeyboardEvent} event -
     */
    function onKeyUp(event)
    {
       if (localOptions.noKeys && event.key === ' ') { event.preventDefault(); }
    }
    // Manually subscribe to store in order to trigger only on changes; avoids initial dispatch on mount as `detailsEl`
    // is not set yet. Directly dispatch custom events as Svelte 3 does not support bubbling of custom events by
    // `createEventDispatcher`.
    const unsubscribe = store.subscribe((value) =>
    {
       if (detailsEl)
       {
          detailsEl.dispatchEvent(createEvent(value ? 'open' : 'close'));
          detailsEl.dispatchEvent(createEvent(value ? 'openAny' : 'closeAny', true));
       }
    });
    onDestroy(unsubscribe);
 </script>
 <details class=tjs-folder
          bind:this={detailsEl}
          on:click
          on:keydown
          on:open
          on:close
          on:openAny
          on:closeAny
          use:toggleDetails={{ store, clickActive: false }}
          use:applyStyles={styles}
          data-id={id}
          data-label={label}
          data-closing='false'>
     <summary bind:this={summaryEl}
              on:click|capture={onClickSummary}
              on:contextmenu={onContextMenu}
              on:keyup={onKeyUp}
              class:default-cursor={localOptions.chevronOnly}>
         <svg bind:this={svgEl} viewBox="0 0 24 24">
             <path
                 fill=currentColor
                 stroke=currentColor
                 style="stroke-linejoin: round; stroke-width: 3;"
                 d="M5,8L19,8L12,15Z"
             />
         </svg>
         <slot name=label>{label}</slot>
         <slot class="switcharoo" name="prepend"></slot>
         <slot name="summary-end"></slot>
     </summary>
     <div class=contents>
         {#if visible}
             <slot />
         {/if}
     </div>
 </details>
 <style>
     details {
         margin-left: -5px;
         padding-left: var(--tjs-details-padding-left, 5px); /* Set for children folders to increase indent */
     }
     summary {
         display: flex;
         position: relative;
         align-items: center;
         background-blend-mode: var(--tjs-summary-background-blend-mode, initial);
         background: var(--tjs-summary-background, none);
         border: var(--tjs-summary-border, none);
         border-radius: var(--tjs-summary-border-radius, 0);
         border-width: var(--tjs-summary-border-width, initial);
         cursor: var(--tjs-summary-cursor, pointer);
         font-size: var(--tjs-summary-font-size, inherit);
         font-weight: var(--tjs-summary-font-weight, bold);
         font-family: var(--tjs-summary-font-family, inherit);
         list-style: none;
         margin: var(--tjs-summary-margin, 0 0 0 -5px);
         padding: var(--tjs-summary-padding, 4px) 0;
         user-select: none;
         width: var(--tjs-summary-width, fit-content);
     }
     .default-cursor {
         cursor: default;
     }
     summary svg {
         /* TODO: rework width by `em` */
         width: var(--tjs-summary-chevron-size, var(--tjs-summary-font-size, 15px));
         height: var(--tjs-summary-chevron-size, var(--tjs-summary-font-size, 15px));
         color: var(--tjs-summary-chevron-color, currentColor);
         cursor: var(--tjs-summary-cursor, pointer);
         opacity: var(--tjs-summary-chevron-opacity, 0.2);
         margin: 0 5px 0 0;
         transition: opacity 0.2s, transform 0.1s;
         transform: rotate(var(--tjs-summary-chevron-rotate-closed, -90deg));
     }
     summary:hover svg {
         opacity: var(--tjs-summary-chevron-opacity-hover, 1);
     }
     details[open] > summary {
         background: var(--tjs-summary-background-open, var(--tjs-summary-background, inherit));
     }
     [open]:not(details[data-closing='true']) > summary svg {
         transform: rotate(var(--tjs-summary-chevron-rotate-open, 0));
     }
     .contents {
         position: relative;
         background-blend-mode: var(--tjs-contents-background-blend-mode, initial);
         background: var(--tjs-contents-background, none);
         border: var(--tjs-contents-border, none);
         margin: var(--tjs-contents-margin, 0 0 0 -5px);
         padding: var(--tjs-contents-padding, 0 0 0 calc(var(--tjs-summary-font-size, 13px) * 0.8));
     }
     .contents::before {
         content: '';
         position: absolute;
         width: 0;
         height: calc(100% + 8px);
         left: 0;
         top: -8px;
     }
     summary:focus-visible + .contents::before {
         height: 100%;
         top: 0;
     }
     .switcharoo:hover {
         background: none;
     }
 </style>