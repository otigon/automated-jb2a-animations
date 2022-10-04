import * as patreon from "./patreonDB"
import { JB2APATREONDB } from "../jb2a-patreon-database";


export const patreonMerge = {

    async handle(path) {
        let jb2aPatreonVersion = game.modules.get("jb2a_patreon")?.version;
        if (!jb2aPatreonVersion) { return; }

        for (let [version, migration] of Object.entries(this.migrations)) {

            if (!isNewerVersion(jb2aPatreonVersion, version)) {
                if (jb2aPatreonVersion === version) {
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
            let db047 = await patreon.db047(path);
            foundry.utils.mergeObject(JB2APATREONDB, db047);
        },
        "0.4.8": async (path) => {
            let db048 = await patreon.db048(path);
            foundry.utils.mergeObject(JB2APATREONDB, db048);
        },
        "0.4.9": async (path) => {
            let db049 = await patreon.db049(path);
            foundry.utils.mergeObject(JB2APATREONDB, db049);
        },
        "0.5.0": async (path) => {
            let db050 = await patreon.db050(path);
            foundry.utils.mergeObject(JB2APATREONDB, db050);
        },
    }
}