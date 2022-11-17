'use strict';

import {animals} from '../../../data/wordsearch-data.js';

const layout = {
    height: 400,
    width: 400,
    rows: 10,
    columns: 10
}


//variables to store user selection later on 
let wordsArray = animals;
let numOfWords = 5;

//letter logic 
const randomWords = (words) => {
    let shuffled = words.sort(() => Math.random() - 0.5);

    let selectedWords = shuffled.slice(0, numOfWords);
    return selectedWords;
}



//create 2D array to represent wordsearch cells. 
const wordSearch2D = (layout) => {
    //outer array = layout.rows 
    //inner array = layout.columns
    const array2D = [];
    for (let i=0; i < layout.rows; i++){
        let rowArray = [];
        console.log(layout.columns)
        for (let j=0; j<layout.columns; j++){
            rowArray.push([""])
        };
        array2D.push(rowArray);
    };
    return array2D;
};

let characterPositions = wordSearch2D(layout);
console.log(characterPositions)

//Take randomWords and added characters to array2D 

const characterAssign = (characterPositions) => {
    // rows - arr[y][x+1]
    // columns - arr[y+1][x]
    // Diagonal - arr[y+1][x+1]

    const selectedWords = randomWords(wordsArray);
    selectedWords.forEach(element => {
        
    });

    let randomNum = Math.random()
    // if(randomNum <= 0.33){
    //     // arr[y][x+1]
    // } else if (randomNum > 0.33 && randomNum < 0.66){
    //     // columns - arr[y+1][x]
    // } else if (randomNum => 0.66 && randomNum <= 1){
    //     // Diagonal - arr[y+1][x+1]
    // }
};

characterAssign(characterPositions)



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
    for (let i=0; i<100; i++){
        createSquares(outer, i, layout);
    };
};

export {layout, createGrid, wordSearch2D};