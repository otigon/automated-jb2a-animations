<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import SoundSettings from "./SoundSettings.svelte";

    export let animation;

    function setSprite(type) {
        let spritePath;
        switch (type) {
            case "explosion":
                spritePath =  "modules/levels-3d-preview/assets/particles/dust.png";
                break;
            default:
                spritePath = "modules/levels-3d-preview/assets/particles/emberssmall.png";
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
        <label for="">{localize("autoanimations.menus.type")}</label>
        <select bind:value={$animation.levels3d.type} on:change={() => setSprite(animation._data.levels3d.type)}>
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

<div class="aa-3d-settings">
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.color")} 01 </label>
        <input type="Text" bind:value={$animation.levels3d.data.color01} />
    </div>
    <div class="form-group" style="grid-row: 3 / 4; grid-column: 1 / 2;">
        <input
            type="color"
            data-edit="color"
            id="tint"
            bind:value={$animation.levels3d.data.color01}
        />
    </div>
    <div class="form-group" style="grid-row: 4 / 5; grid-column: 1 / 2;">
        <input
            type="color"
            data-edit="color"
            id="tint"
            bind:value={$animation.levels3d.data.color02}
        />
    </div>
    <div class="flexcol" style="grid-row: 5 / 6; grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.color")} 02 </label>
        <input type="Text" bind:value={$animation.levels3d.data.color02} />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.speed")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={$animation.levels3d.data.speed}
            placeholder="5"
        />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("autoanimations.menus.repeat")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={$animation.levels3d.data.repeat}
            placeholder="1"
        />
    </div>
    {#if type === "projectile" || type === "ray"}
        <div class="flexcol" style="grid-row: 3 / 4; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.arc")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={$animation.levels3d.data.arc}
                placeholder="2"
            />
        </div>
    {/if}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
        <label for="">{localize("autoanimations.menus.delay")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={$animation.levels3d.data.delay}
            placeholder="0"
        />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.scale")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={$animation.levels3d.data.scale}
            placeholder="0.7"
        />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 4 / 5;">
        <label for="">{localize("autoanimations.menus.alpha")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={$animation.levels3d.data.alpha}
            placeholder="0.5"
        />
    </div>
    {#if type !== "sprite"}
        <div class="flexcol" style="grid-row: 4 / 5; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.gravity")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={$animation.levels3d.data.gravity}
                placeholder="0"
            />
        </div>
        <div class="flexcol" style="grid-row: 4 / 5; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.mass")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={$animation.levels3d.data.mass}
                placeholder="100"
            />
        </div>
        <div class="flexcol" style="grid-row: 4 / 5; grid-column: 4 / 5;">
            <label for="">{localize("autoanimations.menus.life")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={$animation.levels3d.data.life}
                placeholder="500"
            />
        </div>
        <div class="flexcol" style="grid-row: 5 / 6; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.emiterSize")} </label>
            <input
                type="Number"
                step=".0001"
                bind:value={$animation.levels3d.data.emittersize}
                placeholder=".0001"
            />
        </div>
        <div class="flexcol" style="grid-row: 5 / 6; grid-column: 3 / 4;">
            <label for="rate">{localize("autoanimations.menus.rate")} </label>
            <input
                type="Number"
                step=".01"
                id="rate"
                bind:value={$animation.levels3d.data.rate}
                placeholder="10"
            />
        </div>
    {/if}
</div>
<div class="aa-customAnim-container">
    <div class="grid-row: 1/2; grid-column: 1/2">
        <label for="">Sprite</label>
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
<SoundSettings {animation} section="levels3d"/>
<style lang="scss">
    .aa-3d-settings {
        display: grid;
        grid-template-columns: 32.5% 21.5% 21.5% 21.5%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        color: black;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-3d-settings input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 5em;
        color: black;
    }
    .aa-3d-settings input::-webkit-color-swatch {
        border: none;
    }
    .aa-3d-settings input::-webkit-color-swatch-wrapper {
        padding: 0;
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
    .aa-3d-settings label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
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
