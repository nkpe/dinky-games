'use strict';

// Create grid square
// duplicate grid square X times across and Y times down
// 


const createSquares = (outer, squareID, layout) => {
    const square = document.createElement('div');
    square.id = `${squareID}`;
    square.className = 'square';
    square.style.height = `${layout.height / layout.rows}px`;
    square.style.width = `${layout.width / layout.columns}px`;
    square.style.backgroundColor = "purple";
    outer.appendChild(square)
}

const createGrid = (outer, layout)=> {
    console.log("createGrid working");
    for ( let i=0; i<100; i++){
        createSquares(outer, i, layout);
    };
};

export {createGrid};