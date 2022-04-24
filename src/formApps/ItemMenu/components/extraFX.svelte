<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import StaticMenu from "./staticMenu.svelte";
    import SoundSettings from "./soundSettings.svelte";

    export let flagData;

    export let flagPath;
    let root;
    let audioPath;
    switch (flagPath) {
        case "sourceExtraFX":
            console.log("Source FX Options");
            root = flagData.sourceToken;
            audioPath = "s01";
            break;
        case "targetExtraFX":
            console.log("Target FX Options");
            root = flagData.targetToken;
            audioPath = "t01";
            break;
    }


    let repeat = root.loops || 1;
    $: repeat = root.loops = repeat;

    let delay = root.loopDelay;
    $: delay = root.loopDelay = delay;

    let scale = root.scale || 1;
    $: scale = root.scale = scale;

    let belowToken = root.animLevel || false;
    $: belowToken = root.animLevel = belowToken;

    let opacity = root.opacity || 1;
    $: opacity = root.opacity = opacity > 1 ? 1 : opacity;

    let unbindAlpha = root.unbindAlpha || false;
    $: unbindAlpha = root.unbindAlpha = unbindAlpha;

    let unbindVisbility = root.unbindVisbility || false;
    $: unbindVisbility = root.unbindVisbility = unbindVisbility;

    let persistent =
        flagPath === "sourceExtraFX" ? false : root.persistent || false;
    $: persistent = root.persistent = persistent;

    function below() {
        belowToken = !belowToken;
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";
    $: isPersistent = persistent ? "Persistent" : "Not Persistent";
    function switchAlpha() {
        unbindAlpha = !unbindAlpha;
    }
    function switchVisibility() {
        unbindVisbility = !unbindVisbility;
    }
    function switchPersistence() {
        persistent = !persistent;
        let newPersistance = persistent;
        if (newPersistance) {
            repeat = 1;
        }
    }

    export let menuType;
    export let animation;
    export let variant;
    export let color;
</script>

<div transition:fade={{ duration: 500 }}>
    <StaticMenu bind:menuType bind:animation bind:variant bind:color {flagPath} {flagData} />
    <h2>Options</h2>
    <div
        class="aa-options"
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 500 }}
    >
        <!--Persistent Setting-->
        <div class="flexcol {flagPath === "sourceExtraFX" ? "aa-opacityButton" : ""}" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">Persistence</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchPersistence()}>{isPersistent}</button
            >
        </div>
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">Z-Index</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <!--Bind/Unbind Visibility (for Persistent Effects)-->
        <div class="flexcol {flagPath === "sourceExtraFX" ? "aa-opacityButton" : ""}" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">Visibility</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchVisibility()}>{bindVisibility}</button
            >
        </div>
        <!--Bind/Unbind Opacity (for Persistent Effects)-->
        <div class="flexcol {flagPath === "sourceExtraFX" ? "aa-opacityButton" : ""}" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">Alpha</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchAlpha()}>{bindAlpha}</button
            >
        </div>
        <!--Set Number of times the animation plays-->
        <div class="flexcol {persistent ? "aa-opacityButton" : ""}" style="grid-row: 2 / 3; grid-column: 1 / 2;">
            <label for="aaRepeat">{localize("AUTOANIM.repeat")}</label>
            <input
                disabled={persistent}
                id="aaRepeat"
                type="Number"
                bind:value={repeat}
                placeholder="1"
            />
        </div>
        <!--Set delay between repeats-->
        <div class="flexcol {persistent ? "aa-opacityButton" : ""}" style="grid-row: 2 / 3; grid-column: 2 / 3;">
            <label for="aaDelay"
                >{localize("AUTOANIM.repeat")}
                {localize("AUTOANIM.delay")}</label
            >
            <input
                disabled={persistent}
                it="aaDelay"
                type="Number"
                bind:value={delay}
                placeholder="250"
            />
        </div>
        <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
        <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.scale")}</label>
            <input
                type="Number"
                bind:value={scale}
                placeholder="1"
                step="0.01"
            />
        </div>
        <!--Set Animation Opacity-->
        <div
            class="flexcol"
            style="grid-row: 2 / 3; grid-column: 4 / 5;"
            in:fade={{ duration: 500 }}
            out:fade={{ duration: 500 }}
        >
            <label for="">{localize("AUTOANIM.opacity")}</label>
            <div class="form-group">
                <input
                    type="Number"
                    bind:value={opacity}
                    placeholder="1"
                    min="0"
                    max="1"
                    step="0.01"
                />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    bind:value={opacity}
                />
            </div>
        </div>
    </div>
    <SoundSettings {audioPath} {flagData} />
</div>

<style lang="scss">
    .aa-options {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-weight: bold;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-options label {
        align-self: center;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
    }
    .oldCheck {
        align-self: bottom;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .aa-opacityButton input {
        color: rgba(133, 133, 133, 0.3);
    }
    .aa-opacityButton label{
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
    .aa-opacityButton button{
        border: 2px outset #dddddd86;
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s, border 0.5s;
    }
</style>
