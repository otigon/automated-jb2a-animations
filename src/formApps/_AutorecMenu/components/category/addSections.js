import * as common from "../../store/default-data/common";
const melee = {
    id: "",
    label: "",
    levels3d: common.levels3d(),
    macro: {},
    meleeSwitch: {
        options: {},
        sound: common.sound(),
        video: { dbSection: "range", menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
    },
    menu: 'melee',
    primary: {
        options: {},
        sound: common.sound(),
        video: { dbSection: "melee", menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
    },
    secondary: common.secondary(),
    soundOnly: { sound: common.sound()},
    source: common.source(),
    target: common.target(),
}

const range = {
    id: "",
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
    secondary: setStatic(),
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const ontoken = {
    id: "",
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
    secondary: setStatic(),
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const templatefx = {
    id: "",
    label: "",
    macro: {},
    menu: "templatefx",
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "templatefx", menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blue' },
    },
    secondary: setStatic(),
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const aura = {
    id: "",
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    menu: 'aura',
    primary: {
        options: {},
        sound: setSound(),
        video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },       
    },
    secondary: setStatic(),
    source: setStatic(),
    target: setStatic(),
    soundOnly: { sound: setSound()},
}

const preset = {
    id: "",
    label: "",
    presetType: "",
    soundOnly: {
        sound: {}
    },
    macro: {},
    menu: 'preset',
}

const aefx = {
    id: "",
    label: "",
    activeEffectType: "",
    macro: {},
    menu: 'aefx',
    secondary: setStatic(),
    soundOnly: { sound: setSound()},
    source: setStatic(),
    target: setStatic(),
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

export { melee, range, ontoken, templatefx, aura, preset, aefx }