let boxes = document.getElementsByClassName("box")

function getRandomColor(){

    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);

    return `rgb(${a}, ${b}, ${c})`; 
    
}

})