import { aaDeletedItems } from "../autoAnimations.js";

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
        let midiWorkflowAvailable = false;
        if (game.modules.get('midi-qol')?.active && isChat) {
            const workflowId = getProperty(input, "flags.midi-qol.workflowId");
            let workflow = workflowId ? MidiQOL.Workflow.getWorkflow(workflowId) : undefined;
            if (workflow) {
                input = workflow;
                midiWorkflowAvailable = true;
            }
        }
        if (game.modules.get('midi-qol')?.active && !isChat) {
          midiWorkflowAvailable = true;
        }
        if (midiWorkflowAvailable) {
            //const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            let {item, token, targets} = await this.getRequiredData(input)
            if (!item || !token) return {};

            //const token = this.getToken(input)
            const ammo = input.item?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.system?.consume?.type;
            item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.system.consume.target) : item;
            if (!item || !token) { return {}; }

            const hitTargets = Array.from(input.hitTargets || {});
            targets = input.item?.system.target?.type === 'self' ? [token] : targets;
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
            if (token.actor?.system?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.system?.properties?.rch) {
                reach += 5;
            }
            return { item, token, targets, hitTargets, reach };
        } else {
            /*
            const inputAtr = this._extractItemId(input.data?.content);
            let itemId = input.data?.flags?.dnd5e?.roll?.itemId || inputAtr || input.data?.flags?.["midi-qol"]?.itemId;

            const tokenId = input.data?.speaker?.token || input.uuid;
            if (!itemId || !tokenId) { return {}; }

            const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.uuid)) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
            if (!token) { return {}; }
            let item = token.actor?.items?.get(itemId) || await fromUuid(`Item.${itemId}`);
            */
            let {item, itemId, token, targets} = await this.getRequiredData(input)
            if (!item || !token) return {};

            if (item.flags?.autoanimations?.options?.ammo && item.system?.consume?.type === "ammo") {
                itemId = item.system.consume.target;
                item = token.actor.items?.get(itemId) ?? "";
            }

            //const targets = Array.from(input.user.targets);

            let reach = 0;
            if (token.actor?.system?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.system?.properties?.rch) {
                reach += 5;
            }

            return { item, token, targets, reach };
        }
    }

    static async sfrpg(input) {
        /*
        const itemId = input.item?.id || input.data?.item?.id || this._extractItemId(input.msg?.data?.content);
        if (!itemId) { return {}; }
        const tokenId = input.token?.id || input.msg?.data?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));
        if (!token) { return {}; }
        const item = input.data?.item ? input.data?.item : input.item || token.actor?.items?.get(itemId);
        if (!item) { return {}; }
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = input.targets ? Array.from(input.targets) : Array.from(input.msg?.user?.targets);

        return { item, token, targets };
    }

    static async d35e(input) {
        /*
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? null;
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async sw5e(input, isChat) {
        if (game.modules.get('midi-qol')?.active && !isChat) {
            //const token = canvas.tokens.get(input.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(input.item?._id) != null);
            let {item, token, targets} = await this.getRequiredData(input)
            if (!item || !token) return {};

            const ammo = input.item?.flags?.autoanimations?.options?.ammo;
            const ammoType = input.item?.system?.consume?.type;
            item = ammo && ammoType === "ammo" ? token.actor.items?.get(input.item.system.consume.target) : item;
            if (!item || !token) { return {}; }

            const hitTargets = Array.from(input.hitTargets);
            //let targets = Array.from(input.targets);
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
            if (token.actor?.system?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.system?.properties?.rch) {
                reach += 5;
            }
            return { item, token, targets, hitTargets, reach };
        } else {
            /*
            const inputAtr = this._extractItemId(input.data?.content);
            const itemId = input.data?.flags?.sw5e?.roll?.itemId || inputAtr || input.data?.flags?.["midi-qol"]?.itemId;
            const tokenId = input.data?.speaker?.token;
            if (!itemId || !tokenId) { return {}; }

            const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

            let item = token.actor?.items?.get(itemId);
            */
            let {item, itemId, token, targets} = await this.getRequiredData(input)
            if (!item || !token) return {};

            if (item.flags?.autoanimations?.options?.ammo && item.system?.consume?.type === "ammo") {
                itemId = item.system.consume.target;
                item = token.actor.items?.get(itemId) ?? "";
            }

            //const targets = Array.from(input.user.targets);

            let reach = 0;
            if (token.actor?.system?.details?.race?.toLowerCase() === 'bugbear') {
                reach += 5;
            }
            if (item.system?.properties?.rch) {
                reach += 5;
            }

            return { item, token, targets, reach };
        }
    }

    static async pf1(input) {
        /*
        const item = input?.itemSource;
        const tokenId = input.data?.speaker?.token;
        if (!item || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async pf2e(input) {
        /*
        const item = input.item;
        const token = input.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);
        //if (!item || !token) { return {}; }

        let outcome = input.flags?.pf2e?.context?.outcome;
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
        /*
        const itemId = input._roll.options?.itemId;
        const tokenId = input._roll.options?.tokenId;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        if (!token) { return {}; }
        const item = token.actor?.items?.get(itemId);
        const targets = Array.from(input.user.targets);
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        return { item, token, targets };
    }

	/// Cypher System  [Requires SypherSystem 1.32.3 and above]
	/// 20220502 - Handles Recovery, ability rolls and other ability/item use by Dice roll. Ability use by Payment not working, flags.itemID and Speaker are both NULL in this case.
	///			   Doesn't handle companions (These don't have abilities in their character sheets, the ability is owned by the player sheet, so need to look at how we can animate companions)
	/// 20220502 (1.32.4) PAYED abilities now can fire off animations

	static async cyphersystem(input) {
        /*
		const itemId = input.data.flags?.itemID;
        const tokenId = input.data.speaker.token;

        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        if (!itemId || !token) {return {};}
		*/
        let {item, itemId, token, targets} = await this.getRequiredData(input)
        if (!itemId || !token) return {};

		// if the item ID is a recover roll (not a real item id) lets animate the recovery IF selected. No crits of fumbles are used here
		if (itemId == "recovery-roll")
		{
			if ( game.settings.get("autoanimations", "EnableOnRecoveryRoll"))
			{	let recoverAnim = game.settings.get("autoanimations", "RecoveryRollAnimation");
			
				new Sequence()
					.effect()
					.file(recoverAnim)
					.atLocation(token)
					.play();
			}
		}
		else
		{
			// others, things here can fire a Crit or Fumble
			// First crits etc
			
			var diceRoll = 10;
			if (input._roll != null)
			{
				diceRoll = input._roll?._total;
			}
			
			let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
			let fumbleAnim = game.settings.get("autoanimations", "FumbleAnimation");
			
			switch (true) {
				case (game.settings.get("autoanimations", "EnableCritical") && diceRoll == 20):
					new Sequence()
						.effect()
						.file(critAnim)
						.atLocation(token)
						.play()
					break;
				case (game.settings.get("autoanimations", "EnableFumble") && diceRoll == 1):
					new Sequence()
						.effect()
						.file(fumbleAnim)
						.atLocation(token)
						.play()
					break;
			}
			
			if (diceRoll > 1)
			{
				// not a Fumble, actually PLAY the other animation if any (Start with Speed, Might and Intellect rolls, from embedded Character Sheet GUI)
				
				if (itemId == "might-roll")
				{
					if (game.settings.get("autoanimations", "EnableOnMightRoll"))
					{
						let mightAnim = game.settings.get("autoanimations", "MightRollAnimation");
						new Sequence()
						.effect()
						.file(mightAnim)
						.atLocation(token)
						.play()
					}
				}
				else if (itemId == "speed-roll")
				{
					if (game.settings.get("autoanimations", "EnableOnSpeedRoll"))
					{
						let speedAnim = game.settings.get("autoanimations", "SpeedRollAnimation");
						new Sequence()
						.effect()
						.file(speedAnim)
						.atLocation(token)
						.play()
					}
				}
				else if (itemId == "intellect-roll")
				{
					if (game.settings.get("autoanimations", "EnableOnIntellecRoll"))
					{
						let intellectAnim = game.settings.get("autoanimations", "IntellectRollAnimation");
						new Sequence()
						.effect()
						.file(intellectAnim)
						.atLocation(token)
						.play()
					}
				}
				else
				{		
					// otherwise, see if we can find an item connected to this message and play any animations attached to it
					//const item = token.actor.items?.get(itemId) ?? "";
		
					//const targets = Array.from(input.user.targets);

					return { item, token, targets };
				}
			}
		}
		
		return {};
	}


    static async demonlord(input) {
        const eventType = input.type
        /*
        const itemId = input.itemId;
        const token = input.sourceToken || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        const item = token.actor?.items?.get(itemId);
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        let hitTargets = input.hitTargets || [];
        hitTargets = Array.from(hitTargets);
        //let targets;
        if (game.settings.get("autoanimations", "playtrigger") === "hits") {
            targets = hitTargets;
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
        /*
        const itemId = input.roll.data._id;
        const tokenId = input.data.speaker.token;

        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        if (!itemId || !token) {return {};}

        const item = token.actor.items?.get(itemId) ?? "";
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);
        const hitTargets = input.roll.ffg.success > 0 ? targets : [];

        return { item, token, targets, hitTargets };
    }

    static async swade(input) {
        //const item = input.SwadeItem;
        let {item, token, targets} = await this.getRequiredData(input)

        const tokenOrActor = input.SwadeTokenOrActor;
        token = token || canvas.tokens.ownedTokens.find(x => x.actor.id === tokenOrActor.id);
        if (tokenOrActor instanceof Token) { token = tokenOrActor; }
        //const targets = Array.from(game.user.targets);
        if (!item || !token) { return {}; }

        return { item, token, targets };
    }

    static async tormenta20(input) {
        /*
        const itemId = this._extractItemId(input.data?.content);
        const tokenId = input.data?.speaker?.token;
        if (!itemId || !tokenId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? "";
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async wfrp4e(input) {
        /*
        const item = input.item;
        const itemId = item.id;
        const tokenId = input.info?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != undefined);
        */
        let {item, token} = await this.getRequiredData(input)
        if (!item || !token) return {};

        const targets = input.targets ? Array.from(input.targets).map(token => canvas.tokens.get(token.token)) : [];

        return { item, token, targets };
    }

    static async ose(input) {
        /*
        const itemId = input.data?.flags?.ose?.itemId;
        const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor?.items?.get(itemId)
        if (!token || !item) { return {}; }
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);
        
        return { item, token, targets };
    }

    static async dcc(input) {
        /*
        const itemId = input.data?.flags?.dcc?.ItemId;
        const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor?.items?.get(itemId)
        if (!token || !item) { return {}; }
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);
        
        return { item, token, targets };

    }

    static async alienrpg(input) {
        /*
        const inputAtr = this._extractItemId(input.data?.content);
        let itemId = inputAtr;

        //const tokenId = input.data?.speaker?.token;
        if (!itemId) { return {}; }

        const token = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

        if (!token) { return {}; }
        let item = token.actor?.items?.get(itemId) || await fromUuid(`Item.${itemId}`);

        if (!item) return {};
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    static async a5e(input) {
        /*
        const itemId = input?.data?.flags?.itemId;
        if (!itemId) { return {}; }

        const tokenId = input?.data?.speaker?.token;
        const token = canvas.scene.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));
        if (!token) { return {}; }
        
        const item = token.actor?.items?.get(itemId)
        if (!item) { return {}; }
        */
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(game.users.get(input.data.user).targets);

        return { item, token, targets };
    }

    /**
     * Fallback based on createChatMessage hook if no specific system support is added. It's the wild west here baby
     * @param {*} input 
     * @returns 
     */
    static async standardChat(input) {
        let {item, token, targets} = await this.getRequiredData(input)
        if (!item || !token) return {};

        //const targets = Array.from(input.user.targets);

        return { item, token, targets };
    }

    /**
     * Accepts the message html content and attempts to find the embedded item ID
     * @param {*} content 
     * @returns item ID or null
     */
    static _extractItemId(content) {
        try {
            return $(content).attr("data-item-id");
        } catch (exception) {
            console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
            return null;
        }
    }

    static async getRequiredData(input) {
        const data = input || {};

        const itemId = this.getItemId(data, game.system.id);
        const tokenId = this.getTokenId(data)
        let token = await this.getToken({tokenId, itemId, data})
        let item = await this.getItem({itemId, token, data})
        const targets = this.getTargets(data)

        if (!item) {
            item = aaDeletedItems.get(itemId);
        }
        if (!item && game.system.id === 'pf2e') {
            // Code taken with permission from XDY in a PR for PF2E flat checks: https://github.com/jessev14/pf2-flat-check/pull/8/files
            const originUUID = data.flags?.pf2e?.origin?.uuid;
            const actor = input.actor;
            if (!item && !data.isDamageRoll && originUUID?.match(/Item.(\w+)/) && RegExp.$1 === 'xxPF2ExUNARMEDxx') {
                const actionIds = originUUID.match(/Item.(\w+)/);
                if (actionIds && actionIds[1]) {
                    item = actor?.system?.actions.filter((atk) => atk?.type === "strike").filter((a) => a.item.id === actionIds[1])[0] || null;
                }
            }
        }
        if (!token) {
            token = canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null)
        }
        return {itemId, tokenId, token, item, targets}
    }

    /**
     * This accepts the originating workflow and attempts to get an Array of targets from the source Token user
     * @param {*} input 
     * @returns 
     */
    static getTargets(input) {
        const data = input || {};
        let targets =   data.user?.targets ?? 
                        data.targets ??
                        data.msg?.user?.targets ??
                        game.user.targets ??
                        void 0;
        targets = Array.isArray(targets) ? targets : Array.from(targets);
        return targets;                
    }

    /**
     * This accepts the originating workflow and attempts to find an Item ID for the item being used
     * @param {*} input 
     * @param {game.system.id} system 
     * @returns item ID
     */
    static getItemId(input, system = void 0) {
        const data = input || {};
        const itemId =  data.item?.id ??
                        data.itemId ??
                        data.item?.id ??
                        //data.data?.flags?.dnd5e?.roll?.itemId ?? 
                        //data.data?.flags?.sw5e?.roll?.itemId ??
                        data.flags?.[system]?.roll?.itemId ?? 
                        //data.data?.flags?.ose?.itemId ??
                        //data.data?.flags?.dcc?.ItemId ??
                        data.flags?.[system]?.ItemId ??
                        data.flags?.["midi-qol"]?.itemId ??
                        data._roll?.options?.itemId ??
                        data.flags?.itemId ??
                        data.flags?.itemID ??
                        data.roll?._id ??
                        this._extractItemId(data.content) ??
                        this._extractItemId(data.msg?.content) ??
                        void 0;
        return itemId;
    }
    
    /**
     * This accepts the item ID and token and attempts to find the item based on this information
     * @param {*} input 
     * @returns item
     */
    static async getItem(input) {
        const data = input || {};
        const item =    data.data?.item ??
                        data.data?.data?.item ??
                        data.item ??
                        data.itemSource ??
                        data.SwadeItem ??
                        data.token?.actor?.items?.get(data.itemId) ??
                        await fromUuid(`Item.${data.itemId}`) ??
                        void 0;
        return item;
    }

    /**
     * This accepts the originating workflow and attempts to find the source token ID
     * @param {*} input 
     * @returns token ID
     */
    static getTokenId(input) {
        const data = input || {};
        const tokenId = data.tokenId ??
                        data.speaker?.token ??
                        data.uuid ??
                        data.token?.id ??
                        data.msg?.speaker?.token ??
                        data._roll?.options?.tokenId ??
                        data.info?.speaker?.token ??
                        void 0;

        return tokenId;
    }

    /**
     * This accepts the token ID and item ID and attempts to find the source token on canvas
     * @param {*} input 
     * @returns token
     */
    static async getToken(input) {
        const data = input || {};
        const token =   data.token ??
                        canvas.tokens.get(data.tokenId) ??
                        canvas.scene.tokens.get(data.tokenId) ??
                        canvas.tokens.placeables.find(token => token.actor?.items?.get(data.itemId) != null) ??
                        canvas.tokens.ownedTokens.find(x => x.actor?.id === data.tokenId) ??
                        //await fromUuid(`Token.${data.tokenId}`) ??
                        void 0;
        return token;
    }


}
