'use strict';

console.log("js file working");

import { mazeLayout } from './maze-array.js';

let main = document.getElementById("main");
let mazeImage = "src/imgs/maze-map.png";
let canvas = document.getElementById("maze-canvas");

let mazeGameBoard = `<div id="maze-board-wrapper">` +
    `<canvas id="maze-canvas">` +
    `</canvas>` +
    `</div>`;

let mazeDraw = () => {
    canvas = document.getElementById("maze-canvas");
    let c = canvas.getContext("2d");
    let cHeight = canvas.height = 400;
    let cWidth = canvas.width = 400;
    let gridHeight = cHeight / 10;
    let gridWidth = cWidth / 10;
    c.fillStyle = "white";
    // c.strokeStyle = "black";
    c.rect(0, 0, canvas.width, canvas.height);
    
    //User 'coin'
    let xCircle = 20;
    let yCircle = 380;

    //User key input
    const input = () => {
        
    }


    let mazeLayoutFunction = (arr1) => {
        c.strokeStyle = "black";
        arr1 = arr1.reverse();
        for (let i = 0; i < arr1.length; i++) {
            let row = i;
            let y = row * 40;
            let arr2 = arr1[i];
            console.log("arr2", arr2)
            //Checking maze boundaries in maze array
            for (let j = 0; j < arr2.length; j++) {
                let rectSection = () => {
                    // small squares 40x40
                    let x = j * 40;
                    // c.fillStyle = "green";
                    //create square spaces in maze
                    c.fillRect(x, y, gridWidth, gridHeight);
                    let arr3 = arr2[j];
                    console.log(arr3);

                    // Draw & Set Maze boundaries                    
                    if (arr3.includes("T")) {
                        c.beginPath();
                        c.moveTo(x, y);
                        c.lineTo(x + gridWidth, y);
                        c.stroke();
                        console.log(i, j, "contains T");
                    };

                    if (arr3.includes("R")) {
                        c.beginPath();
                        c.moveTo(x + gridWidth, y);
                        c.lineTo(x + gridWidth, y + gridHeight);
                        c.stroke();
                        console.log(i, j, "contains R");
                    };

                    if (arr3.includes("B")) {
                        c.beginPath();
                        c.moveTo(x, y + gridHeight);
                        c.lineTo(x + gridWidth, y + gridHeight);
                        c.stroke();
                        console.log(i, j, "contains B");
                    };

                    if (arr3.includes("L")) {
                        c.beginPath();
                        c.moveTo(x, y);
                        c.lineTo(x, y + gridHeight);
                        c.stroke();
                        console.log(i, j, "contains L");
                    };
                };
                rectSection();

            };
        }
    };

    mazeLayoutFunction(mazeLayout);
    //Maze navigation by user input
    let userCircle = () => {
        c.beginPath();
        c.fillStyle = "green";
        c.arc(xCircle, yCircle, 10, 0, 2 * Math.PI);
        c.fill();
    };

    userCircle();
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



console.dir(canvas)