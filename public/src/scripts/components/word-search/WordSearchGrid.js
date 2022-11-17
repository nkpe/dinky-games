'use strict';

import {animals} from '../../../data/wordsearch-data.js';

//variables to store user selection later on 
let wordsArray = animals;
let numOfWords = 5;

//letter logic 
const randomWords = (words) => {
    const shuffler = (words) => {
        return words.sort(() => Math.random() - 0.5);
    };

    let shuffled = shuffler(wordsArray);

    let selectedWords = shuffled.slice(0, numOfWords);
    return selectedWords;
}

randomWords(wordsArray);


// Create grid square
// duplicate grid square X times across and Y times down

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