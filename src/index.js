import { displayAbout } from "./initial.js";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact.js";
import "./style.css";

displayAbout.content();
document
  .querySelector("#about")
  .addEventListener("click", displayAbout.content);
document.querySelector("#menu").addEventListener("click", displayMenu.content);
document
  .querySelector("#contact")
  .addEventListener("click", displayContact.content);
