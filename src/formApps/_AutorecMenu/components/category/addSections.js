const melee = {
    explosion: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
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
        video: { menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
        dbSection: "melee",
    },
    source: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    target: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    soundOnly: {
        sound: {}
    }
}

const range = {
    explosion: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
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
        video: { menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
        dbSection: "range",
    },
    source: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    target: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    soundOnly: {
        sound: {}
    }
}

const ontoken = {
    explosion: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
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
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    source: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    target: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
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
        video: { menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blue' },
        dbSection: "templatefx",
    },
    source: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    target: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    soundOnly: {
        sound: {}
    }
}

const aura = {
    explosion: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
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
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    source: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    target: {
        options: {},
        sound: {},
        video: { menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
        dbSection: "static",
    },
    soundOnly: {
        sound: {}
    }
}

export { melee, range, ontoken, templatefx, aura }