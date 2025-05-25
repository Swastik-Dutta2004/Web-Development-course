let arr = ["red","blue","yellow","pink","green","white","violet"]

let color = document.querySelectorAll(".box")

color.forEach(e => {
    let random =  arr[Math.floor(Math.random() * arr.length)];

    e.style.backgroundColor = random
});

// for (let i = 0; i < arr.length; i++) {
// let random = arr[Math.floor(Math.random() * arr.length)]


// color[i].style.backgroundColor = random    
// }