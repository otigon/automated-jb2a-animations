import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

const melee = {
    explosion: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    meleeSwitch: {
        options: {},
        video: { menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
        sound: {},
    },
    menu: 'melee',
    primary: {
        options: {},
        sound: {},
        video: { dbSection: "melee", menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
    },
    source: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    target: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    soundOnly: {
        sound: {}
    }
}

const range = {
    explosion: {
        options: {},
        sound: {},
        video: { dbSection: "static",menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    menu: 'range',
    primary: {
        options: {},
        sound: {},
        video: { dbSection: "range",menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
    },
    source: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    target: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    soundOnly: {
        sound: {}
    }
}

const ontoken = {
    explosion: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    menu: 'ontoken',
    primary: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },       
    },
    source: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    target: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    soundOnly: {
        sound: {}
    }
}

const templatefx = {
    label: "",
    macro: {},
    menu: "templatefx",
    primary: {
        options: {},
        sound: {},
        video: { dbSection: "templatefx", menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blue' },
    },
    source: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    target: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    soundOnly: {
        sound: {}
    }
}

const aura = {
    explosion: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    label: "",
    levels3d: {
        data: {},
    },
    macro: {},
    menu: 'ontoken',
    primary: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    source: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    target: {
        options: {},
        sound: {},
        video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
    },
    soundOnly: {
        sound: {}
    }
}

const preset = {
    id: uuidv4(),
    label: "",
    presetType: "",
}

export { melee, range, ontoken, templatefx, aura, preset }