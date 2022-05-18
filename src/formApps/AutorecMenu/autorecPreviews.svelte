<script>
    import { getPreviewFile } from "../ItemMenu/videoPreviews/getPreviewFile.js"
    import { storeAutorec, closePreviewWindow } from "./autorecPreviews.js";
    import { getContext } from "svelte";

    const { application } = getContext("external");

    export let idx;

    let closeNow = false;
    closePreviewWindow.subscribe((value) => {
        closeNow = value;
    });

    $: if (closeNow) {
        console.log("Set to True")
        application.close()
        closePreviewWindow.set(false)
    }
    $: if (!closeNow) {
        console.log("Set to False")
    }


    $: storeData = $storeAutorec[idx];

    $: databaseFile = getPreviewFile($storeAutorec[idx].primaryDatabasePath);

    $: filePath = storeData.customPath || databaseFile;
</script>

<video class="aaVideoPreview" src={filePath} autoplay="autoplay" controls loop>
    <track kind="captions" />
</video>

<style lang="scss">
    .aaVideoPreview {
        border: 3px inset #a1a1a1;
        border-radius: 30px;
        padding: 5px;
        margin-bottom: 5px;
        width: 345px;
        height: 345px;
        display: block;
        margin: 0 auto;
        background: #363636;
    }
</style>
