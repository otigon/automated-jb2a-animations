let enabled = true;

/**
 * Provides a centralized location to check if animation is enabled.
 */
export class AnimationState {
   static get enabled() { return enabled; }

   static set enabled(newEnabled)
   {
      enabled = newEnabled;

      if (!enabled) {
         socket.off('module.sequencer');
      }
   }
}