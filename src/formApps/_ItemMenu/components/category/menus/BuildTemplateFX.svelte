<script>
import VideoSelect from "../../../../_AutorecMenu/components/animation/components/VideoSelect.svelte";
import TemplateOptions from "../../../../_AutorecMenu/components/animation/components/options/TemplateOptions.svelte";
import SoundSettings from "../../../../_AutorecMenu/components/animation/components/SoundSettings.svelte";
import ExtraTarget from "../../../../_AutorecMenu/components/animation/components/ExtraTarget.svelte";
import ExtraSource from "../../../../_AutorecMenu/components/animation/components/ExtraSource.svelte";
import Secondary from "../../../../_AutorecMenu/components/animation/components/Secondary.svelte";
import SectionButtons from "../../../../_AutorecMenu/components/animation/components/SectionButtons02.svelte";
import Macro from "../../../../_AutorecMenu/components/animation/components/Macro.svelte";
import SoundOnly from "../../../../_AutorecMenu/components/animation/components/SoundOnly.svelte";

export let animation;
export let idx = 0;
export let category;

let title = game.i18n.localize("autoanimations.menus.primary") + " " + game.i18n.localize("autoanimations.menus.animation")

$: soundOnly = $animation.soundOnly.sound.enable;
$: macroEnabled = $animation.macro.enable;

</script>

<SectionButtons {animation} {category} {idx} type="item"/>
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