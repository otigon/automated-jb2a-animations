<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, fly } from "svelte/transition";

    export let flagData;
    export let type;

    flagData.levels3d[type]
        ? flagData.levels3d[type]
        : (flagData.levels3d[type] = {});

    const root = flagData.levels3d[type];

    let spritePath;
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
        case "sprite":
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
            type: "imagevideo",
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

<div class="aa-3d-settings" transition:fade>
    <div class="form-group" style="grid-row: 2 / 3; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.color")} 01 </label>
        <input type="Text" bind:value={color01} />
        <input type="color" data-edit="color" id="tint" bind:value={color01} />
    </div>
    <div class="form-group" style="grid-row: 3 / 4; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.color")} 02 </label>
        <input type="Text" bind:value={color02} />
        <input type="color" data-edit="color" id="tint" bind:value={color02} />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.speed")} </label>
        <input
            type="Number"
            step=".01"
            bind:value={speed}
            placeholder="5"
            on:change={() => logFlags()}
        />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.repeat")} </label>
        <input type="Number" step=".01" bind:value={repeat} placeholder="1" />
    </div>
    {#if type === "projectile" || type === "ray"}
        <div
            class="flexcol"
            style="grid-row: 3 / 4; grid-column: 3 / 4;"
            transition:fade
        >
            <label for="">{localize("AUTOANIM.arc")} </label>
            <input type="Number" step=".01" bind:value={arc} placeholder="2" />
        </div>
    {/if}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
        <label for="">{localize("AUTOANIM.delayMS")} </label>
        <input type="Number" step=".01" bind:value={delay} placeholder="0" />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.scale")} </label>
        <input type="Number" step=".01" bind:value={scale} placeholder="0.7" />
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 4 / 5;">
        <label for="">{localize("AUTOANIM.alpha")} </label>
        <input type="Number" step=".01" bind:value={alpha} placeholder="0.5" />
    </div>
    {#if type !== "sprite"}
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 2 / 3;"
            transition:fade
        >
            <label for="">{localize("AUTOANIM.gravity")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={gravity}
                placeholder="0"
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 3 / 4;"
            transition:fade
        >
            <label for="">{localize("AUTOANIM.mass")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={mass}
                placeholder="100"
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 4 / 5; grid-column: 4 / 5;"
            transition:fade
        >
            <label for="">{localize("AUTOANIM.life")} </label>
            <input
                type="Number"
                step=".01"
                bind:value={life}
                placeholder="500"
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 5 / 6; grid-column: 2 / 3;"
            transition:fade
        >
            <label for="">{localize("AUTOANIM.emiterSize")} </label>
            <input
                type="Number"
                step=".0001"
                bind:value={emittersize}
                placeholder=".0001"
            />
        </div>
        <div
            class="flexcol"
            style="grid-row: 5 / 6; grid-column: 3 / 4;"
            transition:fade
        >
            <label for="rate">{localize("AUTOANIM.rate")} </label>
            <input
                type="Number"
                step=".01"
                id="rate"
                bind:value={rate}
                placeholder="10"
            />
        </div>
    {/if}
</div>
<div class="aa-customAnim-container">
    <div class="form-group" style="grid-row: 1/2; grid-column: 1/3">
        <label for="" style="align-self:end;">{localize("AUTOANIM.sprite")}</label>
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
        grid-template-columns: 40% 20% 20% 20%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        justify-items: end;
        color: black;
        text-align: center;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
    }
    .aa-3d-settings input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 5em;
        color: black;
    }
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-gap: 5px;
        padding: 5px;
        margin-right: 8%;
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
</style>
