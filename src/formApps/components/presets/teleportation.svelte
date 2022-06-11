<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import SoundSettings from "../soundSettings.svelte";
    import ChooseAnimation from "../chooseAnimation.svelte";

    export let flagData;
    export let presetType;
    export let isAutoRec;

    /*Data Structure
        section: {
            teleportation: {
                measureType: String,
                range: Number, 
                hideFromPlayers: Boolean,
                start: {
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    scale: Number,
                    below: Boolean,
                    isMasked: Boolean,
                },
                between: {
                    enable: Boolean,
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    scale: Number,
                    playbackRate: Number,
                },
                end: {
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    scale: Number,
                    below: Boolean,
                    isMasked: Boolean,
                    delay: Number,
                }
            }
        }
    */

    let root;
    if (isAutoRec) {
        root = flagData;
    } else {
        root = flagData.preset;
    }
    root.teleportation ? root.teleportation : (root.teleportation = {});
    const preset = root.teleportation;

    let measureType = preset.measureType || "alternating";
    $: measureType = preset.measureType = measureType;

    let teleDist = preset.range || 30;
    $: teleDist = preset.range = teleDist;

    let hideFromPlayers = preset.hideFromPlayers || false;
    $: hideFromPlayers = preset.hideFromPlayers = hideFromPlayers;
    let isHidden = hideFromPlayers ? "Hidden" : "Not Hidden";
    $: isHidden = hideFromPlayers ? "Hidden" : "Not Hidden";
    function switchHide() {
        hideFromPlayers = !hideFromPlayers;
    }

    //Set Start Animation variables
    preset.start ? preset.start : (preset.start = {});
    const start = preset.start;
    let startMenuType = start.menuType;
    $: startMenuType = start.menuType = startMenuType;
    let startAnimation = start.animation;
    $: startAnimation = start.animation = startAnimation;
    let startVariant = start.variant;
    $: startVariant = start.variant = startVariant;
    let startColor = start.color;
    $: startColor = start.color = startColor;
    let startIsCustom = start.enableCustom || false;
    $: startIsCustom = start.enableCustom = startIsCustom;
    let startCustomPath = start.customPath || "";
    $: startCustomPath = start.customPath = startCustomPath;
    let startScale = start.scale || 1;
    $: startScale = start.scale = startScale;
    let startBelowToken = start.below || false;
    $: startBelowToken = start.below = startBelowToken;
    function startBelow() {
        startBelowToken = !startBelowToken;
    }
    $: startAboveBelow = startBelowToken ? game.i18n.localize("autoanimations.menus.below") : game.i18n.localize("autoanimations.menus.above");
    let startCustomId = "customPresetStart";
    let startIsMasked = start.isMasked || false;
    $: startIsMasked = start.isMasked = startIsMasked;
    $: startMaskLabel = startIsMasked ? game.i18n.localize("autoanimations.menus.enabled") : game.i18n.localize("autoanimations.menus.disabled");
    function switchStartMask() {
        startIsMasked = !startIsMasked;
    }
    let startOpacity = start.opacity || 0;
    $: startOpacity = start.opacity = startOpacity > 1 ? 1 : startOpacity;

    //Set End Animation variables
    preset.end ? preset.end : (preset.end = {});
    const end = preset.end;
    let endBelowToken = end.below || false;
    $: endBelowToken = end.below = endBelowToken;
    function endBelow() {
        endBelowToken = !endBelowToken;
    }
    $: endAboveBelow = endBelowToken ? game.i18n.localize("autoanimations.menus.below") : game.i18n.localize("autoanimations.menus.above");
    let endMenuType = end.menuType;
    $: endMenuType = end.menuType = endMenuType;
    let endAnimation = end.animation;
    $: endAnimation = end.animation = endAnimation;
    let endVariant = end.variant;
    $: endVariant = end.variant = endVariant;
    let endColor = end.color;
    $: endColor = end.color = endColor;
    let endIsCustom = end.enableCustom || false;
    $: endIsCustom = end.enableCustom = endIsCustom;
    let endCustomPath = end.customPath || "";
    $: endCustomPath = end.customPath = endCustomPath;
    let endScale = end.scale || 1;
    $: endScale = end.scale = endScale;
    let delayAlpha = end.delay || 250;
    $: delayAlpha = end.delay = delayAlpha;
    let endCustomId = "customPresetEnd";
    let endIsMasked = end.isMasked || false;
    $: endIsMasked = end.isMasked = endIsMasked;
    $: endMaskLabel = endIsMasked ? game.i18n.localize("autoanimations.menus.enabled") : game.i18n.localize("autoanimations.menus.disabled");
    function switchEndMask() {
        endIsMasked = !endIsMasked;
    }

    //Set Between Animation variables
    preset.between ? preset.between : (preset.between = {});
    const between = preset.between;
    let betweenMenuType = between.menuType;
    $: betweenMenuType = between.menuType = betweenMenuType;
    let betweenAnimation = between.animation;
    $: betweenAnimation = between.animation = betweenAnimation;
    let betweenVariant = between.variant;
    $: betweenVariant = between.variant = betweenVariant;
    let betweenColor = between.color;
    $: betweenColor = between.color = betweenColor;
    let betweenIsCustom = between.enableCustom || false;
    $: betweenIsCustom = between.enableCustom = betweenIsCustom;
    let betweenCustomPath = between.customPath || "";
    $: betweenCustomPath = between.customPath = betweenCustomPath;
    let betweenPlaybackRate = between.playbackRate || 1;
    $: betweenPlaybackRate = between.playbackRate = betweenPlaybackRate;
    let enableBetween = between.enable || false;
    $: enableBetween = between.enable = enableBetween;
    function switchBetween() {
        enableBetween = !enableBetween;
    }
    let betweenBelowToken = between.below || false;
    $: betweenBelowToken = between.below = betweenBelowToken;
    function betweenBelow() {
        betweenBelowToken = !betweenBelowToken;
    }
    $: betweenAboveBelow = betweenBelowToken ? game.i18n.localize("autoanimations.menus.below") : game.i18n.localize("autoanimations.menus.above");
    let betweenCustomId = "customPresetBetween";
    let shouldShowOnlyX = true;
    function info() {
        new TJSDialog({
            modal: true,
            draggable: true,
            resizable: true,
            height: 200,
            width: 200,
            title: game.i18n.localize("autoanimations.presetTypes.animTeleportation") + game.i18n.localize("autoanimations.menus.preset"),
            content: `<img src="modules/autoanimations/src/images/Teleportation.png" alt="">`,
        }).render(true);
    }
    let isGM = game.user.isGM;
