<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let flagData;
    export let type;

    flagData.levels3d[type]
        ? flagData.levels3d[type]
        : (flagData.levels3d[type] = {});

    const root = flagData.levels3d[type];

    let spritePath;
    $: spritePath = root.sprite = spritePath;
    switch (type) {
        case "projectile":
            spritePath =
                root.sprite ||
                "modules/levels-3d-preview/assets/particles/emberssmall.png";
            break;
        case "ray":
            spritePath =
                root.sprite ||
                "modules/levels-3d-preview/assets/particles/emberssmall.png";
            break;
        case "sprites":
            spritePath =
                root.sprite ||
                "modules/levels-3d-preview/assets/particles/emberssmall.png";
            break;
        case "explosion":
            spritePath =
                root.sprite ||
                "modules/levels-3d-preview/assets/particles/dust.png";
            break;
    }

    let color01 = root.color01;
    $: color01 = root.color01 = color01
        ? color01.toString(16).padStart(6, "0").toUpperCase()
        : "#FFFFFF";

    let color02 = root.color02;
    $: color02 = root.color02 = color02
        ? color02.toString(16).padStart(6, "0").toUpperCase()
        : "#FFFFFF";

    let speed = root.speed;
    $: speed = root.speed = speed;

    let repeat = root.repeat;
    $: repeat = root.repeat = repeat;

    let arc = root.arc;
    $: arc = root.arc = arc;

    let delay = root.delay;
    $: delay = root.delay = delay;

    let scale = root.scale;
    $: scale = root.scale = scale;

    let alpha = root.alpha;
    $: alpha = root.alpha = alpha;

    let gravity = root.gravity;
    $: gravity = root.gravity = gravity;

    let mass = root.mass;
    $: mass = root.mass = mass;

    let life = root.life;
    $: life = root.life = life;

    let emittersize = root.emittersize;
    $: emittersize = root.emittersize = emittersize;

    let rate = root.rate;
    $: rate = root.rate = rate;

    function logFlags() {
        console.log(flagData);
    }
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
</script>

<div class="aa-3d-settings">
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.color")} 01 </label>
        <input type="Text" bind:value={color01} />
    </div>
    <div class="form-group" style="grid-row: 3 / 4; grid-column: 1 / 2;">
        <input type="color" data-edit="color" id="tint" bind:value={color01} />
    </div>
    <div class="form-group" style="grid-row: 4 / 5; grid-column: 1 / 2;">
        <input type="color" data-edit="color" id="tint" bind:value={color02} />
    </div>
    <div class="flexcol" style="grid-row: 5 / 6; grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.color")} 02 </label>
        <input type="Text" bind:value={color02} />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.speed")} </label>
        <input
            type="Number"
            step=.01
            bind:value={speed}
            placeholder=5
            on:change={() => logFlags()}
        />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("autoanimations.menus.repeat")} </label>
        <input type="Number" step=.01 bind:value={repeat} placeholder=1 />
    </div>
    {#if type === "projectile" || type === "ray"}
        <div
            class="flexcol"
            style="grid-row: 3 / 4; grid-column: 3 / 4;"
        >
            <label for="">{localize("autoanimations.menus.arc")} </label>
            <input type="Number" step=.01 bind:value={arc} placeholder=2 />
        </div>
    {/if}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
        <label for="">{localize("autoanimations.menus.delay")} </label>
        <input type="Number" step=.01 bind:value={delay} placeholder=0 />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.scale")} </label>
        <input type="Number" step=.01 bind:value={scale} placeholder=0.7 />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 4 / 5;">
        <label for="">{localize("autoanimations.menus.alpha")} </label>
        <input type="Number" step=.01 bind:value={alpha} placeholder=0.5 />
    </div>
    {#if type !== "sprite"}
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 2 / 3;"
        >
            <label for="">{localize("autoanimations.menus.gravity")} </label>
            <input
                type="Number"
                step=.01
                bind:value={gravity}
                placeholder=0
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 3 / 4;"
        >
            <label for="">{localize("autoanimations.menus.mass")} </label>
            <input
                type="Number"
                step=.01
                bind:value={mass}
                placeholder=100
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 4 / 5;"
        >
            <label for="">{localize("autoanimations.menus.life")} </label>
            <input
                type="Number"
                step=.01
                bind:value={life}
                placeholder=500
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 5 / 6; grid-column: 2 / 3;"
        >
            <label for="">{localize("autoanimations.menus.emiterSize")} </label>
            <input
                type="Number"
                step=.0001
                bind:value={emittersize}
                placeholder=.0001
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 5 / 6; grid-column: 3 / 4;"
        >
            <label for="rate">{localize("autoanimations.menus.rate")} </label>
            <input
                type="Number"
                step=.01
                id="rate"
                bind:value={rate}
                placeholder=10
            />
        </div>
    {/if}
</div>
<div class="aa-customAnim-container">
    <div class="form-group" style="grid-row: 1/2; grid-column: 1/3">
        <label for="" style="align-self:end;"
            >{localize("autoanimations.menus.sprite")}</label
        >
        <input type="text" bind:value={spritePath} />
        <button
            class="file-picker"
            on:click|preventDefault={() => selectCustom()}
            ><i class="fas fa-file-import fa-fw" /></button
        >
    </div>
</div>

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
        grid-template-columns: 24% 75%;
        grid-gap: 1%;
        padding: 5px;
        margin-right: 5%;
        margin-left: 5%;
        font-size: small;
        font-weight: bold;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-3d-settings label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
</style>
