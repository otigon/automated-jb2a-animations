<svelte:options accessors={true} />

<script>
import PrimarySection from "../ItemMenu/components/primarySection.svelte";
import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte"

export let flagData;
$: flagData = flagData;
const meleeSections = flagData.melee;
console.log(meleeSections)
flagData.explosions = {};

</script>

<div>

{#each Object.entries(meleeSections) as section, i}
<div class="aaMenu-section">
    {i}
    <ChooseAnimation {flagData} flagPath="explosions" animType="static"/>
</div>
{/each}


</div>

<style lang='scss'>
.aaMenu-section {
    background: rgba(199, 199, 199, 0.85);
    border: 2px solid black;
    border-radius: 10px;
    margin: 1.5% 3% 1.5% 3%;
}
</style>