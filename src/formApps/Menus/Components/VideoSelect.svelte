<script>
    import { localize } from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    import CustomPicker from "./CustomPicker.svelte";
    import SectionHeader from "./SectionHeader.svelte";

    //export let animation;
    export let section;
    export let section02 = "video";
    export let title;
    //export let idx;
    //export let category;

    let { animation, category, idx } = getContext('animation-data');

    function typeUpdate() {
        $animation[section][section02].animation = category.animationMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][0][0];
        $animation[section][section02].variant = category.variantMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][$animation[section][section02].animation][0][0];
        $animation[section][section02].color = category.colorMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][$animation[section][section02].animation][$animation[section][section02].variant][0][0];
    }
    function animationUpdate() {
        $animation[section][section02].variant = category.variantMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][$animation[section][section02].animation][0][0];
        $animation[section][section02].color = category.colorMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][$animation[section][section02].animation][$animation[section][section02].variant][0][0];
    }
    function variantUpdate() {
        $animation[section][section02].color = category.colorMenu[$animation[section][section02].dbSection][$animation[section][section02].menuType][$animation[section][section02].animation][$animation[section][section02].variant][0][0];
    }

    $: dbSection = $animation[section][section02].dbSection;
    $: menuType = $animation[section][section02].menuType;
    $: anim = $animation[section][section02].animation;
    $: variant = $animation[section][section02].variant;

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
                            //await category.menuTypeChange(section, idx, section02, dbSection)
                            typeUpdate()
                        }
                    >
                        {#each category.typeMenu[$animation[section][section02].dbSection] ?? [] as [key, name]}
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
                                //await category.animationChange(section, idx, section02, dbSection)
                                animationUpdate()
                            }
                    >
                        {#each category.animationMenu[dbSection]?.[menuType] ?? [] as [key, name]}
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
                                //await category.variantChange(section, idx, section02, dbSection)
                                variantUpdate()
                            }
                    >
                        {#each category.variantMenu[dbSection]?.[menuType]?.[anim] ?? [] as [key, name]}
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
                        {#each category.colorMenu[dbSection]?.[menuType]?.[anim]?.[variant] ?? [] as [key, name]}
                            <option value={key}>{name}</option>
                        {/each}
                    </select>
                </div>
            </td>
        </tr>
    </table>
</div>
<CustomPicker {section} {section02} />

<style lang="scss">
</style>
