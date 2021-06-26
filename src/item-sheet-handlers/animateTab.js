export class MyFormApplication extends FormApplication {
    constructor(exampleOption) {
      super();
      this.exampleOption = exampleOption;
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['form'],
        popOut: true,
        template: './modules/autoanimations/src/item-sheet-handlers/my-templates/myFormApplication.html',
        id: 'my-form-application',
        title: 'My FormApplication',
      });
    }
  
    getData() {
      // Send data to the template
      return {
        msg: this.exampleOption,
        color: 'red',
      };
    }
  
    activateListeners(html) {
      super.activateListeners(html);
    }
  
    async _updateObject(event, formData) {
      console.log(formData.exampleInput);
    }
  }
  
  export default MyFormApplication;
