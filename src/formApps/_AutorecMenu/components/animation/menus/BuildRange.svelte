<script>
import VideoSelect from "./components/VideoSelect.svelte";
import RangeOptions from "./components/options/RangeOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";
import Explosion from "./components/Explosion.svelte";
import ExtraTarget from "./components/ExtraTarget.svelte";
import ExtraSource from "./components/ExtraSource.svelte";

export let animation;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

</script>

<div>
    <ExtraSource {animation} />
    <div class="aa-section-border">
    <VideoSelect {animation} section="primary" {title}/>
    <RangeOptions {animation}/>
    <SoundSettings {animation} section="primary"/>
    </div>
    <Explosion {animation} section="explosion"/>
    <ExtraTarget {animation} />
</div>

<style lang='scss'>

</style>