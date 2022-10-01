// Initilize the A-A Database
import { initializeJB2APatreonDB }      from "./database/jb2a-patreon-database.js";
import { initializeJB2AFreeDB }         from "./database/jb2a-free-database.js";
import { JB2APATREONDB }                from "./database/jb2a-patreon-database.js";
import { JB2AFREEDB }                   from "./database/jb2a-free-database.js";

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
import { initSettings }                 from "./initSettings.js";
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

// Hook for macro to open Autorec Menu
Hooks.on('AutomaticAnimations.Open.Menu.New',() => showAutorecMenu());

// Resets all Autorec menus
Hooks.on('AutomaticAnimations.Clear.Data', async () => {
    await game.settings.set("autoanimations", "aaAutorec", void 0);
    await game.settings.set("autoanimations", "aaAutorec-aefx", void 0);
    await game.settings.set("autoanimations", "aaAutorec-aura", void 0);
    await game.settings.set("autoanimations", "aaAutorec-melee", void 0);
    await game.settings.set("autoanimations", "aaAutorec-preset", void 0);
    await game.settings.set("autoanimations", "aaAutorec-range", void 0);
    await game.settings.set("autoanimations", "aaAutorec-ontoken", void 0);
    await game.settings.set("autoanimations", "aaAutorec-templatefx", void 0);
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

// Registers Database with Sequencer
Hooks.on("aa.initialize", async () => {

    const s3Check = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aPatreonFound = moduleIncludes("jb2a_patreon");
    //const jb2aFreeFound = moduleIncludes("JB2A_DnD5e");
    let jb2aPath = game.settings.get('autoanimations', 'jb2aLocation');
    let s3Patreon;

    if (!jb2aPath || jb2aPath === "null") {
        if (jb2aPatreonFound) {
            jb2aPath = 'modules/jb2a_patreon'
        } else {
            jb2aPath = 'modules/JB2A_DnD5e'
        }
    } else {
        if (jb2aPath.includes('patreon')) {
            s3Patreon = true;
        }
    }
    /*
    if (moduleIncludes("jb2a_patreon")) {
        await initializeJB2APatreonDB(jb2aPath)
    } else {
        await initializeJB2AFreeDB(jb2aPath)
    }
    */
    let obj01;
    if (jb2aPatreonFound || s3Patreon) {
        await initializeJB2APatreonDB(jb2aPath)
        obj01 = JB2APATREONDB;
    } else {
        await initializeJB2AFreeDB(jb2aPath)
        obj01 = JB2AFREEDB;
    }

    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        if (s3Check && (s3Check.includes('jb2a_patreon') || s3Check.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.error"));
        }
    }

    Sequencer.Database.registerEntries("autoanimations", obj01, true);
    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        AnimationState.enabled = false;
    }
    Hooks.callAll('aa.ready', obj01)
});

Hooks.once('ready', async function () {
    initSettings(gameSettings);

    // Initializes all AutoRecStores backed by individual game settings.
    autoRecStores.initialize();

    // Check if the Autorec menu requires merge scripts to run
    handleAutorec();

    // Cache deleted items
    Hooks.on("deleteItem", async (item) => {storeDeletedItems(item)})

    // Register Hooks by system
    if (game.modules.get("midi-qol")?.active) {
        systemSupport.midiqol.systemHooks();
    } else {
        systemSupport[game.system.id] ? systemSupport[game.system.id].systemHooks() : systemSupport.standard.systemHooks();
        /*
        switch (game.system.id) {
            case "dnd5e":
                systemSupport.dnd5e.dnd5eHooks();
                break;
            case "sw5e":
                systemSupport.sw5e.sw5eHooks();
                break;
            case "demonlord":
                systemSupport.demonlord.demonlordHooks();
                break;
            case "pf2e":
                systemSupport.pf2e.pf2eHooks();
                break;
            case "sfrpg":
                systemSupport.sfrpg.sfrpgHooks();
                break;
            case "swade":
                systemSupport.swade.swadeHooks();
                break;
            case "wfrp4e":
                systemSupport.wfrpg.wfrp4eHooks();
                break;
            case 'dcc':
                systemSupport.dcc.dccHooks();
                break;
            default:
                systemSupport.standard.standardHook();
        }
        */
    }

    registerActiveEffectHooks();

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
    PlayAnimation: (data) => playAnimation(data),
}

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
//window.AAAutoRec = AAAutorecMenu;
