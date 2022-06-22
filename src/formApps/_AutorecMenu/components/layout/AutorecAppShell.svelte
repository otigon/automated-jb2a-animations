<svelte:options accessors={true} />

<script>
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    import CategorySelect from "./CategorySelect.svelte";

    export let elementRoot;

    const stylesContent = {
       background: "rgba(125, 125, 125, 0.75)",
       padding: "0"
    }
</script>

<ApplicationShell bind:elementRoot {stylesContent}>
    <CategorySelect />
</ApplicationShell>

<style lang="scss">
    //.aa-casubmit {
    //    background-color: rgb(115, 115, 115, 0.6);
    //}
    //.aa-snclose {
    //    background-color: rgb(140, 140, 140, 0.5);
    //}
    //.aa-manageMenu {
    //    background-color: rgba(219, 132, 2, 0.4);
    //}
    //.aa-addSection {
    //    background-color: rgba(25, 175, 2, 0.4);
    //}
    //.aaTopSection {
    //    position: absolute;
    //    top: 30px;
    //    left: 0;
    //    right: 0;
    //    border: 2px solid black;
    //    background: rgba(199, 199, 199, 0.85);
    //}
    //.aaMidSection {
    //    position: absolute;
    //    left: 0;
    //    right: 0;
    //    top: 100px;
    //    bottom: 85px;
    //    overflow: scroll;
    //}
    //.aaBottomSection {
    //    position: absolute;
    //    bottom: 0;
    //    left: 0;
    //    right: 0;
    //    margin-right: 2%;
    //    margin-left: 2%;
    //    background: rgb(204, 204, 204);
    //    border: 2px solid black;
    //    border-radius: 10px;
    //}
    //.aa-submit {
    //    display: grid;
    //    grid-template-columns: 49.5% 49.5%;
    //    grid-gap: 1%;
    //    padding: 5px;
    //    align-items: center;
    //    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    //    font-size: large;
    //    font-weight: bold;
    //}
    //.aa-submit button {
    //    border-radius: 10px;
    //    border: 2px outset #dddddd;
    //    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    //    font-weight: bold;
    //    font-size: large;
    //}
    //.box {
    //    margin-bottom: 50px;
    //}
    //.aa-autorec-tabs {
    //    display: flex;
    //    flex-direction: row;
    //    flex-wrap: nowrap;
    //    justify-content: space-around;
    //    height: auto;
    //    background: rgba(199, 199, 199, 0.85);
    //    //border-radius: 10px;
    //    align-items: center;
    //    padding-top: 5px;
    //    color: rgb(50, 50, 50);
    //}
    //li {
    //    margin-bottom: -1px;
    //    height: 30px;
    //    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    //    font-size: large;
    //    font-weight: bold;
    //    vertical-align: middle;
    //}
    //span {
    //    border: 1px solid transparent;
    //    border-top-left-radius: 0.25rem;
    //    border-top-right-radius: 0.25rem;
    //    display: block;
    //    cursor: pointer;
    //}
    //
    //li.active > span {
    //    text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    //}
    //.aa-nameField:hover {
    //    text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    //}
    //.aaMenu-section {
    //    background: rgba(199, 199, 199, 0.85);
    //    border: 2px solid black;
    //    border-radius: 10px;
    //    margin: 2px 0 2px 0;
    //}
    //.aa-nameField {
    //    background-color: rgba(210, 210, 210, 0.75);
    //    border: 1.5px outset rgba(0, 0, 0, 0.5);
    //    border-radius: 13px;
    //    text-align: center;
    //    font-weight: bold;
    //    font-size: large;
    //    color: black;
    //}
    //.aa-nameField:placeholder-shown {
    //    opacity: 0.4;
    //}
    //.aa-sort:hover {
    //    text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    //}
    //.aa-sort {
    //    color: black;
    //    font-size: 12.25px;
    //}
    //.aa-zoom:hover {
    //    transform: scale(1.1);
    //}
</style>
