import { writable }   from 'svelte/store';

let data = "";
export const menuAnimType = writable(data);
