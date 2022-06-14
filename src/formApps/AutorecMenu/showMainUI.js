import AAAutorecMenu from "./aaAutorecMenu.js";

let mainAutorecMenu;

export function showMainMenu()
{
   mainAutorecMenu = mainAutorecMenu ? mainAutorecMenu : new AAAutorecMenu();
   mainAutorecMenu.render(true, { focus: true });

   return mainAutorecMenu;
}
