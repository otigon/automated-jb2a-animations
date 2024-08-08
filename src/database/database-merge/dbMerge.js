import * as patreon         from "./patreonDB"
import { aaDatabase }   from "../databaseSort";
import { sortDatabase }     from "../databaseSort";

export const dbMerge = {

    async handle(freeVersion, patreonVersion, s3Location) {
        const freePath = s3Location ? s3Location : "modules/JB2A_DnD5e";
        const patreonPath = s3Location ? s3Location : "modules/jb2a_patreon";

        if (patreonVersion) {
            for (let [version, migration] of Object.entries(this.migrations)) {
                if (!foundry.utils.isNewerVersion(patreonVersion, version)) {
                    if (patreonVersion === version) {
                        await migration(patreonPath, true)
                        break;
                    } else {
                        break;
                    } 
                }
                await migration(patreonPath, true)
            };    
        }
        if (freeVersion) {
            for (let [version, migration] of Object.entries(this.migrations)) {
                if (foundry.utils.isNewerVersion(patreonVersion, version)) {
                    continue;
                }
                if (patreonVersion === version) {
                    continue;
                }
                if (!foundry.utils.isNewerVersion(freeVersion, version)) {
                    if (freeVersion === version) {
                        await migration(freePath);
                        break;
                    } else {
                        break;
                    }
                }
                await migration(freePath)
            }    
        }
        return;
    },

    migrations: {
        "0.4.7": async (path, isPatreon = false) => {
            let db047 = await patreon.db047(path);
            await sortDatabase(db047, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db047);
        },
        "0.4.8": async (path, isPatreon = false) => {
            let db048 = await patreon.db048(path);
            await sortDatabase(db048, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db048);
        },
        "0.4.9": async (path, isPatreon = false) => {
            let db049 = await patreon.db049(path);
            await sortDatabase(db049, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db049);
        },
        "0.5.0": async (path, isPatreon = false) => {
            let db050 = await patreon.db050(path);
            await sortDatabase(db050, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db050);
        },
        "0.5.1": async (path, isPatreon = false) => {
            let db051 = await patreon.db051(path);
            await sortDatabase(db051, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db051);
        },
        "0.5.2": async (path, isPatreon = false) => {
            let db052 = await patreon.db052(path);
            await sortDatabase(db052, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db052);
        },
        "0.5.3": async (path, isPatreon = false) => {
            let db053 = await patreon.db053(path);
            await sortDatabase(db053, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db053);
        },
        "0.5.4": async (path, isPatreon = false) => {
            let db054 = await patreon.db054(path);
            await sortDatabase(db054, isPatreon)
            foundry.utils.mergeObject(aaDatabase, db054);
        },
    }
}
