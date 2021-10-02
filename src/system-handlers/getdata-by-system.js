
export class AASystemData {

    /**
    * Gather required data:
    * 
    * @param token the Source Token that is using the item
    * @param item the originating item that is being rolled
    * @param targets an Array from target Set, either through Chat Message, Hook or game.user.targets
    * @param hitTargets an Array from a list of HIT targets if supported by system
    * @param reach calculating the cumulative Reach from Race/Weapon/etc. if supported by system
    * 
    * system name for new field should be in all Lower Case with special characters removed
    * 
    */
   
    static dnd5e(input, isChat) {
        if (game.modules.get('midi-qol')?.active && !isChat) {
            const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            const ammo = input.item?.data?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.data?.data?.consume?.type;
            const item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.data.data.consume.target) : input.item;
            if (!item || !token) { return; }

            const hitTargets = Array.from(input.hitTargets);
            let targets = Array.from(input.targets);
            if (game.modules.get('midi-qol')?.active) {
                switch (true) {
                    case (game.settings.get("autoanimations", "playonmiss")):
                        targets = targets;
                        break;
                    case (game.settings.get("autoanimations", "playonhit")):
                        targets = hitTargets;
                        break;
                    default:
                        targets = targets;
                }
            }

            let reach = 0;
            if (token.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.data?.data?.properties?.rch) {
                reach += 5;
            }
            return { item, token, targets, hitTargets, reach };
        } else {
            const inputAtr = this._extractItemId(input.data?.content);
            const itemId = input.data?.flags?.dnd5e?.roll?.itemId || inputAtr || input.data?.flags?.["midi-qol"]?.itemId;
            const tokenId = input.data?.speaker?.token;
            if (!itemId || !tokenId) { return; }

            const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

            let item = token.actor?.items?.get(itemId);
            if (!item) return;
            if (item.data?.flags?.autoanimations?.options?.ammo && item.data?.data?.consume?.type === "ammo") {
                itemId = item.data.data.consume.target;
                item = token.actor.items?.get(itemId) ?? "";
            }

            const targets = Array.from(input.user.targets);

            let reach = 0;
            if (token.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.data?.data?.properties?.rch) {
                reach += 5;
            }

            return { item, token, targets, reach };
        }
    }

    static d35e(input) {
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? null;
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static sw5e(input, isChat) {
        if (game.modules.get('midi-qol')?.active && !isChat) {
            const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            const ammo = input.item?.data?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.data?.data?.consume?.type;
            const item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.data.data.consume.target) : input.item;
            if (!item || !token) { return; }

            const hitTargets = Array.from(input.hitTargets);
            let targets = Array.from(input.targets);
            if (game.modules.get('midi-qol')?.active) {
                switch (true) {
                    case (game.settings.get("autoanimations", "playonmiss")):
                        targets = targets;
                        break;
                    case (game.settings.get("autoanimations", "playonhit")):
                        targets = hitTargets;
                        break;
                    default:
                        targets = targets;
                }
            }

            let reach = 0;
            if (token.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.data?.data?.properties?.rch) {
                reach += 5;
            }
            return { item, token, targets, hitTargets, reach };
        } else {

            const inputAtr = this._extractItemId(input.data?.content);
            const itemId = input.data?.flags?.sw5e?.roll?.itemId || inputAtr || input.data?.flags?.["midi-qol"]?.itemId;
            const tokenId = input.data?.speaker?.token;
            if (!itemId || !tokenId) { return; }

            const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

            let item = token.actor?.items?.get(itemId);
            if (item.data?.flags?.autoanimations?.options?.ammo && item.data?.data?.consume?.type === "ammo") {
                itemId = item.data.data.consume.target;
                item = token.actor.items?.get(itemId) ?? "";
            }

            const targets = Array.from(input.user.targets);

            let reach = 0;
            if (token.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.data?.data?.properties?.rch) {
                reach += 5;
            }

            return { item, token, targets, reach };
        }
    }

    static pf1(input) {
        const item = input?.itemSource;
        const tokenId = input.data?.speaker?.token;
        if (!item || !tokenId) { return; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static pf2e(input) {
        const item = input.item;
        const token = input.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        const targets = Array.from(input.user.targets);
        if (!item || !token) { return; }

        return { item, token, targets };
    }

    static forbiddenlands(input) {
        const itemId = input._roll.options?.itemId;
        const tokenId = input._roll.options?.tokenId;
        if (!itemId || !tokenId) { return; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemID) != null);
        const item = token.actor?.items?.get(itemId);
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static demonlord(input) {
        const itemId = input.itemId;
        const token = input.sourceToken || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        const item = token.actor?.items?.get(itemId);
        let hitTargets = input.hitTargets || [];
        hitTargets = Array.from(hitTargets);
        let targets;
        if (game.settings.get("autoanimations", "playtrigger") === "hits") {
            targets = hitTargets;
        } else {
            targets = Array.from(input.targets);
        }
        const canRunAnimations = () => {
            const commonEventTypes = ["apply-healing"]
            if (!item?.hasDamage() && !item?.hasHealing()) {
                return true
            }
            if (game.settings.get("autoanimations", "playtrigger") === "rolldamage") {
                return commonEventTypes.concat(["roll-damage"]).includes(eventType)
            } if (game.settings.get("autoanimations", "playtrigger") === "applydamage") {
                return commonEventTypes.concat(["apply-damage"]).includes(eventType)
            }
            return commonEventTypes.concat(["roll-attack"]).includes(eventType)
        }

        if (input.eventType && !canRunAnimations()) {
            return;
        }

        return { item, token, targets, hitTargets };
    }

    static swade(input) {
        const item = input.SwadeItem;
        const actor = input.SwadeActor;
        const token = canvas.tokens.placeables.find(token => token.actor?.items?.get(item.id) != null) || canvas.tokens.ownedTokens.find(x => x.actor.id === actor.id);
        const targets = Array.from(game.user.targets);
        if (!item || !token) { return; }

        return { item, token, targets };
    }

    static tormenta20(input) {
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? "";
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static wfrp4e(input) {
        const item = input.item;
        const itemId = item._id;
        const token = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != undefined);
        const targets = Array.from(input.targets);
        if (!item || !token) { return; }

        return { item, token, targets };
    }

    static _extractItemId(content) {
        try {
            return $(content).attr("data-item-id");
        } catch (exception) {
            console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
            return null;
        }
    }    
}
