<script>
    import { menuDBPath, customChecked, customFilePath } from "../menuStore.js";
    /*
export let menuSelection;
//$: menuSelection = menuSelection;
export let menuType;
//$: menuType = menuType;
export let animation;
//$: animation = animation;
export let variant;
//$: variant = variant;
    export let customPath;
    $: customPath;
    export let isCustom;
    $: isCustom;
*/
    let dbPath;
    menuDBPath.subscribe((value) => {
        dbPath = value;
    });
    let isCustom;
    customChecked.subscribe((value) => {
        isCustom = value;
    })
    let customPath;
    customFilePath.subscribe((value) => {
        customPath = value;
    })

    function getPreviewFile(data) {
        let seqFiles = Sequencer.Database.getEntry(data);
        if (Array.isArray(seqFiles)) {
            seqFiles = seqFiles[0].file;
            if (Array.isArray(seqFiles)) {
                return seqFiles[0].file;
            }
            if (isObject(seqFiles)) {
                if (Array.isArray(seqFiles["15ft"])) {
                    seqFiles = seqFiles["15ft"];
                    return seqFiles[0];
                }
                seqFiles = seqFiles["15ft"]
                return seqFiles[0];
            }
            return seqFiles;
        }
        if (isObject(seqFiles.file)) {
            if (Array.isArray(seqFiles.file["15ft"])) {
                seqFiles = seqFiles.file["15ft"];
                return seqFiles[0];
            }
            return seqFiles.file["15ft"];
        }
        return seqFiles.file;
        function isObject(test) {
            return typeof test === "object";
        }
    }

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
