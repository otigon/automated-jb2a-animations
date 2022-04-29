export class PositionChangeSet
{
   constructor()
   {
      this.left = false;
      this.top = false;
      this.width = false;
      this.height = false;
      this.maxHeight = false;
      this.maxWidth = false;
      this.minHeight = false;
      this.minWidth = false;
      this.zIndex = false;
      this.transform = false;
      this.transformOrigin = false;
   }

   hasChange()
   {
      return this.left || this.top || this.width || this.height || this.maxHeight || this.maxWidth || this.minHeight ||
       this.minWidth || this.zIndex || this.transform || this.transformOrigin;
   }

   set(value)
   {
      this.left = value;
      this.top = value;
      this.width = value;
      this.height = value;
      this.maxHeight = value;
      this.maxWidth = value;
      this.minHeight = value;
      this.minWidth = value;
      this.zIndex = value;
      this.transform = value;
      this.transformOrigin = value;
   }
}
