'use strict';

import {main} from '../../index.js';
const mazeImg = '/src/imgs/maze/maze-thumbnail.png';
const mazeCaption = 'Dinky Maze';

const HomeContentWrapper = (caption, imgSrc, section) => {
    const wrapper = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    wrapper.className = 'home-wrapper';
    img.src = imgSrc;
    figCaption.innerText = caption;
    figCaption.className = 'fig-caption';

    section.appendChild(wrapper);
    wrapper.appendChild(figure);
    figure.appendChild(figCaption);
    figure.appendChild(img);
};


const HomePage = () => {
    const section = document.createElement('section');
    section.id = 'home-page';
    main.appendChild(section);
    HomeContentWrapper(mazeCaption, mazeImg, section);
}

export default HomePage;