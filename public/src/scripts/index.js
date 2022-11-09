'use strict';
console.log("index.js working");

import { mazeGame } from "./components/maze-game/MazeGame.js";

import HomePage  from "./components/home-page/home-page.js";

const main = document.getElementById("main");

const hideAllSections = () => {
    const allSections = document.getElementsByTagName("section");
    for (let section of allSections) {
        section.remove();
    };
};

const hashRouting = () => {
        if (location.hash === "#maze"){
            hideAllSections();
            mazeGame(main);
        } else if (location.hash = "#home"){
            hideAllSections();
            HomePage();
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

export {main};