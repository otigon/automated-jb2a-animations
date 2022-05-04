import AAAutorecMenu from "./aaAutorecMenu.js";

export default class AutorecShim extends FormApplication
{
   /**
    * @inheritDoc
    */
   constructor(options = {})
   {
      super({}, options);

      new AAAutorecMenu().render(true, { focus: true });
   }

   async _updateObject(event, formData) {}
   render() { this.close(); }
}