<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";
    import ChooseAnimation from "../chooseAnimation.svelte";

    export let flagData;
    export let presetType;
    export let isAutoRec;

    /*Data Structure
        section: {
            fireball: {
                removeTemplate: Boolean,
                projectile: {
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    wait: Number,
                    repeat: Number,
                    delay: Number,
                    below: Boolean,
                },
                explosion01: {
                    enable: Boolean,
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    below: Boolean,
                    scale: Number,
                    wait: Number,
                    repeat: Number,
                    delay: Number,
                },
                explosion02: {
                    menuType: String,
                    animation: String,
                    variant: String,
                    color: String,
                    enableCustom: Boolean,
                    customPath: String,
                    below: Boolean,
                    scale: Number,
                    wait: Number,
                    repeat: Number,
                    delay: Number,
                },
                afterImage: {
                    enable: Boolean,
                    customPath: String,
                    persistent: Boolean,
                    below: Boolean,
                    scale: Number,
                    wait: Number,
                },
            },
        }
    */

    let root;
    if (isAutoRec) {
        root = flagData;
    } else {
        root = flagData.preset;
    }
    root.fireball ? root.fireball : (root.fireball = {});
    const preset = root.fireball;

    // Configure Projectile variables
    preset.projectile ? preset.projectile : (preset.projectile = {});
    const projectile = preset.projectile;
    let projectileMenuType = projectile.menuType;
    $: projectileMenuType = projectile.menuType = projectileMenuType;
    let projectileAnimation = projectile.animation;
    $: projectileAnimation = projectile.animation = projectileAnimation;
    let projectileVariant = projectile.variant;
    $: projectileVariant = projectile.variant = projectileVariant;
    let projectileColor = projectile.color;
    $: projectileColor = projectile.color = projectileColor;
    let projectileIsCustom = projectile.enableCustom || false;
    $: projectileIsCustom = projectile.enableCustom = projectileIsCustom;
    let projectileCustomPath = projectile.customPath;
    $: projectileCustomPath = projectile.customPath = projectileCustomPath;
    let projectileWait = projectile.wait || 0;
    $: projectileWait = projectile.wait = projectileWait;
    let projectileRepeat = projectile.repeat || 1;
    $: projectileRepeat = projectile.repeat = projectileRepeat;
    let projectileDelay = projectile.delay || 0;
    $: projectileDelay = projectile.delay = projectileDelay;
    let removeTemplate = preset.removeTemplate || false;
    $: removeTemplate = preset.removeTemplate = removeTemplate;
    $: isRemove = removeTemplate ? "Yes" : "No";
    function switchRemove() {
        removeTemplate = !removeTemplate;
    }
    let projectileBelowToken = projectile.below || false;
    $: projectileBelowToken = projectile.below = projectileBelowToken;
    function projectileBelow() {
        projectileBelowToken = !projectileBelowToken;
    }
    $: projectileAboveBelow = projectileBelowToken
        ? "Below Token"
        : "Above Token";
    let shouldShowOnlyX = true;
    let projectileCustomId = "customPresetProjectile";

    // Configure Pre Explosion variables
    preset.explosion01 ? preset.explosion01 : (preset.explosion01 = {});
    const explosion01 = preset.explosion01;
    let explosion01MenuType = explosion01.menuType;
    $: explosion01MenuType = explosion01.menuType = explosion01MenuType;
    let explosion01Animation = explosion01.animation;
    $: explosion01Animation = explosion01.animation = explosion01Animation;
    let explosion01Variant = explosion01.variant;
    $: explosion01Variant = explosion01.variant = explosion01Variant;
    let explosion01Color = explosion01.color;
    $: explosion01Color = explosion01.color = explosion01Color;
    let explosion01IsCustom = explosion01.enableCustom || false;
    $: explosion01IsCustom = explosion01.enableCustom = explosion01IsCustom;
    let explosion01CustomPath = explosion01.customPath;
    $: explosion01CustomPath = explosion01.customPath = explosion01CustomPath;
    let explosion01BelowToken = explosion01.below || false;
    $: explosion01BelowToken = explosion01.below = explosion01BelowToken;
    function explosion01Below() {
        explosion01BelowToken = !explosion01BelowToken;
    }
    $: explosion01AboveBelow = explosion01BelowToken
        ? "Below Token"
        : "Above Token";
    let explosion01Scale = explosion01.scale || 1;
    $: explosion01Scale = explosion01.scale = explosion01Scale;
    let explosion01Wait = explosion01.wait || 0;
    $: explosion01Wait = explosion01.wait = explosion01Wait;
    let explosion01Repeat = explosion01.repeat || 1;
    $: explosion01Repeat = explosion01.repeat = explosion01Repeat;
    let explosion01Delay = explosion01.delay || 0;
    $: explosion01Delay = explosion01.delay = explosion01Delay;
    let enablePreExplosion = explosion01.enable || false;
    $: enablePreExplosion = explosion01.enable = enablePreExplosion;
    function switchPreExplosionEnable() {
        if (enablePreExplosion) {
            showPreExplosion = true;
        }
    }
    let explosion01CustomId = "customPresetExplosion01";

    // Configure Primary Explosion variables
    preset.explosion02 ? preset.explosion02 : (preset.explosion02 = {});
    const explosion02 = preset.explosion02;
    let explosion02MenuType = explosion02.menuType;
    $: explosion02MenuType = explosion02.menuType = explosion02MenuType;
    let explosion02Animation = explosion02.animation;
    $: explosion02Animation = explosion02.animation = explosion02Animation;
    let explosion02Variant = explosion02.variant;
    $: explosion02Variant = explosion02.variant = explosion02Variant;
    let explosion02Color = explosion02.color;
    $: explosion02Color = explosion02.color = explosion02Color;
    let explosion02IsCustom = explosion02.enableCustom || false;
    $: explosion02IsCustom = explosion02.enableCustom = explosion02IsCustom;
    let explosion02CustomPath = explosion02.customPath;
    $: explosion02CustomPath = explosion02.customPath = explosion02CustomPath;
    let explosion02BelowToken = explosion02.below || false;
    $: explosion02BelowToken = explosion02.below = explosion02BelowToken;
    function explosion02Below() {
        explosion02BelowToken = !explosion02BelowToken;
    }
    $: explosion02AboveBelow = explosion02BelowToken
        ? "Below Token"
        : "Above Token";
    let explosion02Scale = explosion02.scale || 1;
    $: explosion02Scale = explosion02.scale = explosion02Scale;
    let explosion02Repeat = explosion02.repeat || 1;
    $: explosion02Repeat = explosion02.repeat = explosion02Repeat;
    let explosion02Delay = explosion02.delay || 0;
    $: explosion02Delay = explosion02.delay = explosion02Delay;
    let explosion02CustomId = "customPresetExplosion02";

    async function selectCustom() {
        const current = customPath;
        const picker = new FilePicker({
            type: "imagevideo",
            current,
            callback: (path) => {
                customPath = path;
            },
        });
        setTimeout(() => {
            picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
        }, 100);
        await picker.browse(current);
    }

    preset.afterImage ? preset.afterImage : (preset.afterImage = {});
    const afterImage = preset.afterImage;
    let enableAfterImage = afterImage.enable || false;
    $: enableAfterImage = afterImage.enable = enableAfterImage;
    function switchAfterImageEnable() {
        enableAfterImage = !enableAfterImage;
    }
    let customPath = afterImage.customPath || "";
    $: customPath = afterImage.customPath = customPath;
    let persistent = afterImage.persistent || false;
    $: persistent = afterImage.persistent = persistent;
    $: isPersistent = persistent ? "Persistent" : "Not Persistent";
    function switchPersistence() {
        persistent = !persistent;
    }
    let afterImageBelowToken = afterImage.below || false;
    $: afterImageBelowToken = afterImage.below = afterImageBelowToken;
    function afterImageBelow() {
        afterImageBelowToken = !afterImageBelowToken;
    }
    $: afterImageAboveBelow = afterImageBelowToken
        ? "Below Token"
        : "Above Token";
    let afterImageScale = afterImage.scale || 1;
    $: afterImageScale = afterImage.scale = afterImageScale;
    let afterImageWait = afterImage.wait || 0;
    $: afterImageWait = afterImage.wait = afterImageWait;

    let showPreExplosion = explosion01.showPreExplosion ?? false;
    $: showPreExplosion = explosion01.showPreExplosion = showPreExplosion;
