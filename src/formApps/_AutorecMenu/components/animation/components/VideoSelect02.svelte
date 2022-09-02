<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import CustomPicker from "./CustomPicker.svelte";
    import SectionHeader from "./SectionHeader.svelte";

    export let animation;
    export let section;
    export let section02 = "video";
    export let title;
    export let idx;
    export let category;
 
    $: menuDB = animation._data[section][section02].dbSection;

    $: dbSection = $animation[section][section02].dbSection;
    $: menuType = $animation[section][section02].menuType;
    $: anim = $animation[section][section02].animation;
    $: variant = $animation[section][section02].variant;

</script>

<SectionHeader {title} />
<div
    class="aa-3wide aa-select-label {$animation[section][section02].enableCustom
        ? 'aa-disableOpacity'
        : ''}"
>
    <!--Copy Button-->
    <div class="flexcol" style="grid-row:2/3;grid-column:1/2">
        <label
            for=""
            on:click={() => category.databaseToClipboard()}
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
            bind:value={$animation[section][section02].menuType}
            on:change={async () =>
                await category.menuTypeChange(section, idx, section02, menuDB)}
        >
            {#each category.typeMenu[$animation[section][section02].dbSection] as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Animation Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.animation")}</label>
        <select
            bind:value={$animation[section][section02].animation}
            on:change={async () =>
                await category.animationChange(section, idx, section02, menuDB)}
        >
            {#each category.animationMenu[dbSection][menuType] as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Variant Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.variant")}</label>
        <select
            bind:value={$animation[section][section02].variant}
            on:change={async () =>
                await category.variantChange(section, idx, section02, menuDB)}
        >
            {#each category.variantMenu[dbSection][menuType][anim] as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
    <!--Color Menu-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
        <label for="">{localize("autoanimations.menus.color")}</label>
        <select bind:value={$animation[section][section02].color}>
            {#each category.colorMenu[dbSection][menuType][anim][variant] as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
</div>

<CustomPicker {animation} {section} {section02} {idx} {category} />

<style lang="scss">
    .aa-3wide label {
        align-self: center;
    }
    .aa-select-label label {
        font-size: large;
    }
</style>