</script>

<div class="aaMenu-section">
    <div class="aa-preset-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="" style="font-size:xx-large; color: rgba(0, 0, 0, 0.6)"
                >{localize("autoanimations.presetTypes.animTeleportation")}</label
            >
        </div>
        <div class="flexcol" style="grid-row:1/2; grid-column: 4/5">
            <label for=""><i class="fas fa-info-circle aa-info-icon" on:click={() => info()}></i></label>
        </div>
    </div>    
    <div class="aa-options-border">
        <h2 style="margin-top:10px;">{localize("autoanimations.menus.options")}</h2>
        <div class="aa-3wide">
            <!--Measurement Type-->
            <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.animation")}</label>
                <select
                    name="flags.autoanimations.animation"
                    bind:value={measureType}
                >
                    <option value="alternating"
                        >{localize("autoanimations.menuTypes.circle")}</option
                    >
                    <option value="equidistant"
                        >{localize("autoanimations.menuTypes.square")}</option
                    >
                </select>
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.ranged")}</label>
                <input type="Number" bind:value={teleDist} step="0.01" />
            </div>
            {#if isGM}
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 3 / 4;"
                >
                    <label for="">{localize("autoanimations.menus.hideBorder")}</label>
                    <button
                        class={hideFromPlayers
                            ? "aa-selected"
                            : "aa-notSelected"}
                        on:click={() => switchHide()}>{isHidden}</button
                    >
                </div>
            {/if}
        </div>
    </div>
</div>
<div class="aaMenu-section">
    <h1 style="margin-top:10px;">Start Animation</h1>
    <ChooseAnimation
        bind:menuType={startMenuType}
        bind:animation={startAnimation}
        bind:variant={startVariant}
        bind:color={startColor}
        bind:isCustom={startIsCustom}
        bind:customPath={startCustomPath}
        bind:customId={startCustomId}
        {isAutoRec}
        {presetType}
        presetSubType="TeleStart"
        flagPath="preset"
        animType="static"
        {flagData}
    />
    <div class="aa-options-border">
        <h2>{localize("autoanimations.menus.options")}</h2>
        <div class="aa-options">
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <button
                    class={startIsMasked ? "aa-selected" : "aa-notSelected"}
                    on:click={() => switchStartMask()}>{startMaskLabel}</button
                >
            </div>
            <!--Set Z-Index-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <button class="oldCheck" on:click={() => startBelow()}
                    >{startAboveBelow}</button
                >
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.scale")}</label>
                <input type="Number" bind:value={startScale} step="0.01" />
            </div>
            <div
                class="flexcol"
                style="grid-row: 1 / 2; grid-column: 4 / 5;"
                in:fade={{ duration: 500 }}
            >
                <label for="aaOpacity"
                    >{localize("autoanimations.menus.opacity")}</label
                >
                <div class="form-group">
                    <input
                        style="font-weight: bold;background:rgb(191 187 182);font-size:medium;height:1.5em;max-width: 3em;font-family: Noto Sans, serif;"
                        type="number"
                        id="aaOpacity"
                        bind:value={startOpacity}
                        placeholder="1"
                        min="0"
                        max="1"
                        step="0.01"
                    />
                    <input
                        style="border:none; background:none"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        bind:value={startOpacity}
                    />
                </div>
            </div>
        </div>
    </div>
</div>
<div class="aaMenu-section">
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">{localize("autoanimations.menus.between")} {localize("autoanimations.menus.animation")}</label>
            </div>
            <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
                <i
                    class="{enableBetween
                        ? 'fas fa-minus aa-red'
                        : 'fas fa-plus aa-green'} aaCenterToggle"
                    on:click={() => switchBetween()}
                />
            </div>
        </div>
    </div>
    {#if enableBetween}
        <ChooseAnimation
            bind:menuType={betweenMenuType}
            bind:animation={betweenAnimation}
            bind:variant={betweenVariant}
            bind:color={betweenColor}
            bind:isCustom={betweenIsCustom}
            bind:customPath={betweenCustomPath}
            bind:customId={betweenCustomId}
            {shouldShowOnlyX}
            {isAutoRec}
            {presetType}
            presetSubType="TeleBetween"
            flagPath="preset"
            animType="range"
            {flagData}
        />
        <div class="aa-options-border">
            <h2>{localize("autoanimations.menus.options")}</h2>
            <div class="aa-options">
                <!--Set Z-Index-->
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 2 / 3;"
                >
                    <label for="">{localize("autoanimations.menus.level")}</label>
                    <button class="oldCheck" on:click={() => betweenBelow()}
                        >{betweenAboveBelow}</button
                    >
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 3 / 4;"
                >
                    <label for="">{localize("autoanimations.menus.playbackRate")}</label>
                    <input
                        type="Number"
                        bind:value={betweenPlaybackRate}
                        placeholder="1"
                        step="0.01"
                    />
                </div>
            </div>
        </div>
    {/if}
</div>
<div class="aaMenu-section">
    <h1 style="margin-top:10px;">End Animation</h1>
    <ChooseAnimation
        bind:menuType={endMenuType}
        bind:animation={endAnimation}
        bind:variant={endVariant}
        bind:color={endColor}
        bind:isCustom={endIsCustom}
        bind:customPath={endCustomPath}
        bind:customId={endCustomId}
        {isAutoRec}
        {presetType}
        presetSubType="TeleEnd"
        flagPath="preset"
        animType="static"
        {flagData}
    />
    <div class="aa-options-border">
        <h2>Options</h2>
        <div class="aa-options">
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <button
                    class={endIsMasked ? "aa-selected" : "aa-notSelected"}
                    on:click={() => switchEndMask()}>{endMaskLabel}</button
                >
            </div>
            <!--Set Z-Index-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <button class="oldCheck" on:click={() => endBelow()}
                    >{endAboveBelow}</button
                >
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">Scale</label>
                <input type="Number" bind:value={endScale} step="0.01" />
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for="">Delay Token Alpha</label>
                <input type="number" bind:value={delayAlpha} step="0.01" />
            </div>
        </div>
    </div>
    <SoundSettings audioPath="a01" {flagData} />
</div>

<style lang="scss">
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        margin-top: 10px;
        color: black;
        border-bottom: 2px solid rgba(181 70 52);
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
    .aa-3wide {
        display: grid;
        grid-template-columns: 32.67% 32.67% 32.67%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-3wide label {
        align-self: center;
    }
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
        color: black;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .aa-info-icon {
        color: rgba(21, 154, 169, 0.75);
        position: relative;
        left: 20px;
    }
    .aa-info-icon:hover {
        color: rgba(7, 132, 25, 0.6);
    }
</style>
