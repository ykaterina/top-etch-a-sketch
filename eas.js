const container = document.querySelector('.container');
const gridrows = document.querySelectorAll('.gridRow');

window.addEventListener("load", () => {
    createRows();
    createCells();
});

function createRows(){
    for(let i=0; i < 16; i++){
        const gridrow = document.createElement('div');
        gridrow.classList.add('gridRow');
        container.appendChild(gridrow);
    }
}

function createCells(){
    for(let i = 0; i < gridrows.length; i++){
        for(let e = 0; e < 16; e++){
            const gridcol = document.createElement('div');
            gridcol.classList.add('cell');
            gridrows[e].appendChild(gridcol);
        }
    }
}
