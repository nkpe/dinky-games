'use strict';

console.log("js file working");

import {mazeLayout} from './maze-array.js';

let main = document.getElementById("main");
let mazeImage = "src/imgs/maze-map.png";

let mazeGameBoard = `<div id="maze-board-wrapper">` +
                    `<canvas id="maze-canvas">`+
                    `</canvas>` +
                    `</div>`;

let mazeDraw = () => {
    let canvas = document.getElementById("maze-canvas");
    let c = canvas.getContext("2d");
    canvas.height = 400;
    canvas.width = 400;
    c.fillStyle = "pink";
    c.fillRect(0, 0, canvas.width, canvas.height);
    

    let rectSection = () => {
        c.fillStyle = "green";
        c.fillRect(0, canvas.height - (canvas.height / 10), (canvas.width / 10), (canvas.height / 10));
        console.log(canvas.width, canvas.height)
    };
   
};


let MazeGame = () => {
    let mazeSection =   "<section id='maze-section'>" +
                        "<h1>Escape the Maze</h1>" +
                        mazeGameBoard +
                        "</section>";
    main.innerHTML = mazeSection;
};

MazeGame();
mazeDraw();


let mazeLayoutFunction = (arr1) => {
    for (let i=0; i<arr1.length; i++){
        let arr2 = arr1[i];
        switch(true){
            case arr2.includes("T"):
                console.log("contains T");
            case arr2.includes("R"):
                console.log("contains R");
            case arr2.includes("B"):
                console.log("contains B");
            case arr2.includes("L"):
                console.log("contains L");
                break;
            default:
                console.log("err in mazeLayoutFunction switch"); 
    };
}};

mazeLayoutFunction(mazeLayout);