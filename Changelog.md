2.1.4 **Database Fixes**  
* Corrected some items in the Free JB2A database (Eruption and Divine Smite)  
* Added Detect Magic to the Aura and Template menus  
  
2.1.3 **Fixes and Changes**  
* Added a missing option in the Automatic Recognition Menu for macros: Only Macro, no Animation. This will disregard any animation settings to allow you to only run a macro when the item is rolled.  
* Added missing "explosions" for the On Token menu when the Play On field was set to Source Token  
* In most cases, the Template Data should now be passed to the Macro ARGS  
* Added the item UUID tag to Persistent effects placed as Tiles under ``tile.data.flags.autoanimations.origin``  
  
2.0.0 **Macro Support**  
**BREAKING** With the addition of Macros into A-A, the Advanced Macros module is required to use this feature. This will not be set as a dependency since it is an optional feature of the Module.  
* Adds the ability to use Custom Macros on all Item and Automatic Recognition Menus. **See the WIKI for detailed information on how to use these at** https://github.com/otigon/automated-jb2a-animations/wiki/Adding-Macros.  
* All Animation Sequences have been reworked to accomodate the Addition of Macros. As such, you may notice some different behavior on some animations. The basic Sequence will work as:  
1. Macro (If playing in Sequence)  
2. Extra Effects - Source Token (If Enabled)  
3. Primary Effect and Sound.  
4. Explosion (if enabled)  
5. Extra Effects - Target Token(s) (If Enabled)  
**NOTE:** For Targeted effects, 3, 4 and 5 will play on all targets Simultaneously (respecting wait/delay times) with any associated Sounds. Previously many of the effects would incorrectly play the full Sequence from Source to Target, then Repeat again for the next target.  
  

* All menus should now have have proper placeholders representing the default value if the field is left blank.  
* Corrected an issue with Templates => Thunderwave. Previously if the Thunderwave animation was chosen it would direct it to a custom Sequence designed for DnD 5e. This is now moved to the Preset menus.  
  
  
1.2.9 **JB2A Essek and Frumpkin add-ins  
Adds in all new animations with exception of the Zoning effects  
* Energy Conduit Square and Circle => Range-Generic  
* Energy Beam variant 02 and 03 => Range-Spell-Energy Beam  
* Energy Strands (Multiple) variant 02 => Range-Spell-Energy Strands  
* Eruption and Liquid Splash => added to OnToken Type Explosion, Explosion Menus, and Extra Effect menus  
* Aura option "Ignore Targets" is now working correctly
  
1.2.8 **Adds support for external Animation calls to utilize Play of Miss effects via option object that accepts and array of the Hit Targets, and an option to override the Play on Miss feature in A-A  
  
1.2.3  
* **Adds support for the OSE system**  
* Teleportation preset will now activate immediately on Item use  
* New "Dual Attach" preset is now available in the Preset menus. **NOTE, this is an experimental feature that can sometimes be buggy**  
* 
1.2.0  
* **SOCKETLIB IS NOW A DEPENDANCY**. I've listed this as such since Sequencer 2.0 will require it as well.  
* Fix for Shadow of the Demonlord animations running on every button press  
* Fix for Forbidden Lands system animations failing if the "Link Actor Data" option was checked on the token  
* Updates for Template Animations and Teleportation Preset animation  
* Template Animations now accept both ScaleX and ScaleY. Keep both the same for uniformity  
Teleport Preset  
* Now accepts a Start and End animation separately, with custom option for both  
* New option to set the Grid Measurement type for either 5/5/5 or 5/10/5. Spawning either a Circular or Square overlay to show distance on use.  
* Teleportation no longer summons a Template. Now a simple Border is used via Sequencer, colored as the User Color.  
* Removed the "Do Not Show Template" option. Replaced with "Hide From Players. This is a GM ONLY setting, and ONLY on the Item menus. If checked, the distance border will only be visible to the GM, and not the Players (Great for hiding the BBG escaping)  
* In the 2nd Animation field, you can set the "Delay (ms) Token Alpha". This option accepts positive and negative values to time the reapperance of the Token. Token is no longer put in a hidden state, but the Alpha is changed by Sequencer. Base value for reappearing is time for Misty Step animation.  
  
1.1.0 - 1.1.6  
* Support for the 3D Canvas module by Ripper. Adds 3D Canvas Particle animations to all item menus, and the Melee, Range and On Token Autorec Menus.  
* Added SORT button to the Autorec Menu to sort your menu alphabetically  
* Added Global setting to Decouple Sounds from animations. If checked, Sounds will NOT repeat with the animation they are assigned to.  
* Fixed some issues with the 5e Magic Items module and Template animations not working correctly  
  
1.0.1 and 1.0.2  
* Corrected Automatic Recognition Menu import errors.  
* Automatic Recognition Menu is now localized. This only affects new installations. Command line prompt of game.settings.set('autoanimations', 'aaAutorec') will revert your menu to the base menu, but localized if you need to change it.  
* Updated menus for the JB2A Darrington release (minus Side Impacts for now)  
* Updated Japanese localization file thanks to Touge  
  
1.0.0  
**Feature Upgrades**  
* PF2e - Animate on Hit and Miss. Enabled in the Module Settings. Does not function if animating on Damage Rolls. Requires only 1 token to be targeted when rolling the attack (otherwise PF2e does not run the check)  
* Automatic Recognition Menu: Submit & Submit and Close button added. Submit will save the current settings and NOT close the menu, while Submit and Close will save and close.  
* Automatic Recognition Menu: Duplicate button added to sections to quickly copy an existing section to a new one.  
* Aura animations will now play immediately on Item use, irrespective of Attack and/or Damage rolls.  
* Generic Damage animations: Generic option in Melee menu will now only show if the Patreon Package is installed. Generic options are also now available in the Automatic Recognition Menu.  
  
**SOUNDS/AUDIO**  
* Sound options have been added to ALL animation sections on Item Menus AND Automatic Recognition Menus.  
* If animations are disabled on an item, you will still have the option to only play a Sound if so desired.  
* Existing sounds should still remain in place  
* Sounds are tied directly to the animations that they are defined on. Options are Volume and Delay.  
* Delay for sounds accepts both negative (-) and positive (+) numbers to start later or sooner than the animation.  
  
0.5.0  
* BREAKING: SEQUENCER module is now a Dependency of Automated Animations. You MUST have it installed and ACTIVE
* BREAKING: Weapon Animations with Explosions added will need to be reconfigured. Explosion options changed slightly
* BREAKING: Removed Token Magic FX support. This will be added back in on a future update with more customizable options
* BREAKING: Removed the Targetting Assistant in the module settings. This may or may not make it back in later
* BREAKING: Most currently set animations/items will work. There may be some instances where a custom configured item will need to be reconfigured. I did my best to limit the amount of breaking in this update
* Standardized all options across most Animation Types. Most options can now use a Custom Animation through a File Picker
* Options available for all are Looping and Loop Delay. Set the Loops for animations as well as the delay between each loop
* Options: Some now have the availability to scale the animation on a per item basis. Those with that option automatically scale with the Token size, and can be tweaked
* SELF and TARGET Explosion options are now SELF and TARGET Effects
* Replaced Class Features with Custom Sequences
* NEW: Added Source and Target Token effects in a new Tab. Source effects play before the Primary Animation, and Target effects play after. All can be adjusted with the Delay setting, either a positive or negative number.
  
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
