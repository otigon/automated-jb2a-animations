export function debug(...args) {
    if (game.settings.get("autoanimations", "debug")) {
        console.log(`DEBUG | Automated Animations |`, ...args);
    }
}

// Credit to Wasp for these functions
export function custom_notify(message, consoleLog = false) {
    message = `Automated Animations | ${message}`;
    if (consoleLog) {
        console.log(`%c${message.replace("<br>", "\n")}`, 'color: orange');
    } else {
        ui.notifications.notify(message);
        console.log(message.replace("<br>", "\n"));
    }
}

export function custom_warning(warning, notify = false, ...args) {
    warning = `Automated Animations | ${warning}`;
    if (notify) {
        ui.notifications.warn(warning);
    }
    console.warn(warning.replace("<br>", "\n"), ...args);
}

export function custom_error(error, notify = true) {
    error = `Automated Animations | ${error}`;
    if (notify) {
        ui.notifications.error(error);
    }
    return new Error(error.replace("<br>", "\n"));
}

export function howToDelete(type) {
    if (game.settings.get("autoanimations", "noTips")) { return; }
    let disableTips = "You can disabled these tips in the Automated Animations module settings"
    switch (type) {
        case 'overheadtile':
            custom_notify(`This is an OVERHEAD Tile. Use the Tile Foreground Layer to remove the Animation. ${disableTips}`)
            break;
        case 'groundtile':
            custom_notify(`This is an GROUND Tile. Use the Tile Layer to remove the Animation. ${disableTips}`)
            break;
        case 'sequencerground':
            custom_notify(`This is a SEQUENCER Persistent Effect. Use the Sequencer Effect Manager to remove the Animation. ${disableTips}`)
            break
    }
}
