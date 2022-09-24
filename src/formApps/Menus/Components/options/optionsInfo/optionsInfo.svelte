<script>
    import { getContext }       from "svelte";

    import { localize }         from "@typhonjs-fvtt/runtime/svelte/helper";

    import OptionsInformation   from "./OptionsInformation.svelte";

    export let storageStore;
    export let tabStore;

    let headerList = [
        {
            label: 'autoanimations.animTypes.melee',
            icon: 'fas fa-shield-alt',
            section: "melee"
        },
        {
            label: 'autoanimations.animTypes.range',
            icon: 'fas fa-people-arrows',
            section: 'range'
        },
        {
            label: 'autoanimations.animTypes.ontoken',
            icon: 'fas fa-child',
            section: 'ontoken'
        },
        {
            label: 'autoanimations.animTypes.templatefx',
            icon: 'fas fa-shapes',
            section: 'templatefx'
        },
        {
            label: 'autoanimations.animTypes.aura',
            icon: 'fab fa-creative-commons-by',
            section: 'aura'
        },
        {
            label: 'autoanimations.app.aaAutorec-preset.label',
            icon: 'fas fa-gift',
            section: 'preset'
        },
        {
            label: 'autoanimations.menus.3dcanvas',
            icon: 'fas fa-cube',
            section: 'canvas3d'
        },
    ]

    const { application } = getContext("external");

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storeAppState = foundry.utils.debounce(() => $storageStore = application.state.get(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storeAppState($position);
</script>

<header>
    <ul>
        {#each headerList as section}
            <li class:active={$tabStore === section.section} on:click={() => $tabStore = section.section}>
                <i class={section.icon} />{localize(section.label)}
            </li>
            <span />
        {/each}
    </ul>
</header>
<OptionsInformation {tabStore}/>

<style lang="scss">
    header {
        font-size: .6em;
        flex: none;
        padding: 0.5em 0.5em;

        background: rgb(204, 204, 204);
        border: 1px solid rgb(100, 100, 100);
        border-radius: 10px;

        height: fit-content;
        width: 100%;
        ul {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            height: 100%;

            list-style-type: none;
            padding: 0;
            margin: 0;

            font-family: "Modesto Condensed", "Palatino Linotype", serif;
            font-size: 2em;
            font-weight: bold;
            vertical-align: middle;

            li {
                margin: auto;

                color: rgb(50, 50, 50);

                font-family: "Modesto Condensed", "Palatino Linotype", serif;
                font-size: 1.1em;
                font-weight: bold;
                vertical-align: middle;

                white-space: nowrap;
                transition: all .2s ease-in-out;

                &.active { text-shadow: 0 0 5px rgba(255, 0, 0, 0.687); }
                &:hover:not(.active) { transform: scale(1.05); }

                i { margin-right: 0.25em; }
            }

            span:not(:last-child) {
                display: inline-block;
                width: 1px;
                height: 75%;
                background: rgb(100, 100, 100);
            }
        }
    }
</style>
