import { writable }   from 'svelte/store';

let data = "";
export const menuAnimType = writable(data);

export const menuSelection = writable(data); 

let customPath;
export const customFilePath = writable(customPath);
let isCustom;
export const customChecked = writable(isCustom);

let fileData;
export const menuDBPath = writable(fileData)