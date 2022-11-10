'use strict';
console.log("index.js working");

import MazeGame from "./components/maze-game/MazeGame.js";
import HomePage from "./components/home-page/HomePage.js";
import WordSearch from "./components/word-search/WordSearch.js";

const main = document.getElementById("main");

const hideAllSections = () => {
    const allSections = document.getElementsByTagName("section");
    for (let section of allSections) {
        section.remove();
    };
};

const hashRouting = () => {
    hideAllSections();
    if (location.hash === "#maze") {
        MazeGame(main);
    } else if (location.hash === "#home") {
        HomePage(main);
    } else if (location.hash === "#word-search"){
        WordSearch(main);
    };
};

hashRouting();
window.addEventListener('hashchange', hashRouting);

window.addEventListener('load', () => {
    if (location.hash === '') {
        location.hash = "#home";
    }
    hashRouting();
});

export { main };