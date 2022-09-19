const dualAttach = {
    video: {
        dbSection: "range",
        menuType: "weapon",
        animation: "arrow",
        variant: "regular",
        color: "regular",
    },
    options: {
        below: false,
        playbackRate: 1,
    },
    sound: { enable: false }
}

const teleportation = {
    start: {
        dbSection: "static",
        menuType: "spell",
        animation: "mistystep",
        variant: "01",
        color: "blue",
        options: {

        },
    },
    between: {
        dbSection: "range",
        enable: false,
        menuType: "weapon",
        animation: "arrow",
        variant: "regular",
        color: "regular",
        options: {

        },
    },
    end: {
        dbSection: "static",
        menuType: "spell",
        animation: "mistystep",
        variant: "02",
        color: "blue",
        options: {

        },
    },
    options: {
        range: 30,
        hideFromPlayers: false,
        measureType: "alternating",
    },
    sound: {enable: false}
}

const thunderwave = {
    color: "blue",
    sound: {enable: false},
    options: {
        below: false,
        removeTemplate: false,
        scaleX: 1,
        scaleY: 1,
        repeat: 1,
        delay: 250,
        opacity: 1,
    }
}

const proToTemp = {
    projectile: {
        dbSection: "range",
        menuType: "weapon",
        animation: "arrow",
        variant: "regular",
        color: "regular",
        enableCustom: false,
        customPath: "",
        options: {},
        sound: {enable: false}
    },
    preExplosion: {
        dbSection: "static",
        menuType: "spell",
        animation: "curewounds",
        variant: "01",
        color: "blue",
        options: {},
        enable: false,
        sound: {enable: false}
    },
    explosion: {
        dbSection: "static",
        menuType: "spell",
        animation: "curewounds",
        variant: "01",
        color: "blue",
        options: {},
        sound: {enable: false}
    },
    afterImage: {
        enable: false,
        customPath: "",
        options: {}
    }
}

const dual = {
    intro: {
        options: {},
        sound: {enable: false}
    },
    loop: {
        options: {}
    }
}

const triple = {
    intro: {
        options: {},
        sound: {enable: false}
    },
    loop: {
        options: {}
    },
    outro: {
        options: {},
        sound: {enable: false}
    }
}
export { dualAttach, teleportation, thunderwave, proToTemp, dual, triple }