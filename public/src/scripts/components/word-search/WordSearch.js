'use strict';

import {createGrid} from './WordSearchGrid.js'

const WordSearch = (main) => {
    const section = document.createElement('section');
    section.className = "word-search-page";
    main.appendChild(section);

}

export default WordSearch;