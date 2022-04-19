<script>
import { JB2APATREONDB } from "../../../animation-functions/databases/jb2a-patreon-database.js";
import { aaColorMenu } from "../../../animation-functions/databases/jb2a-menu-options.js";

export let menuSelection;
//$: menuSelection = menuSelection;
export let menuType;
//$: menuType = menuType;
export let animation;
//$: animation = animation;
export let variant;
//$: variant = variant;
export let color;
//$: color = color;
export let customPath;
//$: customPath;
export let isCustom;
//$: isCustom;
let jb2a = JB2APATREONDB
let filteredColor;
let filePath;
if (isCustom) {
    filePath = customPath;
} else {
    filteredColor = color === "random" ? Object.keys(aaColorMenu[menuSelection][menuType][animation][variant])[0] : color;
    switch (true) {
        case menuSelection === 'range':
            try { filePath = jb2a[menuSelection][menuType][animation][variant][filteredColor][Object.keys(jb2a[menuSelection][menuType][animation][variant][filteredColor])[1]][0] }
            catch (exception) {}
            break;
        default:
            try { filePath = jb2a[menuSelection][menuType][animation][variant][filteredColor][0] }
            catch (exception) {}
    }
}

</script>

<video class="aaVideoPreview" src={filePath} autoplay="autoplay" controls loop> <track kind="captions"> </video>


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
    background: #363636
}

</style>