
let game;

//use window.href to get URL parameters
//Example: localhost:3000/html/board.html?playerA=name,red,0&playerB=name,yellow,1,easy
//=> let p1 = new Player(name, red, 0)

JSON._classes(Game, Board, Player, Computer);


game = new Game(p1,p2);



// Run every time the size changes
$(window).resize(scale);

