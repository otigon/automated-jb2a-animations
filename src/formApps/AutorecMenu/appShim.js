import { showMainMenu } from './showMainUI.js';

export default class AutorecShim extends FormApplication
{
   /**
    * @inheritDoc
    */
   constructor(options = {})
   {
      super({}, options);

      showMainMenu();
   }

   async _updateObject(event, formData) {}
   render() { this.close(); }
}
