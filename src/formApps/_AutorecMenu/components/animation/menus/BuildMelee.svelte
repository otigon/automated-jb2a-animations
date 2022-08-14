<script>
import VideoSelect from "./components/VideoSelect.svelte";
import MeleeOptions from "./components/options/MeleeOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";
import Explosion from "./components/Explosion.svelte";
import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

export let animation

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")
</script>

<div>
    <div class="aa-section-border">
    <VideoSelect {animation} section="primary" {title}/>
    <MeleeOptions {animation}/>
    <SoundSettings {animation} section="primary"/>
    </div>
    <Explosion {animation} section="explosion"/>
</div>

<style lang='scss'>

</style>