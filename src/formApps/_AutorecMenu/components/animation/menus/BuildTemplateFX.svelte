<script>
import VideoSelect from "./components/VideoSelect.svelte";
import TemplateOptions from "./components/options/TemplateOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";
import ExtraTarget from "./components/ExtraTarget.svelte";
import ExtraSource from "./components/ExtraSource.svelte";

export let animation;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

</script>

<div>
    <ExtraSource {animation} />
    <div class="aa-section-border">
    <VideoSelect {animation} section="primary" {title}/>
    <TemplateOptions {animation}/>
    <SoundSettings {animation} section="primary"/>
    </div>
    <ExtraTarget {animation} />
</div>

<style lang='scss'>

</style>