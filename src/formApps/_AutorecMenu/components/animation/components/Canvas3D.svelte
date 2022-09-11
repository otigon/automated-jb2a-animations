<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import Canvas3dOptions from "./options/Canvas3dOptions.svelte";

    import SoundSettings from "./SoundSettings.svelte";

    export let animation;

    function setSprite(type) {
        let spritePath;
        switch (type) {
            case "explosion":
                spritePath =
                    "modules/levels-3d-preview/assets/particles/dust.png";
                break;
            default:
                spritePath =
                    "modules/levels-3d-preview/assets/particles/emberssmall.png";
        }
        $animation.levels3d.data.spritePath = spritePath;
    }

    /*
    async function selectCustom() {
        const current = spritePath;
        const picker = new FilePicker({
            type: "folder",
            current,
            callback: (path) => {
                spritePath = path;
            },
        });
        setTimeout(() => {
            picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
        }, 100);
        await picker.browse(current);
    }
    */
    async function selectCustom() {
        const current = animation._data.levels3d.data.spritePath;
        const picker = new FilePicker({
            type: "imagevideo",
            current,
            callback: (path) => {
                $animation.levels3d.data.spritePath = path;
            },
        });
        setTimeout(() => {
            picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
        }, 100);
        await picker.browse(current);
    }

    $: type = $animation.levels3d.type;
</script>

<h1>3D Canvas Particle Animations</h1>
<h3>Requires the 3D Canvas Module by Ripper</h3>
<div class="aa-3wide">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="" style="font-size: 1.2em"
            >{localize("autoanimations.menus.type")}</label
        >
        <select
            bind:value={$animation.levels3d.type}
            on:change={() => setSprite(animation._data.levels3d.type)}
        >
            <option value="" />
            <option value="projectile"
                >{localize("autoanimations.menus.projectile")}</option
            >
            <option value="sprites">3D Object</option>
            <option value="ray"
                >{localize("autoanimations.menuTypes.ray")}</option
            >
            <option value="explosion"
                >{localize("autoanimations.menus.explosion")}</option
            >
        </select>
    </div>
</div>
<div class="aa-section-border">
    <div class="aa-customAnim-container">
        <div class="grid-row: 1/2; grid-column: 1/2">
            <label for="" style="font-size: 1.2em">Sprite</label>
        </div>
        <div class="aa-custom" style="grid-row: 1/2; grid-column: 2/4">
            <input
                type="text"
                bind:value={$animation.levels3d.data.spritePath}
                style="font-weight:normal; font-size:small"
            />
        </div>
        <div class="aa-custom" style="grid-row: 1/2; grid-column: 4/5">
            <button
                class="file-picker"
                on:click|preventDefault={() => selectCustom()}
                ><i class="fas fa-file-import fa-fw" /></button
            >
        </div>
    </div>
    <Canvas3dOptions {animation} />
    <SoundSettings {animation} section="levels3d" />
</div>

<style lang="scss">
    .aa-3wide {
        text-align: center;
        margin-bottom: 5px;
    }
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 24.25% 31.375% 31.375% 10%;
        padding-top: 5px;
        padding-bottom: 5px;
        align-items: center;
        margin-right: 6%;
        margin-left: 3%;
        font-size: small;
        font-weight: bold;
        margin-top: 10px;
        text-align: center;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px outset rgb(142, 142, 142);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        background: #dddddd;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        margin-top: 5px;
    }
    h3 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: medium;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
</style>
