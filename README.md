<p align="center">
  <img src="https://github.com/otigon/automated-jb2a-animations/blob/main/pictures/slavaukraine.jpg">
</p>  
  
MIT License provided:  
- Code from Midi-QOL (Tim Posney) is used to check distance between tokens: Copyright (c) 2020 Tim Posney  
- Honeybadger (Trioderigon) provided the framework for the Misty Step Animation  
- The SEQUENCER module is now a dependancy of Automated Animations.  
Many thanks to WASP for creating a great animation framework with the **SEQUENCER** Module. Check out his website [**here**](https://app.fantasy-calendar.com/) and get the **SEQUENCER** module asap!  
  
If you enjoy Automated Animations, consider sending some love on Patreon
### Patreon Link: https://www.patreon.com/otigon : Not required, but appreciated  
  
# Automated Animations
**No animations are provided in this module. It is designed to work in conjunction with the JB2A Animated Assets module. This module has been reviewed, approved and recommended by JB2A**  

I am not affiliated with JB2A, and am working on this only as a side project to make these great animation more easily accesible. 

## [**Tutorial Video**](https://www.youtube.com/watch?v=x5Y668eIAl0)  
  
## [**Version 1.0 Overview**](https://www.youtube.com/watch?v=edhUEPjQNtQ)
  
## [**DOCUMENTATION is on the Wiki Page**](https://github.com/otigon/automated-jb2a-animations/wiki)
# Introduction

At its core, Automated Animations is centered around the use of "instant" effects such as Weapon Attacks and Spell Effects. There are some areas that branch off from this concept and will be explained in the Wiki.

Current System Compatibility:  
- DnD 5e  
- Star Wars 5e
- DnD 3.5e
- PF1  
- PF2e  
- Shadow of the Demon Lord  
- Tormenta 20  
- Starfinder  
- Warhammer 4e
- Swade (Support is sketchy and I will not be updating further. If you can help out please send a PR)
- DCC
- Alien RPG
- Forbidden Lands
- Star Wars FFG

Systems in Process for Compatibility:   
- Please log a GitHub request for other systems  

REQUIRED MODULES: 
- **JB2A** - Jules&Ben's Animated Assets (patreon or free version)  
- **Sequencer** by Wasp

Optional Modules: 
- Socketlib (for placing Tile effects *see Wiki*)

Supported Modules for DnD5e (Those that mess with rolling):  
- CORE  
- MRE; Options to play animations on Attack or Damage  
- Midi-QOL; Options to play animations on Attack, Damage, Hit Targets, Check Saves for certain effects  
- Better Rolls; Automated Animations does not specifically support Better Rolls for 5e, you're best off not using the two together  
- Minimal Rolling Enhancements  
- Mars 5e  

# Overview
## Attack Spells and Melee attacks require a token(s) to be Targeted

As of release 0.5.0, Automated Animations has implemented the SEQUENCER module as a Dependancy. You can now think of A-A as a *lightweight* Sequence builder. For more customized animation sequences, use the the Sequencer module is highly recommended.   

Automated Animations reads the data passed through Chat Cards, or Module Hooks, to get the required information. Items (Spells, Weapons, etc) that have a **name** matching a **JB2A animation** will automatically play an animation on use. This generally occurs on the Attack Roll, with options for playing Animations on Damage Rolls. All **default** colors for available animations are based on the **Free** JB2A Module. To use color variants, you need to have the **Patreon** version of the JB2A Module.  

# External Calls for Animations  
Other modules can now call animations through Automated Animations by using:  
**AutoAnimations.playAnimation(sourceToken, targets, item)**  
Parameters are as follows:
- sourceToken: The Token instance that is using the item  
- targets: passed as an Array
- item: the item instance that is being used  



**Please feel free to send suggestions or comments in the Suggestion Box of the JB2A discord, or log an issue on the GitHub page for issues or improvement suggestions.**


