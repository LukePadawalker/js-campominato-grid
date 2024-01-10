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
    cell.classList.add("d-flex", "justify-content-center", "align-items-center");

    return cell;
}

// svolgimento

// creiamo una variabile falsa di default
let gridExist = false;


button.addEventListener('click', function(){

    if (gridExist == false){
        for(let i = 0; i < totalCells; i++){

            // creiamo il contenitore per il numero
            cellContainer = document.createElement('h5');


            //inseriamo il numero dentro il contenitore
            numInCell = i + 1;
            cellContainer.textContent = numInCell;


            // inseriamo il contenitore dentro la cella
            newCell.appendChild(cellContainer);
            

            // inseriamo la cella dentro la griglia
            const newCell = createCell();        
            grid.appendChild(newCell);


            newCell.addEventListener('click', () => {
                newCell.classList.add("clicked");
                console.log(cellContainer);
            })



        }
        // facciamo si che il bottone play generi una sola griglia
        gridExist = true;

    }



});










