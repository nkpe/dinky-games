'use strict';

import {main} from '../../index.js';

const HomePage = () => {
    const section = document.createElement('section');
    section.className = "home-page";
    main.appendChild(section);
    section.innerHTML = `
    <h2>Home Page</h2>`

}

export default HomePage;