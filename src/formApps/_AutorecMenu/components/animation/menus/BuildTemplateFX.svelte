<script>
import VideoSelect from "../components/VideoSelect.svelte";
import TemplateOptions from "../components/options/TemplateOptions.svelte";
import SoundSettings from "../components/SoundSettings.svelte";
import ExtraTarget from "../components/ExtraTarget.svelte";
import ExtraSource from "../components/ExtraSource.svelte";
import Secondary from "../components/Secondary.svelte";
import SectionButtons from "../components/SectionButtons02.svelte";
import Macro from "../components/Macro.svelte";
import SoundOnly from "../components/SoundOnly.svelte";

export let animation;
export let idx;
export let category;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

$: soundOnly = $animation.soundOnly.sound.enable;
$: macroEnabled = $animation.macro.enable;

</script>

<SectionButtons {animation} {category} {idx}/>
<div hidden={!soundOnly}>
    <SoundOnly {animation}/>
</div>
<div hidden={!macroEnabled}>
    <Macro {animation} {category} />
</div>
<div hidden={soundOnly}>
    <ExtraSource {animation} {idx} {category}/>
    <div class="aa-primary-border">
    <VideoSelect {animation} section="primary" {title} {idx} {category}/>
    <TemplateOptions {animation} {category} />
    <SoundSettings {animation} {category} {idx} section="primary"/>
    </div>
    <Secondary {animation} {idx} {category} />
    <ExtraTarget {animation} {idx} {category}/>
</div>

<style lang='scss'>

</style>