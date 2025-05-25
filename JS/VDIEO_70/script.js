let arr = ["red","blue","yellow","pink","green"]

let color = document.querySelectorAll(".box")

color.forEach(e => {
    let random =  arr[Math.floor(Math.random() * arr.length)];

    e.style.backgroundColor = random
});