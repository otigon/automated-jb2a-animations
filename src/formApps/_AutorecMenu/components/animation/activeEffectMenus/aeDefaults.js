const dual = {
    intro: {
        options: {},
        sound: {enable: false}
    },
    loop: {
        options: {}
    },
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

const onToken = {

    video: {
        dbSection: "static",
        menuType: "spell",
        animation: "curewounds",
        variant: "01",
        color: "blue",
        enableCustom: false,
        customPath: "",
    },
    options: {playOn: "source"},
    sound: {enable: false},
}

const aura = {
    video: {
        dbSection: "static",
        menuType: "spell",
        animation: "curewounds",
        variant: "01",
        color: "blue",
        enableCustom: false,
        customPath: "",
    },
    options: {},
    sound: {enable: false},
}

export { dual, triple, onToken, aura }