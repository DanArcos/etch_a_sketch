console.log('Loaded');

const container = document.querySelector('#container');

let side = 16;

//Create Initial Grid
function createGrid(side){
    for (let x = 0; x < side; x++){
        //console.log(x);
        const div = document.createElement('div');
        div.className='gridRow';
        
        for(let i = 0; i < side; i++){
            const rowDiv = document.createElement('div');
            rowDiv.innerText = ".";
            rowDiv.className = 'cellDiv'
            div.append(rowDiv);
        }
    
        container.append(div);
    }
}

createGrid(side);

const cells = document.querySelectorAll('.cellDiv');
cells.forEach(cell => {
    //console.log(cell);
    cell.addEventListener('mouseover', function(e) {
        cell.classList.add('div_cell_hover')
    });
});



const btnClear = document.querySelector('#btn_clear');
btnClear.addEventListener('click', function(e){
    console.log('Clear Button');
    //clear grid
    cells.forEach(cell => {
        cell.classList.remove('div_cell_hover');
    });
    //set up prompt
    side = prompt('How Many Squares Per Side?');
    removeAllChildNodes(container);
    createGrid(side);
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}