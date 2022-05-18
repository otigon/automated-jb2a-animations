import { writable }         from 'svelte/store';

export let storeAutorec = writable([]);

let shouldClose = false
export const closePreviewWindow = writable(shouldClose)