</script>

<div class="aaMenu-section">
    <div class="aa-preset-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="" style="font-size:xx-large; color: rgba(0, 0, 0, 0.6)"
                >{localize("autoanimations.presetTypes.proToTemp")}</label
            >
        </div>
    </div>
</div>
<div class="aaMenu-section">
    <h1 style="margin-top:10px;">
        {localize("autoanimations.menus.projectile")}
        {localize("autoanimations.menus.animation")}
    </h1>
    <ChooseAnimation
        bind:menuType={projectileMenuType}
        bind:animation={projectileAnimation}
        bind:variant={projectileVariant}
        bind:color={projectileColor}
        bind:isCustom={projectileIsCustom}
        bind:customPath={projectileCustomPath}
        bind:customId={projectileCustomId}
        {isAutoRec}
        {presetType}
        {shouldShowOnlyX}
        presetSubType="FireballProjectile"
        flagPath="preset"
        animType="range"
        {flagData}
    />
    <div class="aa-options-border">
        <h2 style="font-size:22px">
            {localize("autoanimations.menus.options")}
        </h2>
        <div class="aa-options">
            <!--Set Z-Index-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <button class="oldCheck" on:click={() => projectileBelow()}
                    >{projectileAboveBelow}</button
                >
            </div>
            <!--Remove Template option-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.remove")}</label>
                <button
                    class={removeTemplate ? "aa-selected" : "aa-notSelected"}
                    on:click={() => switchRemove()}>{isRemove}</button
                >
            </div>
            <!--Set Number of times the animation plays-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.repeat")}</label>
                <input
                    type="number"
                    bind:value={projectileRepeat}
                    placeholder="1"
                />
            </div>
            <!--Set delay between repeats-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for=""
                    >{localize("autoanimations.menus.repeat")}
                    {localize("autoanimations.menus.delay")}</label
                >
                <input
                    type="number"
                    bind:value={projectileDelay}
                    placeholder="250"
                />
            </div>
            <!--Set Delay before Next Explosion-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.wait")}</label>
                <input type="number" bind:value={projectileWait} step="0.01" />
            </div>
        </div>
    </div>
    <SoundSettings audioPath="a01" {flagData} />
