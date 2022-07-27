import AutorecMenuApp from "./AutorecMenuApp.js";

let mainAutorecMenu;

export function showAutorecMenu()
{
   mainAutorecMenu = mainAutorecMenu ? mainAutorecMenu : new AutorecMenuApp();
   mainAutorecMenu.render(true, { focus: true });

   return mainAutorecMenu;
}
