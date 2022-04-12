/**
 * Localize a string including variable formatting for input arguments. Provide a string ID which defines the localized
 * template. Variables can be included in the template enclosed in braces and will be substituted using those named
 * keys.
 *
 * @param {string}   stringId - The string ID to translate.
 *
 * @param {object}   [data] - Provided input data.
 *
 * @returns {string} The translated and formatted string
 */
declare function localize(stringId: string, data?: object): string;
/**
 * A helper to create a set of radio checkbox input elements in a named set.
 * The provided keys are the possible radio values while the provided values are human readable labels.
 *
 * @param {string} name         The radio checkbox field name
 *
 * @param {object} choices      A mapping of radio checkbox values to human readable labels
 *
 * @param {object} options      Options which customize the radio boxes creation
 *
 * @param {string} options.checked    Which key is currently checked?
 *
 * @param {boolean} options.localize  Pass each label through string localization?
 *
 * @returns {string} HTML for radio boxes.
 *
 * @example <caption>The provided input data</caption>
 * let groupName = "importantChoice";
 * let choices = {a: "Choice A", b: "Choice B"};
 * let chosen = "a";
 *
 * @example <caption>The template HTML structure</caption>
 * <div class="form-group">
 *   <label>Radio Group Label</label>
 *   <div class="form-fields">
 *     {@html radioBoxes(groupName, choices, { checked: chosen, localize: true})}
 *   </div>
 * </div>
 */
declare function radioBoxes(name: string, choices: object, options: {
    checked: string;
    localize: boolean;
}): string;
/**
 * Converts the `selectOptions` Handlebars helper to be Svelte compatible. This is useful when initially converting
 * over an app to Svelte and for essential usage to several dialogs that mirror the core Foundry experience. For
 * an example of usage see {@link TJSFolderPermissions}.
 *
 * A helper to create a set of <option> elements in a <select> block based on a provided dictionary.
 * The provided keys are the option values while the provided values are human-readable labels.
 * This helper supports both single-select as well as multi-select input fields.
 *
 * @param {object} choices                     A mapping of radio checkbox values to human readable labels
 *
 * @param {object} options                     Helper options
 *
 * @param {string|string[]} [options.selected] Which key or array of keys that are currently selected?
 *
 * @param {boolean} [options.localize=false]   Pass each label through string localization?
 *
 * @param {string} [options.blank]             Add a blank option as the first option with this label
 *
 * @param {string} [options.nameAttr]          Look up a property in the choice object values to use as the option value
 *
 * @param {string} [options.labelAttr]         Look up a property in the choice object values to use as the option label
 *
 * @param {boolean} [options.inverted=false]   Use the choice object value as the option value, and the key as the label
 *                                             instead of vice-versa
 *
 * @returns {string} The <options> HTML element(s).
 *
 * @example <caption>The provided input data</caption>
 * let choices = {a: 'Choice A', b: 'Choice B'};
 * let value = 'a';
 *
 * @example <caption>The template HTML structure</caption>
 * <select name="importantChoice">
 *   {@html selectOptions(choices { selected: value, localize: true })}
 * </select>
 *
 * @example <caption>The resulting HTML</caption>
 * <select name="importantChoice">
 *   <option value="a" selected>Choice A</option>
 *   <option value="b">Choice B</option>
 * </select>
 *
 * @example <caption>Using inverted</caption>
 * let choices = {'Choice A': 'a', 'Choice B': 'b'};
 * let value = 'a';
 *
 * @example <caption>The template HTML structure</caption>
 * <select name="importantChoice">
 *   {@html selectOptions(choices, { selected: value, inverted: true })}
 * </select>
 *
 * @example <caption>Using nameAttr and labelAttr with objects</caption>
 * let choices = {foo: {key: 'a', label: 'Choice A'}, bar: {key: 'b', label: 'Choice B'}};
 * let value = 'b';
 *
 * @example <caption>The template HTML structure</caption>
 * <select name="importantChoice">
 *   {@html selectOptions(choices, { selected: value, nameAttr: 'key', labelAttr: 'label' })}
 * </select>
 *
 * @example <caption>Using nameAttr and labelAttr with arrays</caption>
 * let choices = [{key: 'a', label: 'Choice A'}, {key: 'b', label: 'Choice B'}];
 * let value = 'b';
 *
 * @example <caption>The template HTML structure</caption>
 * <select name="importantChoice">
 *   {@html selectOptions(choices, { selected: value, nameAttr: 'key', labelAttr: 'label' })}
 * </select>
 */
declare function selectOptions(choices: object, options: {
    selected?: string | string[];
    localize?: boolean;
    blank?: string;
    nameAttr?: string;
    labelAttr?: string;
    inverted?: boolean;
}): string;

export { localize, radioBoxes, selectOptions };
