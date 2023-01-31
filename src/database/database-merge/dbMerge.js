import * as patreon from "./patreonDB"
import { aaTestDatabase } from "../databaseSort";


export const dbMerge = {

    async handle(freeVersion, patreonVersion) {
        const freePath = "modules/JB2A_DnD5e";
        const patreonPath = "modules/jb2a_patreon";
    
        for (let [version, migration] of Object.entries(this.migrations)) {
            if (!isNewerVersion(patreonVersion, version)) {
                if (patreonVersion === version) {
                    await migration(patreonPath)
                }    
            }
            
            await migration(patreonPath)
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
        "0.4.7": async (path) => {
            let db047 = await patreon.db047(path);
            foundry.utils.mergeObject(aaTestDatabase, db047);
        },
        "0.4.8": async (path) => {
            let db048 = await patreon.db048(path);
            foundry.utils.mergeObject(aaTestDatabase, db048);
        },
        "0.4.9": async (path) => {
            let db049 = await patreon.db049(path);
            foundry.utils.mergeObject(aaTestDatabase, db049);
        },
        "0.5.0": async (path) => {
            let db050 = await patreon.db050(path);
            foundry.utils.mergeObject(aaTestDatabase, db050);
        },
        "0.5.1": async (path) => {
            let db051 = await patreon.db051(path);
            foundry.utils.mergeObject(aaTestDatabase, db051);
        },
        "0.5.2": async (path) => {
            let db052 = await patreon.db052(path);
            foundry.utils.mergeObject(aaTestDatabase, db052);
        },
        "0.5.3": async (path) => {
            let db053 = await patreon.db053(path);
            foundry.utils.mergeObject(aaTestDatabase, db053);
        },
    }
}