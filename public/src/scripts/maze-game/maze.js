'use strict';

console.log("js file working");

import { mazeLayout } from './maze-array.js';

let main = document.getElementById("main");
let mazeImage = "src/imgs/maze-map.png";

let mazeGameBoard = `<div id="maze-board-wrapper">` +
    `<canvas id="maze-canvas">` +
    `</canvas>` +
    `</div>`;

let mazeDraw = () => {
    let canvas = document.getElementById("maze-canvas");
    let c = canvas.getContext("2d");
    canvas.height = 400;
    canvas.width = 400;
    c.fillStyle = "pink";
    c.fillRect(0, 0, canvas.width, canvas.height);

    let mazeLayoutFunction = (arr1) => {

        for (let i = 0; i < arr1.length; i++) {
            let row = i;
            let y = row * 40;
            
            
            let arr2 = arr1[i];

            //Checking maze boundaries in maze array
            for (let j=0; j<arr2.length; j++){
                let rectSection = () => {
                    // small squares 40x40
                    let x = j * 40;
                    c.fillStyle = "green";
                    //create square spaces in maze
                    c.fillRect(x, y, canvas.height - (canvas.height / 10), (canvas.width / 10), (canvas.height / 10));
                };
                rectSection();



                let arr3 = arr2[i];
                switch (true) {
                    case arr3.includes("T"):
                        // console.log(j, "contains T");
                    case arr3.includes("R"):
                        // console.log(j, "contains R");
                    case arr3.includes("B"):
                        // console.log(j, "contains B");
                    case arr3.includes("L"):
                        // console.log(j, "contains L");
                        break;
                    default:
                        console.log("err in mazeLayoutFunction switch");
                    }
            };
        }
    };
    mazeLayoutFunction(mazeLayout);

};


let MazeGame = () => {
    let mazeSection = "<section id='maze-section'>" +
        "<h1>Escape the Maze</h1>" +
        mazeGameBoard +
        "</section>";
    main.innerHTML = mazeSection;
};

MazeGame();
mazeDraw();




