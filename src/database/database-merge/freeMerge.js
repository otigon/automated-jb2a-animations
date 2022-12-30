import * as free from "./freeDB"
import { JB2AFREEDB } from "../jb2a-free-database";


export const freeMerge = {

    async handle(path) {
        let jb2aFreeVersion = game.modules.get("JB2A_DnD5e")?.version;
        if (!jb2aFreeVersion) { return; }

        for (let [version, migration] of Object.entries(this.migrations)) {

            if (!isNewerVersion(jb2aFreeVersion, version)) {
                if (jb2aFreeVersion === version) {
                    await migration(path)
                    return;
                }
                return;
            }
            
            await migration(path)
        }
    },

    migrations: {
        "0.4.7": async (path) => {
            let db047 = await free.db047(path);
            foundry.utils.mergeObject(JB2AFREEDB, db047);
        },
        "0.4.8": async (path) => {
            let db048 = await free.db048(path);
            foundry.utils.mergeObject(JB2AFREEDB, db048);
        },
        "0.4.9": async (path) => {
            let db049 = await free.db049(path);
            foundry.utils.mergeObject(JB2AFREEDB, db049);
        },
        "0.5.0": async (path) => {
            let db050 = await free.db050(path);
            foundry.utils.mergeObject(JB2AFREEDB, db050);
        },
        "0.5.1": async (path) => {
            let db051 = await free.db051(path);
            foundry.utils.mergeObject(JB2AFREEDB, db051);
        },
        "0.5.2": async (path) => {
            let db052 = await free.db052(path);
            foundry.utils.mergeObject(JB2AFREEDB, db052);
        },
        "0.5.3": async (path) => {
            let db053 = await free.db053(path);
            foundry.utils.mergeObject(JB2AFREEDB, db053);
        },
    }
}