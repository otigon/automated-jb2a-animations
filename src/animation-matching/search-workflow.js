import { AnimationState } from "../AnimationState.js";

export async function workflow(data) {
    if (!AnimationState.enabled) {
        custom_notify("Animations are Disabled from the Automated Animations Settings", true);
        return false;
    }
    // Deep Clones the data sent by the system prep
    let clonedData = foundry.utils.deepClone(data);

    // Checks the item for any animation data on the item itself, or in the global menu
    let animationData = await handleItem(clonedData);

    // Hook to signify the start of the A-A workflow;
    Hooks.callAll("AutomatedAnimations-WorkflowStart", clonedData, animationData);

    // Can be added from the above Hook to stop the A-A workflow
    if (clonedData.stopWorkflow) { 
        debug(`Animation Workflow was interrupted by an External Source`, clonedData )
        return;
    }

    // recheckAnimation can be passed as a Boolean to let A-A know it needs to recheck for Animations.
    // Useful for changing out the Item to be processed mid-stream
    let newAnimationData;
    if (clonedData.recheckAnimation) {
        newAnimationData = await handleItem(clonedData);
        // If no Animation data is found for the newly passed Item, resets to the Original Item
        if (!newAnimationData) {
            clonedData.item = data.item
        }
    }

    // If no Animation data is matched, returns False and stops workflow
    if (!animationData && !newAnimationData) { 
        debug(`No Animation matched for Item`, clonedData )
        return false;
    }

    // Determines the animation data to be used, either original or new.
    let finalAnimationData = newAnimationData ? newAnimationData : animationData
    return new AAHandler({...clonedData, finalAnimationData});
}
