'use strict';

import {createGrid} from './WordSearchGrid.js'

const layout = {
    height: 400,
    width: 400,
    rows: 10,
    columns: 10
}

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