console.log('Loaded');

const container = document.querySelector('#container');

let side = 16;
let total_width = 500;

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
            rowDiv.innerText = "";
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
        // Update the class so that it will go grey
        cell.classList.add('div_cell_hover')

        //Assign a random color
        if (e.target.style.backgroundColor==="") {
            console.log(e.target.style.backgroundColor==="");
            cell.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            
        }
        else{
            console.log(cell.style.backgroundColor);
            let rgb = getRGB(cell.style.backgroundColor);
            
            let r = rgb[0];
            let g = rgb[1];
            let b = rgb[2];

            let brightness = Math.sqrt(.241*r*r+.691*g*g+.068*b*b);
            console.log(brightness/255);
            
            let newColor = ColorLuminance(fullColorHex(rgb[0],rgb[1], rgb[2]), -.25);
            console.log(ColorLuminance(fullColorHex(rgb[0],rgb[1], rgb[2]), -5.0));
            cell.style.backgroundColor = newColor;
        }
        
        
        console.log(e.target.style.backgroundColor);

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

function getRGB(rgb){

    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    return rgb;
}

function rgbToHex (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

function fullColorHex(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };

  function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}