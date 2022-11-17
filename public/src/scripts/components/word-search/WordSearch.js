'use strict';

import {layout, createGrid} from './WordSearchGrid.js'


const WordSearch = (main) => {
    //create page section
    const section = document.createElement('section');
    section.id = "word-search-page";
    main.appendChild(section);

     
    const wordSearchOuter = document.createElement('div');
    wordSearchOuter.id = "word-search-outer";
    wordSearchOuter.style.height = `${layout.height}px`;
    wordSearchOuter.style.width = `${layout.width}px`;
    wordSearchOuter.style.backgroundColor = "yellow";
    section.appendChild(wordSearchOuter);

    createGrid(wordSearchOuter, layout);

}

export default WordSearch;
