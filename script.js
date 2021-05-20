console.log('Loaded');

const container = document.querySelector('#container');

let side = 16;
let total_width = 1000;

//Create Initial Grid
function createGrid(side){
    let cell_length = Math.floor(total_width/side);
    console.log(cell_length);
    for (let x = 0; x < side; x++){
        //console.log(x);
        const div = document.createElement('div');
        div.className='gridRow';
        
        for(let i = 0; i < side; i++){
            const rowDiv = document.createElement('div');
            rowDiv.innerText = ".";
            rowDiv.className = 'cellDiv'
            rowDiv.style.width = cell_length.toString()+'px';
            rowDiv.style.height = cell_length.toString()+'px';
            div.append(rowDiv);
        }
    
        container.append(div);
    }

    //
    const cells = document.querySelectorAll('.cellDiv');
    cells.forEach(cell => {
        //console.log(cell);
        cell.addEventListener('mouseover', function(e) {
        cell.classList.add('div_cell_hover')
        });
    });
}

createGrid(side);

const btnClear = document.querySelector('#btn_clear');
btnClear.addEventListener('click', function(e){
    console.log('Clear Button');
    //clear grid
    const cells = document.querySelectorAll('.cellDiv');
    cells.forEach(cell => {
        cell.classList.remove('div_cell_hover');
    });
    //set up prompt
    side = prompt('How Many Squares Per Side?');
    if (side > 100){
        alert("Pick a number less than 100");
    }
    else if(side<2){
        alert("Pick a number greater than 1");
    }
    else{
        removeAllChildNodes(container);
        createGrid(side);
    }
    
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}