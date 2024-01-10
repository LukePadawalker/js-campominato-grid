console.log("JS OK");


// recupero la griglia
// recupero i dati dall'html
// al click del bottone, genero la griglia

// recupero gli elementi dall'html
const grid = document.getElementById('grid');
const button = document.getElementById('button');


// valori iniziali
const rows = 10;
const cols = 10;
const totalCells = rows * cols;


// funzioni
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell;
}

// svolgimento

let gridExist = false;


button.addEventListener('click', function(){

    if (gridExist == false){
        for(let i = 0; i < totalCells; i++){
        
            const newCell = createCell();
            grid.appendChild(newCell);
        }
        
        gridExist = true;
    
    }




});








