<svelte:options accessors={true} />

<script>
    import * as common from "../../_AutorecMenu/store/default-data/common"

    import { getContext}        from "svelte";
    import { AnimationStore } from "../store/animation/AnimationStore.js"
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import CategoryControl       from "./category/CategoryControl.svelte";

    import { flagMigrations } from "../../../system-handlers/itemFlagMerge/itemFlagMerge.js"
    //import { constants}         from "../../../constants.js";

    export let elementRoot;

    export let item;
    
    export let itemFlags;
    let aaFlags = itemFlags.autoanimations || {};

    const { application } = getContext('external');

    const newFlagData = structuredClone(aaFlags);
    if (!newFlagData.hasOwnProperty('isEnabled')) {
        newFlagData.isEnabled = true;
    }
    if (!newFlagData.hasOwnProperty('isCustomized')) {
        newFlagData.isCustomized = false;
    }
    if (!newFlagData.hasOwnProperty('fromAmmo')) {
        newFlagData.fromAmmo = false;
    }
    if (!newFlagData.hasOwnProperty('menu')) {
        newFlagData.menu = "";
    }
    if (!newFlagData.hasOwnProperty('version')) {
        newFlagData.version = Object.keys(flagMigrations.migrations).map((n) => Number(n)).reverse()[0]
    }
    newFlagData.label = item.name;
    const flagData = {
        fromAmmo: aaFlags.fromAmmo ?? false,
        isEnabled: aaFlags.isEnabled ?? true,
        isCustomized: aaFlags.isCustomized ?? false,
        label: item.name,
        levels3d: aaFlags.levels3d || common.levels3d(),
        macro: aaFlags.macro || common.macro(),
        meleeSwitch: aaFlags.meleeSwitch || { 
            options: {
                detect: "automatic",
                range: 2,
                returning: false,
                switchType: "on",
            }, 
            sound: common.sound(),
            video:{
                dbSection: "range",
                menuType: "weapon",
                animation: "arrow",
                variant: "regular",
                color: "regular",
            }
        },
        menu: aaFlags.menu || "",
        presetType: aaFlags.presetType ?? "",
        primary: aaFlags.primary || { options: {}, sound: {enable: false},  video:{}},
        data: aaFlags.data ?? {},
        secondary: aaFlags.secondary || common.secondary(),
        soundOnly: aaFlags.soundOnly || {sound:common.sound()},
        source: aaFlags.source || common.source(),
        target: aaFlags.target || common.target(),
    }

    let animation = new AnimationStore(newFlagData)

</script>

<ApplicationShell bind:elementRoot stylesContent={{ color: "black" }}>
    <CategoryControl {item} {animation} />
</ApplicationShell>
