const container = document.querySelector('.container');
const cells = document.querySelectorAll('.grid-item');

window.addEventListener("load", () => {
    createGrid();
});

container.addEventListener('mouseover', e => {
    if(e.target.className = "grid-item")
        e.target.style.cssText = "background-color: black;";
});

function createGrid(){
    container.style.setProperty('--grid-rows', 16);
    container.style.setProperty('--grid-cols', 16);
    for (c = 0; c < (16 * 16); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

function hoverCell(e){
    e.style.cssText = "background-color: black;";
}