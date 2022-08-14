<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import CopyDBPath from "./copyOnClick.svelte";
    import CustomPicker from "./CustomPicker.svelte";
    import SectionHeader from "./SectionHeader.svelte";

    export let animation;
    export let section;
    export let title;
    export let isOnToken;

    const copy = () => {
        const dbPath = animation.primaryVideo("dbPath", section);
        const app = new CopyDBPath({
            target: document.getElementById("clipboard"),
            props: { dbPath },
        });
        app.$destroy();
    };
    /*
    if (!animation._data?.[section]?.video?.menuType) {
        resetVideo()
    }
    async function resetVideo() {
        animation.resetPrimaryVideoMenu(section, isOnToken)
    }
    */
</script>

<SectionHeader {title}/>
<!--Unless spawned from "Explosions", Show the main Animation Type Select-->
<div class="aa-3wide aa-select-label {$animation[section].video.enableCustom ? "aa-disableOpacity" : ""}">
    <!--Copy Button-->
    <div class="flexcol" style="grid-row:2/3;grid-column:1/2">
        <label
            for=""
            on:click={copy}
            style="align-self: center; position:relative; bottom: 7px;font-size:large"
            title="Copy Database Path"
            >{localize("autoanimations.menus.copy")} DB {localize(
                "autoanimations.menus.path"
            )}
            <i
                class="fas fa-database aa-zoom"
                style="color: rgba(50, 79, 245, 0.5);"
            /></label
        >
        <div id="clipboard" />
    </div>
    <!--Type Menu-->
    <div class="flexcol" style="grid-row: 2 / 3;grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.type")}</label>
        <select
            bind:value={$animation[section].video.menuType}
            on:change={async () => await animation.primaryVideo("menuTypeChange", section, isOnToken)}
        >
            {#each animation.primaryVideo("menuTypeList", section, isOnToken) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Animation Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.animation")}</label>
        <select
            bind:value={$animation[section].video.animation}
            on:change={async () => await animation.primaryVideo("animationChange", section, isOnToken)}
        >
            {#each animation.primaryVideo("animationList", section, isOnToken) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Variant Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.variant")}</label>
        <select
            bind:value={$animation[section].video.variant}
            on:change={async () => await animation.primaryVideo("variantChange", section, isOnToken)}
        >
            {#each animation.primaryVideo("variantList", section, isOnToken) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Color Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
        <label for="">{localize("autoanimations.menus.color")}</label>
        <select bind:value={$animation[section].video.color}>
            {#each animation.primaryVideo("colorList", section, isOnToken) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
</div>
<CustomPicker {animation} {section}/>

<style lang="scss">
    .aa-3wide label {
        align-self: center;
    }
    .aa-select-label label {
        font-size: large;
    }
    .aa-disableOpacity {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
