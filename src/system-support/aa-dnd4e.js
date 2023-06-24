import { debug } from "../constants/constants.js";
import { trafficCop } from "../router/traffic-cop.js";
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";

export function systemHooks() {
  Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
    if (userId !== game.user.id) {
      return;
    }

    const reqData = await getRequiredData({
      item: template.flags?.dnd4e?.item,
      templateData: template,
      workflow: template,
      isTemplate: true,
    });

    templateAnimation(reqData);
  });

  Hooks.on("dnd4e.rollAttack", async (item, targetData, speakerData) => {
    const token = game.scenes
      .get(speakerData.scene)
      .tokens.get(speakerData.token);

    const workflowData = {
      item,
      token,
      actor: null,
      targets: targetData.targets,
      hitTargets: targetData.targetHit,
      workflow: item,
    };

    const handler = await AAHandler.make(workflowData);
    if (!handler?.item || !handler?.sourceToken) {
      debug("Automated Animations: No Item or Source Token", handler);
      return;
    }
    trafficCop(handler);
  });

  Hooks.on("dnd4e.rollDamage", async (item, speakerData) => {
    const targets = Array.from(game.user.targets);

    if (item.system.attack?.isAttack) {
      // Play on attack rolls when possible.
      return;
    }

    const token = game.scenes
      .get(speakerData.scene)
      .tokens.get(speakerData.token);

    const workflowData = {
      item,
      token,
      actor: null,
      targets,
      workflow: item,
    };

    const handler = await AAHandler.make(workflowData);
    if (!handler?.item || !handler?.sourceToken) {
      debug("Automated Animations: No Item or Source Token", handler);
      return;
    }
    trafficCop(handler);
  });
}

async function templateAnimation(input) {
  debug("Template placed, checking for animations");
  if (!input.item) {
    debug("No Item could be found");
    return;
  }
  const handler = await AAHandler.make(input);
  trafficCop(handler);
}
