
const melee = {
    explosion: setStatic(),
    label: "",
    levels3d: {
        data: {color01: "#FFFFFF", color02: "#FFFFFF"},
        sound: setSound(),
    },
    macro: {},
    meleeSwitch: {
        options: {},
        video: { menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
        sound: setSound(),
    },
    menu: 'melee',
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "melee", menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
    },
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const range = {
    explosion: setStatic(),
    label: "",
    levels3d: {
        data: {color01: "#FFFFFF", color02: "#FFFFFF"},
        sound: setSound(),
    },
    macro: {},
    menu: 'range',
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "range",menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
    },
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const ontoken = {
    explosion: setStatic(),
    label: "",
    levels3d: {
        data: {color01: "#FFFFFF", color02: "#FFFFFF"},
        sound: setSound(),
    },
    macro: {},
    menu: 'ontoken',
    primary: {
        options: {playOn: "default"},
        sound: setSound(),
        video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },       
    },
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const templatefx = {
    label: "",
    macro: {},
    menu: "templatefx",
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "templatefx", menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blue' },
    },
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const aura = {
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    menu: 'ontoken',
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },       
    },
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const preset = {
    label: "",
    presetType: "",
    soundOnly: {
        sound: {}
    },
    macro: {},
}

const aefx = {
    label: "",
    activeEffectType: "",
    source: setStatic(),
    soundOnly: { sound: setSound()},
    macro: {},
}

function setStatic() {
    return {
        options: {},
        sound: setSound(),
        video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },       
    }
}
function setSound() {
    return {
        delay: 0,
        enable: false,
        file: "",
        startTime: 0,
        volume: 1,
    }
}

function setPrimary() {

}
export { melee, range, ontoken, templatefx, aura, preset, aefx }