import { initializeJB2APatreonDB }  from "./jb2a-patreon-database";
import { initializeJB2AFreeDB }     from "./jb2a-free-database";
import { JB2APATREONDB }            from "./jb2a-patreon-database";
import { JB2AFREEDB }               from "./jb2a-free-database";
import { dbMerge }                  from "./database-merge/dbMerge";
import { custom_error }             from "../constants/constants";

export let aaDatabase;

export async function initializeAADB() {

    const freePath = "modules/JB2A_DnD5e";
    const patreonPath = "modules/jb2a_patreon";

    let s3Location = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aFreeFound = game.modules.get("JB2A_DnD5e");
    const jb2aPatreonFound = game.modules.get("jb2a_patreon");

    if (game.user.isGM && (!jb2aFreeFound && !jb2aPatreonFound)) {
        if (s3Location && (s3Location.includes('jb2a_patreon') || s3Location.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.error"));
        }
    }

    const freeVersion = jb2aFreeFound?.version ?? "";
    const patreonVersion = jb2aPatreonFound?.version ?? "";

    if (s3Location) {
        if (s3Location.includes('patreon')) {
            await initializeJB2APatreonDB(s3Location);
            aaDatabase = JB2APATREONDB;
            await dbMerge.handle("", patreonVersion, s3Location);
            // Otherwise if the S3 Location includes the Free path intialize that DB and merge accordingly
        } else if (s3Location.includes('JB2A_DnD5e')) {
            await initializeJB2AFreeDB(s3Location)
            aaDatabase = JB2AFREEDB;
            await dbMerge.handle(freeVersion, "", s3Location)
        } else {
            await initializeJB2APatreonDB(s3Location);
            aaDatabase = JB2APATREONDB;
            custom_error("You have specified an External path (S3 Bucket or other) incorrectly", true)
        }
    } else if (!patreonVersion && !freeVersion) {
        await initializeJB2AFreeDB(freePath)
    } else {
        if (jb2aPatreonFound) {
            await initializeJB2APatreonDB(patreonPath);
            aaDatabase = JB2APATREONDB;
        } else {
            await initializeJB2AFreeDB(freePath)
            aaDatabase = JB2AFREEDB;
        }
        await dbMerge.handle(freeVersion, patreonVersion);
    }

    // Register aaDatabase with Sequencer
    Sequencer.Database.registerEntries("autoanimations", aaDatabase, true);
    console.log('%cAutomated Animations Database has been compiled and registered', 'color: green', {aaDatabase})
    Hooks.callAll('aa.ready', aaDatabase)
}

export async function sortDatabase(database, isPatreon = false) {

    if (isPatreon) { 
        return await removeFreeMarker(database);
    }
    await clearTypes();
    await clearAnimations();
    await clearVariants();
    await clearColor();

    return database;
    
    async function clearTypes() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let freeOptions = database[section]._free;
            if (!freeOptions) { continue }
            await removePatreonType(freeOptions, section)
        }
    }

    async function removePatreonType(freeOptions, section) {
        let types = Object.keys(database[section]);
        for (let i = 0; i < types.length; i++) {
            let typeFound = freeOptions.indexOf(types[i])
            if (typeFound === -1) {
                delete database[section][types[i]]
            }
        }
    }

    async function clearAnimations() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let freeOptions = database[section][type]._free;
                if (!freeOptions) { continue }
                await removePatreonAnimation(freeOptions, section, type)
            }
        }
    }

    async function removePatreonAnimation(freeOptions, section, type) {
        let animations = Object.keys(database[section][type]);
        for (let i = 0; i < animations.length; i++) {
            let animationFound = freeOptions.indexOf(animations[i]);
            if (animationFound === -1) {
                delete database[section][type][animations[i]]
            }
        }
    }

    async function clearVariants() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(database[section][type]);
                for (let animation of animations) {
                    let freeOptions = database[section][type][animation]._free;
                    if (!freeOptions) { continue }
                    await removePatreonVariant(freeOptions, section, type, animation)
                }
            }
        }
    }

    async function removePatreonVariant(freeOptions, section, type, animation) {
        let variants = Object.keys(database[section][type][animation]);
        for (let i = 0; i < variants.length; i++) {
            let variantFound = freeOptions.indexOf(variants[i]);
            if (variantFound === -1) {
                delete database[section][type][animation][variants[i]]
            }
        }
    }

    async function clearColor() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(database[section][type]);
                for (let animation of animations) {
                    let variants = Object.keys(database[section][type][animation]);
                    for (let variant of variants) {
                        let freeOptions = database[section][type][animation][variant]._free;
                        if (!freeOptions) { continue }
                        await removePatreonColor(freeOptions, section, type, animation, variant)
                    }
                }
            }
        }
    }

    async function removePatreonColor(freeOptions, section, type, animation, variant) {
        let colors = Object.keys(database[section][type][animation][variant]);
        for (let i = 0; i < colors.length; i++) {
            let colorFound = freeOptions.indexOf(colors[i]);
            if (colorFound === -1) {
                delete database[section][type][animation][variant][colors[i]]
            }
        }
    }

}

async function removeFreeMarker(database) {
    await clearTypes();
    await clearAnimations();
    await clearVariants();
    await clearColor();

    return database;
    
    async function clearTypes() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            await removePatreonType(section)
        }
    }

    async function removePatreonType(section) {
        let types = Object.keys(database[section]);
        for (let i = 0; i < types.length; i++) {
            delete database[section]._free
        }
    }

    async function clearAnimations() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                await removePatreonAnimation(section, type)
            }
        }
    }

    async function removePatreonAnimation(section, type) {
        let animations = Object.keys(database[section][type]);
        for (let i = 0; i < animations.length; i++) {
            delete database[section][type]._free
        }
    }

    async function clearVariants() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(database[section][type]);
                for (let animation of animations) {
                    await removePatreonVariant(section, type, animation)
                }
            }
        }
    }

    async function removePatreonVariant(section, type, animation) {
        let variants = Object.keys(database[section][type][animation]);
        for (let i = 0; i < variants.length; i++) {
            delete database[section][type][animation]._free
        }
    }

    async function clearColor() {
        let sections = Object.keys(database);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(database[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(database[section][type]);
                for (let animation of animations) {
                    let variants = Object.keys(database[section][type][animation]);
                    for (let variant of variants) {
                        await removePatreonColor(section, type, animation, variant)
                    }
                }
            }
        }
    }

    async function removePatreonColor(section, type, animation, variant) {
        let colors = Object.keys(database[section][type][animation][variant]);
        for (let i = 0; i < colors.length; i++) {
            delete database[section][type][animation][variant]._free
        }
    }
}