const container = document.querySelector('.container');
const cells = document.querySelectorAll('.grid-item');
const setBtn = document.querySelector('#setGrid');

window.addEventListener("load", () => {
    createGrid(16);
});

container.addEventListener('mouseover', e => {
    if(e.target.className = "grid-item")
        e.target.style.cssText = "background-color: black;";
});

function createGrid(squares){
    container.style.setProperty('--grid-rows', squares);
    container.style.setProperty('--grid-cols', squares);
    for (c = 0; c < (squares * squares); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

setBtn.addEventListener('click', function() {
    let squares = prompt("Enter Number of Squares", '');
    while(isNaN(squares) || (squares > 100 || squares < 1)){
        squares = prompt("Enter Number of Squares", '');
    }
        
    clearSquares();
    createGrid(squares);
});

function clearSquares(){
    while (container.hasChildNodes())
        container.removeChild(container.lastChild);
}