</div>
<div class="aaMenu-section">
    <div class="aa-preheader-section">
        <div class="aa-preheader">
            <div class="flexcol" style="grid-row:1/2; grid-column:1/2;">
                <i
                    class="{showPreExplosion
                        ? 'fas fa-caret-down fa-lg aa-greyScale'
                        : 'fas fa-caret-right fa-lg aa-greyScale'} aa-zoom"
                    title={showPreExplosion ? "collapse" : "expand"}
                    on:click={() => (showPreExplosion = !showPreExplosion)}
                />
            </div>
            <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                <label for=""
                    >{localize("autoanimations.menus.pre")}-{localize(
                        "autoanimations.menus.explosion"
                    )}
                    {localize("autoanimations.menus.animation")}</label
                >
            </div>
            <div
                class="flexcol aa-checkbox"
                style="grid-row:1/2; grid-column:3/4"
            >
                <input
                    type="checkbox"
                    style="align-self:center"
                    title="Toggle Explosion On/Off"
                    on:click={() => (enablePreExplosion = !enablePreExplosion)}
                    on:change={() => switchPreExplosionEnable()}
                    bind:checked={enablePreExplosion}
                />
            </div>
        </div>
    </div>
    {#if showPreExplosion}
        <div class={!enablePreExplosion ? "isDisabled" : ""}>
            <ChooseAnimation
                bind:menuType={explosion01MenuType}
                bind:animation={explosion01Animation}
                bind:variant={explosion01Variant}
                bind:color={explosion01Color}
                bind:isCustom={explosion01IsCustom}
                bind:customPath={explosion01CustomPath}
                bind:customId={explosion01CustomId}
                {isAutoRec}
                {presetType}
                presetSubType="FireballExplosion01"
                flagPath="preset"
                animType="static"
                {flagData}
            />
            <div class="aa-options-border">
                <h2 style="font-size:22px">
                    {localize("autoanimations.menus.options")}
                </h2>
                <div class="aa-options">
                    <!--Set Z-Index-->
                    <div
                        class="flexcol"
                        style="grid-row: 1 / 2; grid-column: 1 / 2;"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.level")}</label
                        >
                        <button
                            class="oldCheck"
                            on:click={() => explosion01Below()}
                            >{explosion01AboveBelow}</button
                        >
                    </div>
                    <!--Set the Scale of the Animation-->
                    <div
                        class="flexcol"
                        style="grid-row: 1 / 2; grid-column: 2 / 3;"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.scale")}</label
                        >
                        <input
                            type="number"
                            bind:value={explosion01Scale}
                            placeholder="1"
                        />
                    </div>
                    <!--Set Number of times the animation plays-->
                    <div
                        class="flexcol"
                        style="grid-row: 1 / 2; grid-column: 3 / 4;"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}</label
                        >
                        <input
                            type="number"
                            bind:value={explosion01Repeat}
                            placeholder="1"
                        />
                    </div>
                    <!--Set delay between repeats-->
                    <div
                        class="flexcol"
                        style="grid-row: 1 / 2; grid-column: 4 / 5;"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}
                            {localize("autoanimations.menus.delay")}</label
                        >
                        <input
                            type="number"
                            bind:value={explosion01Delay}
                            placeholder="250"
                        />
                    </div>
                    <!--Set Delay before Next Explosion-->
                    <div
                        class="flexcol"
                        style="grid-row: 2 / 3; grid-column: 4 / 5;"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.wait")}</label
                        >
                        <input
                            type="number"
                            bind:value={explosion01Wait}
                            step="0.01"
                        />
                    </div>
                </div>
            </div>
            <SoundSettings audioPath="e01" {flagData} />
        </div>
    {/if}
