0.3.81 - 0.3.85
- Impact Options added to explosions  
- Random color choice added to nearly all remaining effects  
- Japanese and Korean Localization updates  
- Cleared up some Licensing issues  
- Fixed Bardic Inspiration issues  
- Most animation effects scale now based on Token Size vs Video metadata, more to come  
- Fixed Foundry compatible version to 0.8.7  
- Added Eldritch Blast: Dark Green, Rainbow, and Light Blue. Added Dark Purple Divine Smite (All will be availble on next patreon release, currently only for Rare tier and above)  
- Explosions now available for all ranged attacks  
  
  
0.3.79 - 0.3.80  
- Misty Step tweaks (shoudl now work for Firefox, and hopefully everything else)  
- Added a "ground" layer to the module. Currently settable if using overrides for Healing Spells, Templates, On Target and Self Explosions. This will expand on a future update  
- Add the "Impact" Boulder animation to the Self Explosions option  
  
  
0.3.78  
- Hot Fix for those running on Foundry 0.7.9 or 0.7.10  
  
  
0.3.75-0.3.77  
- Minor Fixes
- Added a custom File Picker to the Templates Option in the A-A tab for usability with any video files. Note that actual implementation with that may vary depending on how the file is rendered or its size  
- KO Localization update  
- Updated how AA registers its animation layer  
  

0.3.74  
- BREAKING: Items that were configured with the "EXPLOSIONS (Circle Template)" or "BREATH WEAPONS" option in the A-A tab WILL NOT play their animations and need to be reconfigured  
- The above mentioned options have been replaced with a new TEMPLATES option that will automatically play the configured animation on top of the Template when placed  
- Animations automatically scale to the template size and rotation  
  
  
0.3.66 - 0.3.73  
- Star Wars 5e Support added  
- SW5e Midi support  
- WFRP 4e Support Added  
- Tormenta 20 fix for dual animations  
- Added aniamtions linear easing back in  
- Localization fixes  
- Fix for range checks for clients using older versions of Midi-QOL  
- Upgrade for Shadow of the Demon Lord system thanks to Patrick Porto  
  
  
0.3.51 - 0.3.65  
- Removed Dependancy on FX Master. A-A now has an option to play Animations ABOVE overhead tiles. This defaults to playing underneath and makes for some great depth on scenes.  
- Added Video Previews for animations, configureable in the Module Settings. This is defaulted to OFF  
- Added backwards compatibility with 0.7.9 and 0.7.10 Foundry Versions  
- Divine Smite and Breath Weapon Animations added  
- Several fixes due to updates to 0.8.6  
- Localization updates  
- Fixed CSS bleed  
- PF1 and Demon Lord system compatibility with 0.8.6 Foundry  
- Sounds now play outside of animation dependancy  
- Many error fixes  
  
0.3.50  
- First update for Foundry 0.8.XX  
- REQUIRES an Uninstall/Reinstall of the Module. I had to change the back-end name to work in sounds and some other fun features in the future  
- Item Sounds: In the A-A Tab, you can now choose a sound to play when the item is used. There is also a Sound option for Explosions. This is a work in progess and subject to change based on feedback.  
- Bardic Inspiration: Optional Marker animation to use in conjunction with the Bardic Inpiration Animation. The Marker requires Custom Token Animations to be active  
- Critical Hit and Miss (MIDI ONLY): Changed up the File Pickers in the Setting Menu, and refactored the checks for isCritical or isFumble, so this takes into account other modifiers for crits.  
  
0.2.83-0.2.89  
- Lots of backend code cleaning and various fixes that came along with it.  
  
2.2.82:  
- Add Scorching Ray Variant form new JB2A  
- Fixed 30 Foot "Auras" failing to render  
- Added Critical Hit and Miss Animation Options (customizable to select own animation). This is only active for DnD5e with Midi-QOL until I get time to code the rest.  
  
2.2.80:  
- Renamed the Animate Tab to A-A for space savings
- Changed Magic Missiles to shoot only 1 dart per cast/use  
- Bite and Claw animations scaled by Source Token size, previously was by Target Size  
- Reconfigured the "Miss" animations (Midi-QOL option only) to land around target. Previous method had too large a variance.  
- Add Shatter animation to On Target and Circular Template Explosion options in the Animate Tab Overrides
- Add new options to the Animate Tab  
- Self Emanations: Self Origin effects for use with things like Nova explosions  
- Aura: For use combined with the Custom Token Animations module by Kandashi. Automatically spawn Aura type effects on the token, with a dialog box to close at a later time (or through CTA if it is closed early). Works with Tint coloration and Opacity options
- Hunter's Mark: Add support for the Hunter's Mark Animation that will play on both Source and Target, and call a CTA animation (if CTA is active)  
- Updated en.json for new animation and color names, menu options, etc.  
  
2.2.71 - 0.2.75:  
- Add support for Tormenta20  
- Add Brazilian Translations  
- Fixes for YellowBlue Ray of Frost and Generic Healing  
  
