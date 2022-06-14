<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let playWhen;
    export let type;
    export let menuSection;
    export let flagData;
    export let menuListings;

    menuSection.macro ? menuSection.macro : (menuSection.macro = {});
    let macroField = menuSection.macro;
    export let enableMacro = macroField.enable || false;
    $: enableMacro = macroField.enable = enableMacro;

    export let show3d = false;
    $: show3d = show3d;
    function toggle3D() {
        show3d = !show3d;
        showExtraFX = show3d ? false : showExtraFX;
    }

    export let showExtraFX = false;
    $: showExtraFX = showExtraFX;
    function toggleExtraFX() {
        showExtraFX = !showExtraFX;
        show3d = showExtraFX ? false : show3d;
    }

    export let soundOnly = menuSection.soundOnly || false;
    $: soundOnly = menuSection.soundOnly = soundOnly;

    function duplicateSection() {
        let currentLength = Object.keys(flagData[type]).length;
        const newSection = {
            id: randomID(),
            hidden: true,
            name: `${menuSection.name} + (COPY)`,
        };
        mergeObject(newSection, menuSection, { overwrite: false });
        (flagData[type][currentLength] = newSection), (flagData = flagData);
        menuListings[type] = Object.values(flagData[type]);
    }

    const disableTypes = ["templatefx", "aura", "preset", "aefx"];

    $: disableButton = disableTypes.some((el) => type.includes(el))
        ? true
        : false;
</script>

<div class="aa-autorec-options">
    <div style="grid-row:1/2; grid-column:1/2">
        <label for="" on:click={() => duplicateSection()}
            >{localize("autoanimations.menus.duplicate")}
            <i class="far fa-clone fa-lg aa-zoom" /></label
        >
    </div>
    <div
        style="grid-row:1/2; grid-column:2/3"
        class={(enableMacro && playWhen === "2") || disableButton
            ? "isDisabled"
            : ""}
    >
        <label for="" on:click={() => toggle3D()}
            >{localize("autoanimations.menus.3dcanvas")}
            <i
                class="fas fa-cube fa-lg aa-zoom {show3d ? 'aa-green' : ''}"
            /></label
        >
    </div>
    <div
        style="grid-row:1/2; grid-column:3/4"
        class={enableMacro && playWhen === "2" ? "isDisabled" : ""}
    >
        <label for="" on:click={() => toggleExtraFX()}
            >{localize("autoanimations.menus.extra")} FX
            <i
                class="fas fa-user-plus fa-lg aa-zoom {showExtraFX
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:4/5" class={type === "preset" ? 'isDisabled' : ""}>
        <label for="" on:click={() => (soundOnly = !soundOnly)}
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg aa-zoom {soundOnly ? 'aa-green' : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:5/6">
        <label for="" on:click={() => (enableMacro = !enableMacro)}
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg aa-zoom {enableMacro
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
</div>

<style lang="scss">
    .aa-autorec-options label {
        font-size: small;
    }
    .isDisabled {
        pointer-events: none;
        opacity: 0.3;
    }
</style>
