<script>
    /**
     * This component is based on SixStringsCoder's and located @
     * https://svelte.dev/repl/5734f123973d4682978427024ca90850?version=3.29.0
    */

    export let animation;

    let filteredMacros = [];

    let macroList;
    let isFocused = false;
    
    function onFocus() {
        macroList = Array.from(game.macros).map((x) => x.name).sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        });
        isFocused = true
    }
    async function unFocus() {
        isFocused = false;
        filteredMacros = [];
        hiLiteIndex = null;
    }

    const filterMacros = () => {
        let storageArr = [];
        if (inputValue) {
            macroList.forEach((name) => {
                if (
                    name.toLowerCase().startsWith(inputValue.toLowerCase())
                ) {
                    storageArr = [...storageArr, name];
                }
            });
        }
        filteredMacros = storageArr;
    };

    $: inputValue = $animation.macro.name;

    $: if (!inputValue) {
        filteredMacros = [];
        hiLiteIndex = null;
    }

    const setValue = (macroName) => {
        inputValue = macroName;
        filteredMacros = [];
        hiLiteIndex = null;
        $animation.macro.name = inputValue;
    };

    let hiLiteIndex = null;

    const navigateList = (e) => {
        if (e.key === "Enter") {
            setValue(filteredMacros[hiLiteIndex] || inputValue);
        } else {
            return;
        }
    };
</script>

<svelte:window on:keydown={navigateList} />

<form autocomplete="off" on:submit|preventDefault>
    <div class="autocomplete">
        <input
            type="text"
            placeholder="Input Macro Name"
            bind:value={$animation.macro.name}
            on:input={filterMacros}
            on:blur={() => setTimeout(unFocus, 500)}
            on:focus={onFocus}
        />
    </div>

    {#if filteredMacros.length > 0 && isFocused}
        <ul class="autocomplete-items-list">
            {#each filteredMacros as macro, i}
                <li 
                    class="autocomplete-items" 
                    class:autocomplete-active={i === hiLiteIndex} 
                    on:click={() => setValue(macro)}
                >
                    {macro}
                </li>                
            {/each}
        </ul>
    {:else if isFocused && !$animation.macro.name}
        <ul class="autocomplete-items-list">
            {#each macroList as macro, i}
                <li 
                    class="autocomplete-items" 
                    class:autocomplete-active={i === hiLiteIndex} 
                    on:click={() => setValue(macro)}
                >
                    {macro}
                </li>                
            {/each}
        </ul>
    {/if}
</form>

<style>
    input {
        border: 1px solid transparent;
        background-color: #b71d1d;
        padding: 10px;
        font-size: 14px;
        margin: 0;
    }
    input[type="text"] {
        height: 1em;
        width: 100%;
    }
    .autocomplete-items-list {
        position: absolute;
        margin: 0;
        padding: 0;
        min-width: 13em;
        border: 1px solid rgba(0, 0, 0, 0.313);
        font-size: 14px;
        z-index: 1000;
        max-height: 15em;
        overflow: auto;
        text-align: center;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    li.autocomplete-items {
        list-style: none;
        border-bottom: 1px solid #d4d4d4;
        z-index: 99;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
        font-weight: normal;
        background-color: rgb(241, 241, 253, 0.95);
    }

    li.autocomplete-items:hover {
        /*when hovering an item:*/
        background-color: rgba(112, 112, 112, 0.95);
        color: white;
    }

    .autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: rgba(112, 112, 112, 0.95)  !important;
        color: white;
    }
</style>
