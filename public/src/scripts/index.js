'use strict';
console.log("index.js working");


import { mazeGame } from "./maze-game/maze.js";

// User clicks - maze-game.js needs to run function, before setting the section to display: block. 

const main = document.getElementById("main");
const navMaze = document.getElementById("nav-maze");
// const navSolitare = document.getElementById("nav-maze");

const hideAllSections = () => {
    const allSections = document.getElementsByTagName("section");
    for (let section of allSections) {
        section.style.display = "none";
    };
};



const navEvents = () => {

    window.addEventListener('hashchange', () => {
        if (location.hash === "#maze"){
            hideAllSections();
            mazeGame(main);
        } else if (location.hash = "#home"){
            hideAllSections();
        }       
    });
};

navEvents();