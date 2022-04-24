<script>
    import { menuDBPathSourceFX, customCheckedSourceFX, customFilePathSourceFX } from "../menuStore.js";
    import { getPreviewFile } from "./getPreviewFile.js"

    let dbPath;
    menuDBPathSourceFX.subscribe((value) => {
        dbPath = value;
    });
    let isCustom;
    customCheckedSourceFX.subscribe((value) => {
        isCustom = value;
    })
    let customPath;
    customFilePathSourceFX.subscribe((value) => {
        customPath = value;
    })

    $: databaseFile = getPreviewFile(dbPath);

    $: filePath = isCustom ? customPath : databaseFile;
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
