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
 
    $: dbSection = $animation[section][section02].dbSection;
    $: menuType = $animation[section][section02].menuType;
    $: anim = $animation[section][section02].animation;
    $: variant = $animation[section][section02].variant;

/*
                <label
                for=""
                on:click={() => category.databaseToClipboard(section, idx, section02, dbSection)}
                style="align-self: center; position:relative; bottom: -10px;font-size:large;"
                title="Copy Database Path"
                >{localize("autoanimations.menus.copy")} DB {localize(
                    "autoanimations.menus.path"
                )}
                <i
                    class="fas fa-database aa-zoom aa-blue aa-disableOpacity"
                /></label
                >
                <div id="clipboard" />

*/
</script>

<SectionHeader {title} />
<div class="aaSelect">
    <table class="aaMenu {$animation[section][section02].enableCustom ? 'aa-disableOpacity' : ""}">
        <tr>
            <td>
            </td>
            <td>
                <!--Type Menu-->
                <div>
                    <label for="">{localize("autoanimations.menus.type")}</label>
                </div>
                <div class="flexcol">
                    <select
                        bind:value={$animation[section][section02].menuType}
                        on:change={async () =>
                            await category.menuTypeChange(section, idx, section02, dbSection)}
                    >
                        {#each category.typeMenu[$animation[section][section02].dbSection] as [key, name]}
                            <option value={key}>{name}</option>
                        {/each}
                    </select>
                </div>
            </td>
            <td>

            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <label for="">{localize("autoanimations.menus.animation")}</label>
                </div>
                <div class="flexcol">
                    <select
                        bind:value={$animation[section][section02].animation}
                        on:change={async () =>
                            await category.animationChange(section, idx, section02, dbSection)}
                    >
                        {#each category.animationMenu[dbSection][menuType] as [key, name]}
                            <option value={key}>{name}</option>
                        {/each}
                    </select>
                </div>
            </td>
            <td>
                <!--Variant Menu-->
                <div>
                    <label for="">{localize("autoanimations.menus.variant")}</label>
                </div>
                <div class="flexcol">
                    <select
                        bind:value={$animation[section][section02].variant}
                        on:change={async () =>
                            await category.variantChange(section, idx, section02, dbSection)}
                    >
                        {#each category.variantMenu[dbSection][menuType][anim] as [key, name]}
                            <option value={key}>{name}</option>
                        {/each}
                    </select>
                </div>
            </td>
            <td>
                <!--Color Menu-->
                <div>
                    <label for="">{localize("autoanimations.menus.color")}</label>
                </div>
                <div class="flexcol">
                    <select bind:value={$animation[section][section02].color}>
                        {#each category.colorMenu[dbSection][menuType][anim][variant] as [key, name]}
                            <option value={key}>{name}</option>
                        {/each}
                    </select>
                </div>
            </td>
        </tr>
    </table>
</div>
<CustomPicker {animation} {section} {section02} {idx} {category} />

<style lang="scss">
</style>
