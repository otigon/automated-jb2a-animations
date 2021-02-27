# Automated Animations DnD5e

Tutorial Video: https://www.youtube.com/watch?v=psYt4IdfIVI

# Introduction

Time to ditch those animation macros! This module is designed to implement all of the "instant" duration animations like:

- Weapon Attacks
- Attack Spells
- Explosions
- Healing Spells

Currently implemented for D&D 5e

REQUIRED MODULES: 
- Midi-QOL
- Furnace
- FXMaster
- JB2A - Jules&Ben's Animated Assets (patreon or free version)  
Optional Modules:
- Token Magic FX

# Known Issues
- The **About Face** module can cause issues with the **FX Master** function used for the Melee attack animations. A fix has been proposed to the **FX Master** Author and it should be fixed on the next update for that module.

# Overview

This module functions similarly to calling On-Use Macros through Midi-QOL or Item Macro. However, this will run all of the animations behind the scenes without fussing with macros. This is ONLY set up for DnD 5e currently, though may work on other similar systems.  

The module reads the data passed through Midi-QOL to get the **Name** of the item, as well as reading the item's **Source** Field. It pairs animations from the JB2A module with items having the name they were designed for. 

![Alt text](pictures/NameandSource.png)

In this sense:
- a Greataxe will play the Greataxe animation
- a Longsword or Shortsword will play the Sword animation
- Fire Bolt will play the Fire Bolt animation
- Disintegrate will play the Disintegrate animation
- etc. etc. etc

The "default" animations used are the ones available in the Free version of JB2A. Their Patreon module has plenty of awesome color variants to use as well, and the color can be switched by adding the color you want (if available) in the **Source** field. (Check out **JB2A** on Patreon at https://www.patreon.com/JB2A)

Example: Fire Bolt  
Default Color: Orange  
Available Patreon Colors: Red, Blue, Green and Purple

Typing any one of the Patreon color options for Fire Bolt in the **Source** Field will change the animation played to that color variant.

# Settings

**1. Enable Token Magic FX**
- Token Magic FX for this Module is disabled by default. Enable this to activate the built in TMFX filters that play with the Animations.
- This is a module wide setting, but a future release will enable the options to disable the effects on a per animations basis.

**When the Animations Play**  
By default, the animations activate and play when the Midi-QOL "workflow" is complete. This means a few things:  
- If using MIDI to check for hits, the animations will play even if the attack misses and damage is not rolled.
- If NOT using Midi to check for hits, the animation will play when the Damage is rolled, but will also play on Nat 1's.

**2. Only play animations on Hits**
- If checking hits with Midi, you can enable this option to ONLY play animations when the target is hit by the attack

**3. Only play animations on Damage Rolls**
- A simpler option that will ONLY play animations when the Damage or Healing rolls are done.


# Using Animations for other Items or Spells

By default, the module will only recognize specific names of items to trigger the animations. To get around this there are a few options:

1. If you want to turn off an animation for a specific item, this can be done by typing **xxx** in the **Source** field. **NOTE** you do not need to delete any information currently in the **Source** field. Both examples below will bypass the animation.
![Alt text](pictures/XXX.png)

2. If you want to use an animation for an item that doesn't have one, simply put the animation/item name you want to use in the **Source** Field. In the example below, there is no animation currently for Chill Touch, but the Green Ray of Frost animation works nicely. By putting Ray of Frost Green (CAPS is not necessary) in the **Source** Field, this item will now call the Green Ray of Frost animation.
![Alt text](pictures/CTExample.png)


**Please feel free to send suggestions or comments in the Suggestion Box of the JB2A discord, or log an issue on the GitHub page for issues or improvement suggestions.**
