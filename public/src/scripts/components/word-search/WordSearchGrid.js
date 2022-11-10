'use strict';

// Create grid square
// duplicate grid square X times across and Y times down
// 



const createGrid = () => {
    console.log("createGrid working");

    const square = document.createElement('div');
    square.style.height = "400px";
    square.style.width = "400px";
    square.style.backgroundColor = "purple";
}

export {createGrid};