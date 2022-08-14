<script>
import VideoSelect from "./components/VideoSelect.svelte";
import AuraOptions from "./components/options/AuraOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";
import ExtraSource from "./components/ExtraSource.svelte";

export let animation;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

</script>

<div>
    <ExtraSource {animation} />
    <div class="aa-section-border">
    <VideoSelect {animation} section="primary" {title}/>
    <AuraOptions {animation}/>
    <SoundSettings {animation} section="primary"/>
    </div>
</div>

<style lang='scss'>

</style>