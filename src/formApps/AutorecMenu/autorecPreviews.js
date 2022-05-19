import { writable }         from 'svelte/store';

export let storeAutorec = writable();

let shouldClose = false
export const closePreviewWindow = writable(shouldClose)

export const index = writable()

export const databaseType = writable()