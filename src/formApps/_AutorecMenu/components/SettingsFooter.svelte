<script>
    import { onDestroy } from "svelte";

    let imageEl;

    Hooks.on("hotbarDrop", hotbarDrop);

    onDestroy(() => Hooks.off("hotbarDrop", hotbarDrop));

    function hotbarDrop(hotbar, data, slot) {
        let handled = false;

        if (data?.type === "AutomaticAnimationMacro") {
            handled = true;

           // Wrap the handling code in an async IIFE.
           (async () => {

              // The macro script data to open the quest via the public QuestAPI.
              const command = `Hooks.call("AA.Open.AutorecSetting");`;

              const macroData = {
                 name: "A-A Automatic Recognition Menu",
                 type: "script",
                 command,
                 img: "modules/autoanimations/assets/icons/aa-icon.webp"
              };

              // Search for an already existing macro with the same command.
              let macro = game.macros.contents.find((m) => m.command === command);

              // If not found then create a new macro with the command.
              if (!macro) {
                 macro = await Macro.create(macroData, { displaySheet: false });
              }

              // Assign the macro to the hotbar.
              await game.user.assignHotbarMacro(macro, slot);
           })();
        }

        return handled;
    }

    function onDragStart(event) {
       const dataTransfer = { type: "AutomaticAnimationMacro" };
       event.dataTransfer.dropEffect = "move";
       event.dataTransfer.setDragImage(imageEl, 18, 18);
       event.dataTransfer.setData('text/plain', JSON.stringify(dataTransfer));
    }
</script>

<div on:dragstart={onDragStart}
     role="banner"
     draggable=true
     title="Drag to hot bar">
    <img bind:this={imageEl}
         on:dragstart={onDragStart}
         draggable=true
         src="modules/autoanimations/assets/icons/aa-icon.webp" alt="Macro">
    Automatic Recognition Menu Macro
</div>

<style>
    div {
        display: flex;
        background: rgb(159, 160, 160);
        border-top: 1px solid rgb(100, 100, 100);
        height: 40px;
        justify-content: center;
        align-items: center;

        transition: background .5s;
        cursor: grab;
        font-weight: bold;
    }

    div:hover {
        text-shadow: 0 0 3px rgba(255, 0, 0, 0.4);
        background: rgb(145, 145, 145);
    }

    img {
        height: 36px;
        width: 36px;
        margin-right: 0.5em;
        border-radius: 0.25em;
    }
</style>
