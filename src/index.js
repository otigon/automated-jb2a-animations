// Initilize the A-A Database
import { initializeAADB }                 from "./database/databaseSort.js";

// Accessible to users
import { AutoAnimations}                from "./system-support/external.js"
import { AAAutorecManager }             from "./formApps/_AutorecMenu/components/category/menuManager/AAAutorecManager.js";
import { playAnimation }                from "./system-support/external.js";

// Register all active effect Hooks
import { registerActiveEffectHooks }    from "./active-effects/handleActiveEffectHooks";

// Animation Menus for Items and Active Effects
import AEMenuApp                        from "./formApps/_ActiveEffects/AEMenuApp.js";
import ItemMenuApp                      from "./formApps/_ItemMenu/ItemMenuApp.js";
// Show Autorec menu via macro with Hooks.call('AutomaticAnimations.Open.Menu.New')
import { showAutorecMenu }              from "./formApps/_AutorecMenu/showUI.js";

// Register Socketlib settings for creating and removing Tiles as GM
import { setupSocket }                  from "./socketset.js";

// Migration scripts for Item/Active Effect and Autorec
import { flagMigrations }               from "./mergeScripts/items/itemFlagMerge.js";
import { autoRecMigration }             from "./mergeScripts/autorec/autoRecMerge.js";

// Animation State setting for if Animations are disabled from within A-A
import { AnimationState }               from "./AnimationState.js";

// Initialize all game settings
import { gameSettings }                 from "./gameSettings.js";

// Initializes Autorec stores
import { autoRecStores }                from "./formApps/_AutorecMenu/store/AutoRecStores.js";

// Routing for registering Hooks to run animations
import * as systemSupport               from "./system-support/index.js"

import "../styles/newMenuCss.scss";

// MAP for caching Deleted items. Specifically for items that delete themselves on final usage so Animations can still play
import { aaDeletedItems }               from "./deletedItems.js";

Hooks.once('socketlib.ready', function () {
    setupSocket();
});

export let aaDatabase;
// Hook for macro to open Autorec Menu
Hooks.on('AutomaticAnimations.Open.Menu.New',() => showAutorecMenu());

// Resets all Autorec menus
Hooks.on('AutomaticAnimations.Clear.Data', async () => {
    AAAutorecManager.restoreDefault()
});

// Places the A-A button on Item sheet header
Hooks.on(`renderItemSheet`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const pf2eRuleTypes = ['condition', 'effect'];
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(async ev => {
        await flagMigrations.handle(app.document);
        // if this is a PF1 "Buff" effect or PF2e Ruleset Item (Active Effects) spawn the Active Effect menu. Otherwise continue as normal
        if ((game.system.id === 'pf1' && app.item?.type === 'buff') || (game.system.id === 'pf2e' && pf2eRuleTypes.includes(app.item?.type))) {
            new AEMenuApp(app.document, {}).render(true, { focus: true });
        } else {
            new ItemMenuApp(app.document, {}).render(true, { focus: true });
        }
    });

    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);

});

/**
 * WORK IN PROGRESS - NOT READY FOR WIDE USE
 * Required
 * @param {Object} token // The token using the Item
 * @param {Object} item // The Item being used
 * 
 * Optional
 * @param {Object} options // Options to pass thru to Automated Animations include:
 * Options List
 * @param {Array/Set} targets // Array or Set of user Targets. Otherwise this will default to game.user.targets
 * @param {Array/Set} hitTargets // Array or Set of user Targets. Otherise this defaults to game.user.targets
 * @param {Boolean} playOnMiss // If True, targets not in the "Hit Targets" list will have the animation "miss" the token
 * @param {Objects} templateData // If the item includes a template placed on the canvas, pass that object thru options
 *  
 */
Hooks.on("aa.workflow", async (token, item, options) => {
    playAnimation(token, item, options)
})

// Places the A-A button on Active Effect sheet header
Hooks.on(`renderActiveEffectConfig`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(async ev => {
        await flagMigrations.handle(app.document, {isActiveEffect: true});
        new AEMenuApp(app.document, {}).render(true, { focus: true });
    });
    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);
});

Hooks.on('aa.initialize', async () => {
    //const patreonPath = "modules/jb2a_patreon";
    //const freePath = "modules/JB2A_DnD5e";

    const s3Location = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aPatreonFound = game.modules.get("jb2a_patreon");
    const jb2aFreeFound = game.modules.get("JB2A_DnD5e");

    if (game.user.isGM && (!jb2aFreeFound && !jb2aPatreonFound)) {
        if (s3Location && (s3Location.includes('jb2a_patreon') || s3Location.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.error"));
        }
    }
    initializeAADB()

    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        AnimationState.enabled = false;
    }
})

