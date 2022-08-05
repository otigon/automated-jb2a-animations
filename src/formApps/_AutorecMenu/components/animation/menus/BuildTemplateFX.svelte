<script>
import VideoSelect from "./components/VideoSelect.svelte";
import RangeOptions from "./components/options/RangeOptions.svelte";
import SoundSettings from "./components/SoundSettings.svelte";

export let animation
</script>

<div>
    <VideoSelect {animation} section="primary"/>
    <RangeOptions {animation}/>
</div>

<style lang='scss'>

</style>