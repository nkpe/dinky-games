console.log("maze.js loaded")

let main = document.getElementById("main");

function MazeGame () {
    let mazeSection =   "<section id='maze-section'>" +
                        "<h1>Escape the Maze</h1>" +
                        "</section>";
    main.innerHTML = mazeSection;
};

MazeGame();