Hooks.once('ready', async function () {
    gameSettings.initialize();

    // Initializes all AutoRecStores backed by individual game settings.
    autoRecStores.initialize();

    // Check if the Autorec menu requires merge scripts to run
    handleAutorec();

    // Cache deleted items
    Hooks.on("deleteItem", async (item) => {storeDeletedItems(item)})

    /**
     * Officially Supported Systems:
     * DnD 5e
     * Pathfinder 2e
     * Pathfinder 1
     * Advanced 5e
     * Alien RPG
     * CypherSystem
     * DnD 3.5
     * Dungeon Crawl Clasics
     * Shadow of the Demonlord
     * Forbidden Lands
     * Starfinder RPG
     * Star Wars FFG
     * Star Wars 5e
     * SWADE
     * Warhammer Fantasy RPG
     * Old School Essentials
     * Cyberpunk Red (Only for Attacks)
     * The Witcher RPG
     * TwoDSix
    */

    // Register Hooks by system
    const systemIdClean = game.system.id.replace(/\-/g, '');
    systemSupport[systemIdClean] ? systemSupport[systemIdClean].systemHooks() : systemSupport.standard.systemHooks();

    registerActiveEffectHooks();
    
    handleTemplates();

    Hooks.callAll("aa.initialize")
});

function storeDeletedItems(item) {
    aaDeletedItems.set(item.id, item)
}

function handleAutorec() {
    let versionCheck = game.settings.get('autoanimations', 'aaAutorec').version;
    let currentVersion = Object.keys(autoRecMigration.migrations).map((n) => Number(n)).reverse()[0];

    // Version 5 and up uses a different game setting per menu
    if (versionCheck < 5) {
        let oldData = game.settings.get('autoanimations', 'aaAutorec');
        autoRecMigration.handle(oldData, {shouldSubmit: true, submitAll: true});
    } else if (versionCheck < currentVersion) {
        console.warn("Automated Animations | Updating Global Automatic Recognition Menu");
        autoRecMigration.handle(null, {shouldSubmit: true, submitAll: true, newSchema: true});
    }
}

window.AutoAnimations = AutoAnimations;
window.AutomatedAnimations = {
    AutorecManager: AAAutorecManager,
    playAnimation: (sourceToken, item, options = {}) => playAnimation(sourceToken, item, options),
}


function handleTemplates() {

    let templatesGridHidden = game.settings.get('autoanimations', 'hideTemplateGrid');
    // Settings for showing the Template Grid Highlight whilst hovering in the Template Layer
    if (templatesGridHidden === "templateLayer") {
        if (game.modules.get('tokenmagic')?.active && game.settings.get("tokenmagic", "defaultTemplateOnHover")) { } else {
            removeGridHighlightsOnLoad();
            Hooks.on("canvasReady", async () => {
                removeGridHighlightsOnLoad()
            });
            Hooks.on("createMeasuredTemplate", (template) => {
                canvas.grid.getHighlightLayer(`MeasuredTemplate.${template.id}`).visible = false;
            });
            Hooks.on('hoverMeasuredTemplate', (template, isHovered) => {
                canvas.grid.getHighlightLayer(`MeasuredTemplate.${template.id}`).visible = isHovered;
            })
        }
    }
    // Settings for showing the Template Grid Highlight whilst hovrering anywhere in the Template area
    if (templatesGridHidden === "full") {
        if (game.modules.get('tokenmagic')?.active && game.settings.get("tokenmagic", "defaultTemplateOnHover")) { } else {
            removeGridHighlightsOnLoad();
            canvasMouseEvent()
            Hooks.on("createMeasuredTemplate", (template) => {
                canvas.grid.getHighlightLayer(`MeasuredTemplate.${template.id}`).visible = false;
            });
            Hooks.on("canvasReady", async () => {
                removeGridHighlightsOnLoad()
                canvasMouseEvent()
            });
        }
    }

    // Removes the template Grid Highlighting on Canvas Load
    function removeGridHighlightsOnLoad() {
        let highlights = Object.keys(canvas.grid.highlightLayers);
        if (highlights.length) {
            highlights.forEach((e) => {
                if (e.startsWith("MeasuredTemplate")) {
                    canvas.grid.getHighlightLayer(e).visible = false
                }
            })
        }
    }

    // Code Adapted from Token Magic FX by Secretfire with permission, under GPL V3 (https://github.com/Feu-Secret/Tokenmagic/blob/master/LICENSE) to only show Template Grid Highlighting whilst hovering in the template area
    function canvasMouseEvent() {
        canvas.stage.on("mousemove", event => {
            const { x: templateX, y: templateY } = event.data.getLocalPosition(canvas.templates);
            for (let template of canvas.templates.placeables) {
                const highlight = canvas.grid.getHighlightLayer(`MeasuredTemplate.${template.id}`) ?? {};
                const { x: centerX, y: centerY } = template.center;
                const mouseInTemplate = template?.shape?.contains(templateX - centerX, templateY - centerY);
                highlight.visible = mouseInTemplate;
            }
        });
    }
}

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
//window.AAAutoRec = AAAutorecMenu;