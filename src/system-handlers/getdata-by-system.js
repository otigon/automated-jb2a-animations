
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

    static async dnd5e(input, isChat) {
        if (game.modules.get('midi-qol')?.active && !isChat) {
            const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            const ammo = input.item?.data?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.data?.data?.consume?.type;
            const item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.data.data.consume.target) : input.item;
            if (!item || !token) { return {}; }

            const hitTargets = Array.from(input.hitTargets);
            let targets = input.item?.data?.data?.target?.type === 'self' ? Array.from(game.user.targets) : Array.from(input.targets);
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
            let itemId = input.data?.flags?.dnd5e?.roll?.itemId || inputAtr || input.data?.flags?.["midi-qol"]?.itemId;

            const tokenId = input.data?.speaker?.token || input.uuid;
            if (!itemId || !tokenId) { return {}; }

            const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.uuid)) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
            if (!token) { return {}; }
            let item = token.actor?.items?.get(itemId) || await fromUuid(`Item.${itemId}`);

            if (!item) return {};
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

    static async sfrpg(input) {
        const itemId = input.data?.item?.id || this._extractItemId(input.msg?.data?.content);
        if (!itemId) { return {}; }
        const tokenId = input.msg?.data?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));
        if (!token) { return {}; }
        const item = input.data?.item ? input.data.item : token.actor?.items?.get(itemId);
        if (!item) { return {}; }

        const targets = Array.from(input.msg.user.targets);

        return { item, token, targets };
    }

    static async d35e(input) {
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? null;
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async sw5e(input, isChat) {
        if (game.modules.get('midi-qol')?.active && !isChat) {
            const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            const ammo = input.item?.data?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.data?.data?.consume?.type;
            const item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.data.data.consume.target) : input.item;
            if (!item || !token) { return {}; }

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
            if (!itemId || !tokenId) { return {}; }

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

    static async pf1(input) {
        const item = input?.itemSource;
        const tokenId = input.data?.speaker?.token;
        if (!item || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async pf2e(input) {
        const item = input.item;
        const token = input.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        const targets = Array.from(input.user.targets);
        if (!item || !token) { return {}; }

        let outcome = input.data?.flags?.pf2e?.context?.outcome;
        outcome = outcome ? outcome.toLowerCase() : "";
        let hitTargets;
        if (targets.length < 2 && !game.settings.get('autoanimations', 'playonDamageCore') && outcome) {
            if (outcome === 'success' || outcome === 'criticalsuccess') {
                hitTargets = targets;
            } else {
                hitTargets = false
            }
        } else {
            hitTargets = targets;
        }

        const extraNames = [];
        if (item.type === "weapon") {
            const baseType = game.i18n.localize(CONFIG.PF2E.baseWeaponTypes[item.baseType]);
            const group = game.i18n.localize(CONFIG.PF2E.weaponGroups[item.group]);
            extraNames.push(baseType, group);
        }

        return { item, token, targets, hitTargets, extraNames };
    }

    static async forbiddenlands(input) {
        const itemId = input._roll.options?.itemId;
        const tokenId = input._roll.options?.tokenId;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        if (!token) { return {}; }
        const item = token.actor?.items?.get(itemId);
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async demonlord(input) {
        const eventType = input.type
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

        if (eventType && !canRunAnimations()) {
            return {};
        }

        return { item, token, targets, hitTargets };
    }

    static async starwarsffg(input) {
        const itemId = input.roll.data._id;
        const tokenId = input.data.speaker.token;

        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        if (!itemId || !token) {return {};}

        const item = token.actor.items?.get(itemId) ?? "";
        const targets = Array.from(input.user.targets);
        const hitTargets = input.roll.ffg.success > 0 ? targets : [];

        return { item, token, targets, hitTargets };
    }

    static async swade(input) {
        const item = input.SwadeItem;
        const tokenOrActor = input.SwadeTokenOrActor;
        let token = canvas.tokens.placeables.find(token => token.actor?.items?.get(item.id) != null) || canvas.tokens.ownedTokens.find(x => x.actor.id === tokenOrActor.id);
        if (tokenOrActor instanceof Token) { token = tokenOrActor; }
        const targets = Array.from(game.user.targets);
        if (!item || !token) { return {}; }

        return { item, token, targets };
    }

    static async tormenta20(input) {
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? "";
        const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async wfrp4e(input) {

        const item = input.item;
        const itemId = item.id;
        const tokenId = input.info?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != undefined);

        const targets = input.targets ? Array.from(input.targets).map(token => canvas.tokens.get(token.token)) : [];

        if (!item || !token) { return {}; }

        return { item, token, targets };
    }

    static async ose(input) {
        const itemId = input.data?.flags?.ose?.itemId;
        const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor?.items?.get(itemId)
        if (!token || !item) { return {}; }
        const targets = Array.from(input.user.targets);
        
        return { item, token, targets };
    }

    static async dcc(input) {
        const itemId = input.data?.flags?.dcc?.ItemId;
        const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor?.items?.get(itemId)
        if (!token || !item) { return {}; }
        const targets = Array.from(input.user.targets);
        
        return { item, token, targets };

    }

    static async alienrpg(input) {
        const inputAtr = this._extractItemId(input.data?.content);
        let itemId = inputAtr;

        //const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }

        const token = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

        if (!token) { return {}; }
        let item = token.actor?.items?.get(itemId) || await fromUuid(`Item.${itemId}`);

        if (!item) return {};

        const targets = Array.from(input.user.targets);

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