2.2.70:
- Tweaked scaling of some animations for better visuals  
- Removed an empty "macro" compendium  
- Added option for Midi-QOL to play Animations on Hits AND Misses. Misses will veer off course  
  
0.2.60: 
- Tweaks for melee animations, better visuals overall and better performance with Mars 5e  
- Fixed incompatability with the About Face module  
- Lots of code organizations  
  
2.2.51:  
- Added in checks for standard English in auto-recognition as a back-up to Localization. For cases where the items were in English but the browser is set to another langauge.  
- Changed the Melee Animations to cycle through target list 1 by 1, rather than all at once. This fixes an issue where melee animations were repeated unnecessarily  
- Added support for other Modules to call animations externally  
- Removed "Improved Divine Smite" check (DnD5e), as this is better handled through the Animate Override tab now.  
- back-end work to start cleaning up code.  
  
0.2.46:  
- Reconfigured the Reach checks, and added Reach Check for PF1 attacks  
  
0.2.45:  
- Added French Localization  
  
0.2.41 - 0.2.44:  
- Add Spanish and Japanese localization
- Fixed Targeting Trainer problems when used with Midi-QOL On-Hit option
- Minor Bug fixes  
  
0.2.40:  
- Add localication support  
- Force refresh on Midi "On-Damage" setting change  
  
5.2.30:  
- Added the ability to add Explosions to Melee Weapon Attacks. Must use the Override setting in the Animate Tab  
- Added a "Targeting Assistant" Setting. Plays an animation on the Source Token when they attack without a target (Only for animations that require a target)  
  
0.2.23 & 0.2.24:  
- Fix for Explosion Overrides not functioning as intended 

2.2.21 Release:
- Fixed selector on item sheet Tab (thanks hmqgg)  
- Added auto-recognition for unarmed strikes (only if Patreon version of JB2A present). Uses randomized generic damage  
- Updated the Animate Tab to only show Free JB2A options, if no Patreon module is present  
- Updated the Pop-Up window to fix broken links  

0.2.12 Release:  
- Fixed a slight scaling issue with some attack spells.  
- Added Dark Red color menu option for Eldritch Blast  

0.2.11 Release:  
- Corrected an issue where sometimes Eldritch Blast would play when it should not  
- Added multi-target functionality for the On-Target explosion effects  
- Corrected an issue with the 5e Second Wind feature, with override, not playing animations correctly  
- Corrected an out of place line that would cause errors in the console  
- Spelling correction  

0.2.0 Release:  
- Animate Tab is now live  
- Source Field (DnD5e) is now Deprecated
- Cure Wounds and Generic Healing animations now default to playing on self if no target is selected  

0.1.7 Release:  
- Actual support for PF1, sorry for the mishap  
- Fixed an issue in DnD5e where Animations wouldn't play as intended. When multiple tokens from the same actor were on the canvas, the animations didn't work for them. This is fixed now.  
- Fixed the leaky error message from popping up when JB2A was actually installed
- Better description for the setting to turn off the PopUp window

0.1.6 Release:  
- Initial Support for PF1
- Lots of behind the scenes changes

0.1.1 Release:  
- Healing Potions and Second Wind can now call the healing animations (not by default). Use *heal* in the source for generic healing animation, use *cure wounds* for the cure wounds animation. Add a color in the source field for desired color variant.  
- Item Name check fixes to account for custom items and prep for future expansions  
- Removed the dependency on JB2A Free Module. If you have the patreon module the free module will no longer be required to be installed and active.
- Added error notifications if NO JB2A module is installed.
- Added Pop-Up window with information and to let users know the module REQUIRES a JB2A module to be installed
- You can now switch the Cure Wounds / Healing Word animations. If switching Cure Wounds, add *heal* to the source field, then a color option (This will then use the generic healing animation). If using healing word, you can switch to the Cure Wounds animation by adding "cure wounds" to the source field.  
- Tweaked the scaling of ranged attacks/spells

0.1.0 Release:
- Shield spell animation now scales globally and to token size  
- Removed the item TYPE check. This prevented some animations being used on certain items  
- Fixed Ray of Frost from not casting at long range.  
- Back end code clean-up.  
- Fixed the 1hb and 1hb incorrectly using the slashing damage. They should now both use the correct generic bludgeoning animations.  

0.0.9 Release:  
- Limited the color reading to source field only. Prevents some custom weapons from calling the wrong animation  
- Added Stutter TMFX to the Generic damage types  
- Added JB2A Free Module as a dependency in the module.js. For release through official channels this is required to prevent someone downloading the Automated Module and not having any JB2A modules installed, thus causing them to have a useless module. This is necessary until I find a work around for the issue. The Patreon version still works with this module  

0.0.8 Release:  
- Fix for custom items being imported with Source field = null  
- 
2.0.6 Release:
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
