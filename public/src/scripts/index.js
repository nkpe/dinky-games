'use strict';
console.log("index.js working");

import { mazeGame } from "./maze-game/maze.js";

const main = document.getElementById("main");

const hideAllSections = () => {
    const allSections = document.getElementsByTagName("section");
    for (let section of allSections) {
        section.style.display = "none";
    };
};

const hashRouting = () => {
        if (location.hash === "#maze"){
            hideAllSections();
            mazeGame(main);
        } else if (location.hash = "#home"){
            hideAllSections();
        };
        console.log("navEvents working")
    ;
};

hashRouting();
window.addEventListener('hashchange', hashRouting);
// window.addEventListener('reload', hashRouting);
window.addEventListener('load', () => {
    if (location.hash === ''){
        location.hash = "#home";
    }
    hashRouting();
});