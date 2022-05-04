<script>
     import { fade } from "svelte/transition";

    export let items = [];
    export let activeTabValue = 1;
    export let flagData;
    const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div class="aa-autorec-header">
    {#each items as item}
        <li class="{activeTabValue === item.value ? 'active' : ''} flexrow">
            <span on:click={handleClick(item.value)}
                ><i class={item.icon} />{item.label}</span
            >
        </li>
    {/each}
</div>
{#each items as item}
    {#if activeTabValue == item.value}
        <div class="box" transition:fade={{duration:500}}>
            <svelte:component this={item.component} {flagData}/>
        </div>
    {/if}
{/each}

<style>
    .box {
        margin-bottom: 50px;
    }
    .aa-autorec-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        height:auto;
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        align-items: center;
        padding-top:5px;
    }
    li {
        margin-bottom: -1px;
        height: 30px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        vertical-align: middle;
    }

    span {
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        display: block;
        cursor: pointer;
    }

    span:hover {
        border-color: #e9ecef #e9ecef #dee2e6;
    }

    li.active > span {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    }
</style>
