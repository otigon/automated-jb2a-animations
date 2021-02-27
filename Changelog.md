0.0.6 Release:
- Reconfigured the Token Magic FX filters to AutoDestroy themselves. This should improve the performance of the filters applying and deleting on The Forge.

- Fixed an error with Magic Missile where the animation would not play

- Added an optional Shield Spell animation effect (enable in settings). This temporarily utilizes the Anti-Life shell animation.

- Cleaned up the way the module directs traffic to avoid unnecessary checks.


0.0.5 Release:
- Added a new setting: Only Play Animation on Damage Rolls  
  Allows for further customization of animations and when they play

- Corrected the check for Free vs Patreon Module. It should now work for both.

- Added Explosions (See PDF for Keywords)  
  Designed for use on items that utilize templates.  
  You can set the color, variant, and radius of the explosion in the Source Field

- Added Exploding Arrows (See PDF for Keywords)  
  Add the word explode in the source field and then set the color, variant and radius of the explosion.

0.0.4 Release:
- Token Magic FX options are now ADDED and REMOVED selectively to the Token. This means they should remove themselves even if the affected token is untargeted (think dead).

- Now ONLY removes the Token Magic FX that were applied with the given animation. All pre-existing TMFX filters should remain active and not be deleted

- Melee-Range detection should now be working correctly, Big thanks to brkwsk for the help.

- Playing with the timing of different TFMX applications and Animations to help streamline when used on The Forge.
