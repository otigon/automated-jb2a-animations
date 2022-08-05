<script>
import VideoSelect from "./components/VideoSelect.svelte";
import MeleeOptions from "./components/options/MeleeOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";
import Explosion from "./components/Explosion.svelte";

export let animation
</script>

<div>
    <VideoSelect {animation} section="primary"/>
    <MeleeOptions {animation}/>
    <SoundSettings {animation} section="primary"/>
    <Explosion {animation} section="explosion"/>
</div>

<style lang='scss'>

</style>