<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import CopyDBPath from "./copyOnClick.svelte";
    import CustomPicker from "./CustomPicker.svelte";

    export let animation;
    const copy = () => {
        const dbPath = animation.dbPath();
        const app = new CopyDBPath({
            target: document.getElementById("clipboard"),
            props: { dbPath },
        });
        app.$destroy();
    };

    $: isCustom = $animation.primary.video.enableCustom;
    let menu = $animation.menu === "aura" ? "static" : $animation.menu;
</script>

<!--Unless spawned from "Explosions", Show the main Animation Type Select-->
<div class="aa-3wide aa-select-label">
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
            bind:value={$animation.primary.video.menuType}
            on:change={async () => await animation.primaryVideo("menuTypeChange")}
            disabled={isCustom}
        >
            {#each animation.primaryVideo("menuTypeList") as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Animation Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.animation")}</label>
        <select
            bind:value={$animation.primary.video.animation}
            on:change={async () => await animation.primaryVideo("animationChange")}
            disabled={isCustom}
        >
            {#each animation.primaryVideo("animationList") as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Variant Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.variant")}</label>
        <select
            bind:value={$animation.primary.video.variant}
            on:change={async () => await animation.primaryVideo("variantChange")}
            disabled={isCustom}
        >
            {#each animation.primaryVideo("variantList") as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Color Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
        <label for="">{localize("autoanimations.menus.color")}</label>
        <select bind:value={$animation.primary.video.color} disabled={isCustom}>
            {#each animation.primaryVideo("colorList") as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
</div>
<CustomPicker {animation} />

<style lang="scss">
    .aa-3wide label {
        align-self: center;
    }
    .aa-select-label label {
        font-size: large;
    }
</style>
