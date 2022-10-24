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
import { gameSettings }                 from "./gameSettings.js";

// Initializes Autorec stores
import { autoRecStores }                from "./formApps/_AutorecMenu/store/AutoRecStores.js";

// Routing for registering Hooks to run animations
import * as systemSupport               from "./system-support/index.js"

import "../styles/newMenuCss.scss";

// MAP for caching Deleted items. Specifically for items that delete themselves on final usage so Animations can still play
import { aaDeletedItems }               from "./deletedItems.js";

import { patreonMerge }                 from "./database/database-merge/patreonMerge.js";
import { freeMerge }                    from "./database/database-merge/freeMerge.js";

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
    const patreonPath = "modules/jb2a_patreon";
    const freePath = "modules/JB2A_DnD5e";

    const s3Location = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aPatreonFound = game.modules.get("jb2a_patreon");
    const jb2aFreeFound = game.modules.get("JB2A_DnD5e");

    if (game.user.isGM && (!jb2aFreeFound && !jb2aPatreonFound)) {
        if (s3Location && (s3Location.includes('jb2a_patreon') || s3Location.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.error"));
        }
    }

    // If an S3 Location is found in the Game Settings, run this. Otherwise continue to else section
    if (s3Location) {
        // If S3 includes the Patreon path, initialize the Patreon module and update to current installed version
        if (s3Location.includes('patreon')) {
            await initializeJB2APatreonDB(s3Location);
            await patreonMerge.handle(s3Location);
            aaDatabase = JB2APATREONDB;
            // Otherwise if the S3 Location includes the Free path intialize that DB and merge accordingly
        } else if (s3Location.includes('JB2A_DnD5e')) {
            await initializeJB2AFreeDB(s3Location)
            await freeMerge.handle(s3Location)
            aaDatabase = JB2AFREEDB;
        } else {
            await initializeJB2APatreonDB(s3Location);
            aaDatabase = JB2APATREONDB;
        }
    } else if (!jb2aFreeFound && !jb2aPatreonFound) {
        await initializeJB2APatreonDB(patreonPath);
        aaDatabase = JB2APATREONDB;
    } else {
        // If the Patreon module is found, initialize the Patreon DB
        // Run the DB thru the Merge function to update it to match their Patreon version
        // Set the aaDatabase to match
        if (jb2aPatreonFound) {
            await initializeJB2APatreonDB(patreonPath);
            await patreonMerge.handle(patreonPath);
        }
        // If the Free module is found, initialize the Free DB
        // Run the Free DB thru the merges to match current installed version
        if (jb2aFreeFound) {
            await initializeJB2AFreeDB(freePath)
            await freeMerge.handle(freePath)
        }
        // If BOTH the Free and Patreon version is found, Compare Versions
        // If FREE is Newer than Patreon, merge in the updated Free DB, without overwriting existing entries
        if (jb2aFreeFound && jb2aPatreonFound) {
            if (isNewerVersion(jb2aFreeFound.version, jb2aPatreonFound.version)) {
                foundry.utils.mergeObject(JB2APATREONDB, JB2AFREEDB, { overwrite: false })
            }
        }
        // Set the AA Database based on presence of the Patreon Module
        aaDatabase = jb2aPatreonFound ? JB2APATREONDB : JB2AFREEDB
    }

    // Register aaDatabase with Sequencer
    Sequencer.Database.registerEntries("autoanimations", aaDatabase, true);
    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        AnimationState.enabled = false;
    }
    console.log('%cAutomated Animations Database has been compiled and registered', 'color: green', {aaDatabase})
    Hooks.callAll('aa.ready', aaDatabase)
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
    */

    // Register Hooks by system
    const systemIdClean = game.system.id.replace(/\-/g, '');
    systemSupport[systemIdClean] ? systemSupport[systemIdClean].systemHooks() : systemSupport.standard.systemHooks();

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
    playAnimation: (sourceToken, item, options = {}) => playAnimation(sourceToken, item, options),
}

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
//window.AAAutoRec = AAAutorecMenu;
