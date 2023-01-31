import { initializeJB2APatreonDB }  from "./jb2a-patreon-database";
import { JB2APATREONDB }            from "./jb2a-patreon-database";
import { dbMerge }                  from "./database-merge/dbMerge";

export let aaTestDatabase;

export async function initializeAADB() {

    const freePath = "modules/JB2A_DnD5e";
    const patreonPath = "modules/jb2a_patreon";

    let s3Location;// = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aFreeFound = game.modules.get("JB2A_DnD5e");
    const jb2aPatreonFound = game.modules.get("jb2a_patreon");

    if (game.user.isGM && (!jb2aFreeFound && !jb2aPatreonFound)) {
        if (s3Location && (s3Location.includes('jb2a_patreon') || s3Location.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.error"));
        }
    }

    let freeVersion = jb2aFreeFound?.version;
    let patreonVersion = jb2aFreeFound?.version;

    if (patreonVersion) {

    } else if (freeVersion) {

    } else {

    }

    if (s3Location) {

    } else {
        await initializeJB2APatreonDB(jb2aPatreonFound ? patreonPath : freePath);
        aaTestDatabase = JB2APATREONDB
        await cleanDB(jb2aPatreonFound ? true : false);
        //await dbMerge.handle(freeVersion, patreonVersion);
        //await cleanDB();
        console.log(aaTestDatabase)
    }


    async function cleanDB(isPatreon = false) {
        if (isPatreon) { return; }
        await clearTypes();
        await clearAnimations();
        await clearVariants();
        await clearColor();
    }

    async function clearTypes() {
        let sections = Object.keys(aaTestDatabase);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let freeOptions = aaTestDatabase[section]._free;
            if (!freeOptions) { continue }
            await removePatreonType(freeOptions, section)
        }
    }

    async function removePatreonType(freeOptions, section) {
        let types = Object.keys(aaTestDatabase[section]);
        for (let i = 0; i < types.length; i++) {
            let typeFound = freeOptions.indexOf(types[i])
            if (typeFound === -1) {
                delete aaTestDatabase[section][types[i]]
            }
        }
    }

    async function clearAnimations() {
        let sections = Object.keys(aaTestDatabase);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(aaTestDatabase[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let freeOptions = aaTestDatabase[section][type]._free;
                if (!freeOptions) { continue }
                await removePatreonAnimation(freeOptions, section, type) 
            }    
        }
    }

    async function removePatreonAnimation(freeOptions, section, type) {
        let animations = Object.keys(aaTestDatabase[section][type]);
        for (let i = 0; i < animations.length; i++) {
            let animationFound = freeOptions.indexOf(animations[i]);
            if (animationFound === -1) {
                delete aaTestDatabase[section][type][animations[i]]
            }
        }
    }

    async function clearVariants() {
        let sections = Object.keys(aaTestDatabase);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(aaTestDatabase[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(aaTestDatabase[section][type]);
                for (let animation of animations) {
                    let freeOptions = aaTestDatabase[section][type][animation]._free;
                    if (!freeOptions) { continue }
                    await removePatreonVariant(freeOptions, section, type, animation)
                }
            }    
        }
    }

    async function removePatreonVariant(freeOptions, section, type, animation) {
        let variants = Object.keys(aaTestDatabase[section][type][animation]);
        for (let i = 0; i < variants.length; i++) {
            let variantFound = freeOptions.indexOf(variants[i]);
            if (variantFound === -1) {
                delete aaTestDatabase[section][type][animation][variants[i]]
            }
        }
    }

    async function clearColor() {
        let sections = Object.keys(aaTestDatabase);
        for (let section of sections) {
            if (section === "_templates") { continue }
            let types = Object.keys(aaTestDatabase[section])
            for (let type of types) {
                if (type === "_template") { continue }
                let animations = Object.keys(aaTestDatabase[section][type]);
                for (let animation of animations) {
                    let variants = Object.keys(aaTestDatabase[section][type][animation]);
                    for (let variant of variants) {
                        let freeOptions = aaTestDatabase[section][type][animation][variant]._free;
                        if (!freeOptions) { continue }
                        await removePatreonColor(freeOptions, section, type, animation, variant)    
                    }
                }
            }    
        }
    }

    async function removePatreonColor(freeOptions, section, type, animation, variant) {
        let colors = Object.keys(aaTestDatabase[section][type][animation][variant]);
        for (let i = 0; i < colors.length; i++) {
            let colorFound = freeOptions.indexOf(colors[i]);
            if (colorFound === -1) {
                delete aaTestDatabase[section][type][animation][variant][colors[i]]
            }
        }
    }
}