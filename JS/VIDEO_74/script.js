let button = document.querySelector("#btn")

button.addEventListener("dblclick", () =>{
    document.querySelector(".box").innerHTML = "<b> suck my dick you bitch</b>"
})

button.addEventListener("keydown", (e) =>{
  console.log(e.key,e.keyCode);
})

button.addEventListener("contextmenu", () =>{
  alert("don't do this!")
})