async function mergeVersion01(data) {
    let currentAutorec = data;
    
    const staticObject = currentAutorec.static;
    if (staticObject) {
        const staticLength = Object.keys(staticObject).length;
        for (var i = 0; i < staticLength; i++) {
            switch (staticObject[i].animation) {
                case 'curewounds':
                case 'generichealing':
                case 'tollthedead':
                    staticObject[i].staticOptions = 'staticSpells';
                    break;
                case 'bite':
                case 'claw':
                    staticObject[i].staticOptions = 'creature';
                    break;
                default:
                    staticObject[i].staticOptions = 'explosion';
            }
        }
    }
    const templates = currentAutorec.templates;
    if (templates) {
        const templateLength = Object.keys(templates).length;
        for (var i = 0; i < templateLength; i++) {
            switch (true) {
                case templates[i].persist:
                    if (templates[i].overhead) {
                        templates[i].persistType = 'overheadtile';
                    } else {
                        templates[i].persistType = 'sequencerground';
                    }
                    break;
            }
        }
    }
    currentAutorec.version = 1;
    return currentAutorec;
}

export {mergeVersion01}