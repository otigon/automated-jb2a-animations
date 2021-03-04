Hooks.once('ready', async function () {
    if (game.settings.get("automated-jb2a-animations","runonlyonce") == false) {
        let d = new Dialog({
            title: "Module Activated !",
            content: `<div style="text-align: justify;"><h2>Welcome to the Automated Animation DnD5e Module</h2><p><p>You need to have the JB2A Module INSTALLED for this module to work</p><p>Get the Free JB2A module through Foundry OR grab the JB2A Patreon package <a href="https://www.patreon.com/JB2A">here</a></p><p>Please read the instructions on the <a href="https://github.com/otigon/automated-jb2a-animations">GitHub</a> to see how this module works. There is a <a href="https://www.youtube.com/watch?v=psYt4IdfIVI">tutorial video</a> link there as well.</p><p>For Non-Standard cases, a quick reference PDF is located <a href="https://github.com/otigon/automated-jb2a-animations/blob/main/PDF/Keywords%20and%20Colors.pdf">here</a></p><p>For questions, feel free to reach out on the JB2A discord or log an issue on the GitHub page!</p>`,
            buttons: {
                one: {
                    icon: '<i class="fas fa-clipboard-list"></i>',
                    label: "OK",                    
                },
                two: {
                    icon: '<i class="fas fa-clipboard-check"></i>',
                    label: "Don't show again",
                    callback: () => game.settings.set("automated-jb2a-animations", "runonlyonce", true)                     
                },               
            },
                  
        });
        d.render(true);
    }
})
