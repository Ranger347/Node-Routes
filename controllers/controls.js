import { guide } from "./methods.js";
import { __dirname } from "../app.js";

//You can specifically send text here using this:
export const getIndex = (req, res) => {
    res.send("This is the initial home directory where all the links to other directories are stored. :)");
}

//You can also call other methods from other files to do a task:
export const getPage1 = (req, res) => {
    res.send(guide());
}

//You can also send files. 
export const getPage2 = (req, res) => {
    //__dirname is the directory of the parent (app.js)
    res.sendFile(`${__dirname}/index/index.html`);
}