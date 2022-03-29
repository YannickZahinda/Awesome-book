import {myLocalDate} from "./modules/time.js";
import { MainUI } from "./modules/app.js";

setInterval(myLocalDate, 1000);

//  get all books
window.addEventListener('load', () => {
    MainUI.displayBooks();
  });
  