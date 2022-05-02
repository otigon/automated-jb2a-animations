import { writable }         from 'svelte/store';

let data = "";
export const menuAnimType = writable(data);

export const menuSelection = writable(data);

let customPath01;
export const customFilePath01 = writable(customPath01);
let isCustom01;
export const customChecked01 = writable(isCustom01);
let fileData01;
export const menuDBPath01 = writable(fileData01);

let customPath02;
export const customFilePath02 = writable(customPath02);
let isCustom02;
export const customChecked02 = writable(isCustom02);
let fileData02;
export const menuDBPath02 = writable(fileData02);
let enabled02;
export const explosionEnabled = writable(enabled02);

let customPathSourceFX;
export const customFilePathSourceFX = writable(customPathSourceFX);
let isCustomSourceFX;
export const customCheckedSourceFX = writable(isCustomSourceFX);
let fileDataSourceFX;
export const menuDBPathSourceFX = writable(fileDataSourceFX);

let customPathTargetFX;
export const customFilePathTargetFX = writable(customPathTargetFX);
let isCustomTargetFX;
export const customCheckedTargetFX = writable(isCustomTargetFX);
let fileDataTargetFX;
export const menuDBPathTargetFX = writable(fileDataTargetFX);

let fileDataSwitch;
export const menuDBPathSwitch = writable(fileDataSwitch);

let sourceEnabled;
export const extraSource = writable(sourceEnabled);

let targetEnabled;
export const extraTarget = writable(targetEnabled);
