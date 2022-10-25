'use strict';

console.log("js file working");

import { mazeLayout } from './maze-array.js';
const main = document.getElementById("main");
const mazeImage = "src/imgs/maze-map.png";
let canvas = document.getElementById("maze-canvas");

let mazeDraw = () => {
    // Canvas 
    canvas = document.getElementById("maze-canvas");
    let ctx = canvas.getContext("2d");
    let cHeight = canvas.height = 400;
    let cWidth = canvas.width = 400;
    ctx.fillStyle = "white";
    ctx.rect(0, 0, canvas.width, canvas.height);

    //Grid inside maze
    let gridHeight = cHeight / 10;
    let gridWidth = cWidth / 10;

    //User 'coin'
    let xCircle = 20;
    let yCircle = 380;
    let rCircle = gridHeight / 4;

    let prevXCircle = xCircle;
    let prevYCircle = yCircle;


    let mazeLayoutFunction = (arr1) => {
        ctx.strokeStyle = "black";
        arr1 = arr1.reverse();
        for (let i = 0; i < arr1.length; i++) {
            let row = i;
            let y = row * 40;
            let arr2 = arr1[i];
            //Checking maze boundaries in maze array
            for (let j = 0; j < arr2.length; j++) {
                let rectSection = () => {
                    // small squares 40x40
                    let x = j * 40;

                    //create square spaces in maze
                    ctx.fillRect(x, y, gridWidth, gridHeight);
                    let arr3 = arr2[j];

                    // Draw & Set Maze boundaries                    
                    if (arr3.includes("T")) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + gridWidth, y);
                        ctx.stroke();
                        // console.log(i, j, "contains T");
                    };

                    if (arr3.includes("R")) {
                        ctx.beginPath();
                        ctx.moveTo(x + gridWidth, y);
                        ctx.lineTo(x + gridWidth, y + gridHeight);
                        ctx.stroke();
                        // console.log(i, j, "contains R");
                    };

                    if (arr3.includes("B")) {
                        ctx.beginPath();
                        ctx.moveTo(x, y + gridHeight);
                        ctx.lineTo(x + gridWidth, y + gridHeight);
                        ctx.stroke();
                        // console.log(i, j, "contains B");
                    };

                    if (arr3.includes("L")) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y + gridHeight);
                        ctx.stroke();
                        // console.log(i, j, "contains L");
                    };
                };
                rectSection();

            };
        }
    };

    //User key input
    const keys = {
        w: {
            pressed: false
        },
        a: {
            pressed: false
        },
        d: {
            pressed: false
        },
        s: {
            pressed: false
        }
    }

    let lastKey = "";




    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case "w":
                keys.w.pressed = true;
                lastKey = "w";
                console.log("w down");
                break;
            case "d":
                keys.d.pressed = true;
                lastKey = "d";
                break;
            case "s":
                keys.s.pressed = true;
                lastKey = "s";
                break;
            case "a":
                keys.a.pressed = true;
                lastKey = "a";
                break;
        };

        if (keys.w.pressed && lastKey === "w") {
            lastCoin();
            if (yCircle > 20 && yCircle <= 380) {
                yCircle = yCircle - 40
            };
            console.log("yCircle", yCircle);
            userCircleClear();
            userCircleCreate();

        } else if (keys.d.pressed && lastKey === "d") {
           lastCoin();
            if (xCircle >= 20 && xCircle < 380) {
                xCircle = xCircle + 40;
            };
            console.log("xCircle", xCircle);
            userCircleClear();
            userCircleCreate();
        } else if (keys.s.pressed && lastKey === "s") {
           lastCoin();
            if (yCircle >= 20 && yCircle < 380) {
                yCircle = yCircle + 40;
            };
            userCircleClear()
            userCircleCreate();

        } else if (keys.a.pressed && lastKey === "a") {
            lastCoin();
            if (xCircle > 20 && xCircle <= 380) { 
                xCircle = xCircle - 40;
            };
            userCircleClear();
            userCircleCreate();
        };
    });

    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case "w":
                keys.w.pressed = false;
                console.log("w up")
                break;
            case "d":
                keys.d.pressed = false;
                break;
            case "s":
                keys.s.pressed = false;
                break;
            case "a":
                keys.a.pressed = false;
                break;
        }
    });

    mazeLayoutFunction(mazeLayout);
    
    //Track last coin
    const lastCoin = () => {
        prevYCircle = yCircle;
        prevXCircle = xCircle;
    };

    //Clear last user coin
    const userCircleClear = () => {
        ctx.clearRect(prevXCircle - 10, prevYCircle - 10, 20, 20);
        console.log("clearRect " + "x " +  prevXCircle + " y " + prevYCircle)
    };
    //Maze navigation by user input
    const userCircleCreate = () => {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(xCircle, yCircle, rCircle, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        // requestAnimationFrame(userCircle);
        console.log("user circle y ", yCircle, "prev circle y", prevYCircle + 40)
    };

    userCircleCreate();
};

const MazeGame = () => {
    let mazeGameBoard = `<div id="maze-board-wrapper">` +
        `<canvas id="maze-canvas">` +
        `</canvas>` +
        `</div>`;
    let mazeSection = "<section id='maze-section'>" +
        "<h1>Escape the Maze</h1>" +
        mazeGameBoard +
        "</section>";
    main.innerHTML = mazeSection;
};

MazeGame();
mazeDraw();



console.dir(canvas)