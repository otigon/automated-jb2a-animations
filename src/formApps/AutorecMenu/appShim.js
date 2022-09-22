import { showMainMenu } from './showMainUI.js';
import { showAutorecMenu } from '../_AutorecMenu/showUI.js'

export default class AutorecShim extends FormApplication
{
   /**
    * @inheritDoc
    */
   constructor(options = {})
   {
      super({}, options);

      showAutorecMenu();
   }

   async _updateObject(event, formData) {}
   render() { this.close(); }
}
