<script>
import VideoSelect from "../Components/VideoSelect.svelte";
import AuraOptions from "./options/AuraOptions.svelte";
import SoundSettings from "../Components/SoundSettings.svelte";
import ExtraSource from "../Components/ExtraSource.svelte";
import Secondary from "../Components/Secondary.svelte";
import AuraEffects from "../../Menus/Components/options/AuraEffects.svelte";
//import { getContext }   from "svelte";

//export let animation;
//export let idx = 0;
//export let category;
//let { animation , category, idx} = getContext('animation-data');

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

</script>

    <ExtraSource />
    <div class="aa-primary-border">
    <VideoSelect section="primary" {title} />
    <AuraOptions />
    <AuraEffects />
    <SoundSettings section="primary"/>
    </div>
    <Secondary />

<style lang='scss'>

</style>
