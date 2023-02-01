import * as patreon         from "./patreonDB"
import { aaTestDatabase }   from "../databaseSort";
import { sortDatabase }     from "../databaseSort";

export const dbMerge = {

    async handle(freeVersion, patreonVersion) {
        const freePath = "modules/JB2A_DnD5e";
        const patreonPath = "modules/jb2a_patreon";
    
        for (let [version, migration] of Object.entries(this.migrations)) {
            if (!isNewerVersion(patreonVersion, version)) {
                if (patreonVersion === version) {
                    await migration(patreonPath, true)
                }    
            }
            
            await migration(patreonPath, true)
        };
        for (let [version, migration] of Object.entries(this.migrations)) {
            if (isNewerVersion(patreonVersion, version || patreonVersion === version)) {
                continue;
            }
            if (!isNewerVersion(freeVersion, version)) {
                if (freeVersion === version) {
                    await migration(freePath)
                }    
            }
            
            await migration(freePath)
        }
        return;
    },

    migrations: {
        "0.4.7": async (path, isPatreon = false) => {
            let db047 = await patreon.db047(path);
            await sortDatabase(db047, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db047);
        },
        "0.4.8": async (path, isPatreon = false) => {
            let db048 = await patreon.db048(path);
            await sortDatabase(db048, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db048);
        },
        "0.4.9": async (path, isPatreon = false) => {
            let db049 = await patreon.db049(path);
            await sortDatabase(db049, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db049);
        },
        "0.5.0": async (path, isPatreon = false) => {
            let db050 = await patreon.db050(path);
            await sortDatabase(db050, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db050);
        },
        "0.5.1": async (path, isPatreon = false) => {
            let db051 = await patreon.db051(path);
            await sortDatabase(db051, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db051);
        },
        "0.5.2": async (path, isPatreon = false) => {
            let db052 = await patreon.db052(path);
            await sortDatabase(db052, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db052);
        },
        "0.5.3": async (path, isPatreon = false) => {
            let db053 = await patreon.db053(path);
            await sortDatabase(db053, isPatreon)
            foundry.utils.mergeObject(aaTestDatabase, db053);
        },
    }
}