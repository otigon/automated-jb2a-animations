import { writable } from 'svelte/store';

let keyword = '';
let regex;
const storeKeyword = writable(keyword);

/**
 * If there is no filter keyword / regex then do not filter otherwise filter based on the case-insensitive regex
 * created from the search input element.
 *
 * @param {AnimationStore} animation - AnimationStore to potentially filter.
 *
 * @returns {boolean} AnimationStore filter state.
 */
function filterSearch(animation)
{
   return keyword === '' || !regex ? true : regex.test(SearchFilter.cleanQuery(animation.name));
}

// Create a custom store that changes when the search keyword changes.
filterSearch.subscribe = (handler) =>
{
   return storeKeyword.subscribe(handler);
};

filterSearch.set = (value) =>
{
   if (typeof value === 'string')
   {
      keyword = SearchFilter.cleanQuery(value);
      regex = new RegExp(RegExp.escape(keyword), 'i');
      storeKeyword.set(keyword);
   }
};

// ------------------------

export { filterSearch };