</div>
<div class="aaMenu-section">
    <h1 style="margin-top:10px;">
        {localize("autoanimations.menus.primary")}
        {localize("autoanimations.menus.explosion")}
        {localize("autoanimations.menus.animation")}
    </h1>
    <ChooseAnimation
        bind:menuType={explosion02MenuType}
        bind:animation={explosion02Animation}
        bind:variant={explosion02Variant}
        bind:color={explosion02Color}
        bind:isCustom={explosion02IsCustom}
        bind:customPath={explosion02CustomPath}
        bind:customId={explosion02CustomId}
        {isAutoRec}
        {presetType}
        presetSubType="FireballExplosion02"
        flagPath="preset"
        animType="static"
        {flagData}
    />
    <div class="aa-options-border">
        <h2 style="font-size:22px">
            {localize("autoanimations.menus.options")}
        </h2>
        <div class="aa-options">
            <!--Set Z-Index-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <button class="oldCheck" on:click={() => explosion02Below()}
                    >{explosion02AboveBelow}</button
                >
            </div>
            <!--Set the Scale of the Animation-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.scale")}</label>
                <input
                    type="number"
                    bind:value={explosion02Scale}
                    placeholder="1"
                />
            </div>
            <!--Set Number of times the animation plays-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.repeat")}</label>
                <input
                    type="number"
                    bind:value={explosion02Repeat}
                    placeholder="1"
                />
            </div>
            <!--Set delay between repeats-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for=""
                    >{localize("autoanimations.menus.repeat")}
                    {localize("autoanimations.menus.delay")}</label
                >
                <input
                    type="number"
                    bind:value={explosion02Delay}
                    placeholder="250"
                />
            </div>
        </div>
    </div>
    <SoundSettings audioPath="e02" {flagData} />
</div>
<div class="aaMenu-section" style="padding:5px">
    <div class="aa-preheader-section">
        <div class="aa-preheader">
            <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                <label for=""
                    >{localize("autoanimations.menus.addAfterImage")}/{localize(
                        "autoanimations.menus.video"
                    )}</label
                >
            </div>
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4;">
                <i
                    class="{enableAfterImage
                        ? 'fas fa-minus aa-red'
                        : 'fas fa-plus aa-green'} aaCenterToggle"
                    on:click={() => switchAfterImageEnable()}
                />
            </div>
        </div>
    </div>
    {#if enableAfterImage}
        <div class="aa-customAnim-container" transition:fade>
            <div class="form-group" style="grid-row: 1/2; grid-column: 1/5">
                <input
                    type="text"
                    bind:value={customPath}
                    class={customPath !== ""
                        ? "isPopulated"
                        : "isNotPopulated opacityText"}
                />
                <button
                    class="file-picker"
                    on:click|preventDefault={() => selectCustom()}
                    ><i class="fas fa-file-import fa-fw" /></button
                >
            </div>
        </div>
        <div class="aa-options">
            <!--Set Z-Index-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <button class="oldCheck" on:click={() => afterImageBelow()}
                    >{afterImageAboveBelow}</button
                >
            </div>
            <!--Persistent Setting-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for=""
                    >{localize("autoanimations.menus.persistence")}</label
                >
                <button on:click={() => switchPersistence()}
                    >{isPersistent}</button
                >
            </div>
            <!--Set the Scale of the Animation-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.scale")}</label>
                <input
                    type="number"
                    bind:value={afterImageScale}
                    placeholder="1"
                />
            </div>
            <!--Set Delay before Next Explosion-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.wait")}</label>
                <input type="number" bind:value={afterImageWait} step="0.01" />
            </div>
        </div>
    {/if}
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
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
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
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s;
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s;
    }
    .aa-preheader {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-gap: 5px;
        padding: 1px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-preheader label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
    .aa-preheader-section {
        border-bottom: 2px solid rgba(181 70 52);
        margin-right: 5%;
        margin-left: 5%;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
