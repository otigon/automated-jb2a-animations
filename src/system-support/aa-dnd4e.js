import { debug } from "../constants/constants.js";
import { trafficCop } from "../router/traffic-cop.js";
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";

export function systemHooks() {
  Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
    if (userId !== game.user.id) {
      return;
    }

    const item = template.flags?.dnd4e?.item;
    /**
     * We know it has an area target because we're placing a template for it, and the actual Item4e class doesn't
     * transfer over with its getter.
     */
    item.hasAreaTarget = true;
    const shouldPlay = shouldPlayAnimation(item, "template");

    if (!shouldPlay) {
      return;
    }

    const reqData = await getRequiredData({
      item,
      templateData: template,
      workflow: template,
      isTemplate: true,
    });

    templateAnimation(reqData);
  });

  Hooks.on("dnd4e.rollAttack", async (item, targetData, speakerData) => {
    const shouldPlay = shouldPlayAnimation(item, "attack");

    if (!shouldPlay) {
      return;
    }

    handleAnimation(
      item,
      speakerData,
      targetData.targets,
      targetData.targetHit
    );
  });

  Hooks.on("dnd4e.rollDamage", async (item, speakerData) => {
    const shouldPlay = shouldPlayAnimation(item, "damage");

    if (!shouldPlay) {
      return;
    }

    const targets = Array.from(game.user.targets);

    handleAnimation(item, speakerData, targets);
  });

  Hooks.on("dnd4e.rollHealing", async (item, speakerData) => {
    const shouldPlay = shouldPlayAnimation(item, "healing");

    if (!shouldPlay) {
      return;
    }

    const targets = Array.from(game.user.targets);

    handleAnimation(item, speakerData, targets);
  });

  Hooks.on("dnd4e.usePower", async (item, speakerData) => {
    const shouldPlay = shouldPlayAnimation(item, "usePower");

    if (!shouldPlay) {
      return;
    }

    const targets = Array.from(game.user.targets);

    handleAnimation(item, speakerData, targets);
  });
}

function shouldPlayAnimation(item, hookName) {
  const itemData = item.system ? item.system : item;
  const aaHookToUse = itemData.macro?.autoanimationHook
    ? itemData.macro.autoanimationHook
    : false;

  console.log(`should play animation for hook ${hookName}?`);

  if (!aaHookToUse) {
    const defaultHook = getItemDefault(itemData);
    console.log(`using default hook: ${defaultHook}`);
    return defaultHook === hookName;
  } else {
    console.log("has aa hook explicitly set");
    return aaHookToUse === hookName;
  }
}

function hasAreaTarget(itemData) {
  return [
    "closeBurst",
    "closeBlast",
    "rangeBurst",
    "rangeBlast",
    "wall",
  ].includes(itemData.rangeType);
}

function getItemDefault(itemData) {
  if (hasAreaTarget(itemData)) {
    return "template";
  } else if (itemData.attack?.isAttack) {
    return "attack";
  } else if (itemData.hit?.isDamage) {
    return "damage";
  } else if (itemData.hit?.isHealing) {
    return "healing";
  } else {
    return "usePower";
  }
}

async function handleAnimation(item, speakerData, targets, hitTargets = []) {
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

  if (hitTargets.length) {
    workflowData.hitTargets = hitTargets;
  }

  const handler = await AAHandler.make(workflowData);
  if (!handler?.item || !handler?.sourceToken) {
    debug("Automated Animations: No Item or Source Token", handler);
    return;
  }
  trafficCop(handler);
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
