let boxes = document.getElementsByClassName("box")
console.log(boxes);

// document.getElementById("swa").style.backgroundColor  = "red"

// document.querySelector(".box").style.backgroundColor = "blue"


document.querySelectorAll(".box").forEach((e,i) =>{
    if (i==2) {
        e.style.backgroundColor  = "red"
    }else{
    e.style.backgroundColor = "green";
    }
})