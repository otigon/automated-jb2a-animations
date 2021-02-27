# Automated Animations DnD5e

Tutorial Video: https://www.youtube.com/watch?v=psYt4IdfIVI

## 0.0.5 Release:
1.	Added a new setting: Only Play Animation on Damage Rolls  
   a.	Allows for further customization of animations and when they play

2.	Corrected the check for Free vs Patreon Module. It should now work for both.

3.	Added Explosions (See PDF for Keywords)  
   a.	Designed for use on items that utilize templates.  
   b.	You can set the color, variant, and radius of the explosion in the Source Field

4.	Added Exploding Arrows (See PDF for Keywords)  
   a.	Add the word explode in the source field and then set the color, variant and radius of the explosion.


## 0.0.4 Release:

1. Token Magic FX options are now ADDED and REMOVED selectively to the Token. This means they should remove themselves even if the affected token is untargeted (think dead).

2. Now ONLY removes the Token Magic FX that were applied with the given animation. All pre-existing TMFX filters should remain active and not be deleted

3. Melee-Range detection should now be working correctly, Big thanks to brkwsk for the help.

4. Playing with the timing of different TFMX applications and Animations to help streamline when used on The Forge.

# Introduction

**Trying to figure out now why the Token Magic FX do not apply on the Forge**

Time to ditch those animation macros! This module is designed to implement all of the "instant" duration animations like:

- Weapon Attacks
- Attack Spells
- Explosions

Currently implemented for D&D 5e

REQUIRED MODULES: 
- Midi-QOL
- Furnace
- FXMaster
- JB2A - Jules&Ben's Animated Assets (patreon or free version)
Optional Modules:
- Token Magic FX

# Overview



This module functions similarly to calling On-Use Macros through Midi-QOL or Item Macro. However, this will run all of the animations behind the scenes without fussing with macros. This is ONLY set up for DnD 5e currently, though may work on other similar systems.  

The module reads the data passed through Midi-QOL to get the **Name** of the item, as well as reading the item's **Source** Field. It pairs animations from the JB2A module with items having the name they were designed for. 

![Alt text](pictures/NameandSource.png)

There are 2 settings currently in the Configure Settings area.
1. Enable Token Magic FX
   Enable this checkbox to include all of the standard Token Magic FX with the animations
2. Only play animations on Hits
   If checked, this requires the Midi-QOL setting to be enabled that checks for attacks to hit. Animations will only play when attacks hit.
   If unchecked, animations will play on every attack roll
   
Current Features:
- Automatically recognizes the weapon and spell names to choose a base animation to play. Auto-Detect is only set for Names that match an available JB2A animation. For example, if you wanted to use a Ray of Frost animation for Chill Touch, you need to put Ray of Frost in the Source field of the Chill Touch spell, then you can also set colors.
- Dagger, Handaxe and Spear detect the range to the target to pick whether the Melee or Ranged animmation is used. Recognizes the Bugbear race to add an additional 5 foot reach in these instances.
- Enable or Disable Token Magic FX features in the module via the settings menu
- Switch between ALWAYS playing animations on every attack to ONLY playing animations on "hits". Toggle is in the settings menu
- Reads the Source field of the item to choose the color. So Red in the Source field of the Greataxe will use the RED Greataxe animatiion
- Animations for a specific weapon can be overriden by put xxx in the Source field

Please feel free to send suggestions or comments in the Suggestion Box of the JB2A discord, or log an issue on the GitHub page for issues or improvement suggestions. 
