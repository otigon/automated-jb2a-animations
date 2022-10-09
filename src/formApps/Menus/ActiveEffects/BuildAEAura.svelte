<script>
import VideoSelect from "../Components/VideoSelect.svelte";
import AuraOptions from "./options/AuraOptions.svelte";
import SoundSettings from "../Components/SoundSettings.svelte";
import ExtraSource from "../Components/ExtraSource.svelte";
import Secondary from "../Components/Secondary.svelte";
import AuraEffects from "../../Menus/Components/options/AuraEffects.svelte";

export let animation;
export let idx = 0;
export let category;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

</script>

    <ExtraSource {animation} {idx} {category}/>
    <div class="aa-primary-border">
    <VideoSelect {animation} section="primary" {title} {idx} {category}/>
    <AuraOptions {animation} />
    <AuraEffects {animation} />
    <SoundSettings {animation} {category} {idx} section="primary"/>
    </div>
    <Secondary {animation} {idx} {category} />

<style lang='scss'>

</style>
