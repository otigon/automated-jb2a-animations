export default class SequencerApplication extends FormApplication {

    constructor() {
        super();
    }

    setUpSequence(){
        this.sequence = {
            application: this,
            sections: [],

            addSection: function(){
                this.sections.push({
                    type: "Effect",
                    data: {
                        "target": "Self",
                        "file": ""
                    }
                });
            },
            get freshData(){
                return JSON.parse(JSON.stringify(this.sections));
            },
            moveUp(index){
                let swapIndex = index === 0 ? this.sections.length-1 : index-1;
                this.swap(index, swapIndex);
            },
            moveDown(index){
                let swapIndex = (index+1) % this.sections.length;
                this.swap(index, swapIndex);
            },
            swap(index, swapIndex){
                [this.sections[index], this.sections[swapIndex]] = [this.sections[swapIndex], this.sections[index]];
            },
            setFile(evt){
                this.sections[evt.detail.index].data.file = evt.detail.url;
            }
        }
        return this.sequence;
    }

    /** @override */
    
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: "Sequencer",
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/sequencer-template.html',
            classes: ["dialog"],
            width: 900,
            height: 425,
        });
    }

    showFilePicker(inIndex, inType){
        new FilePicker({
            type: inType,
            callback: (selectedUrl) => {
                window.dispatchEvent(
                    new CustomEvent('sequencer-application-selected-url', {
                        detail: {
                            index: inIndex,
                            url: selectedUrl
                        }
                    })
                );
            }
        }).browse();
    }

    /* -------------------------------------------- */


    async _updateObject(event, formData) {
        console.log(this.sequence.freshData);
    }

}
