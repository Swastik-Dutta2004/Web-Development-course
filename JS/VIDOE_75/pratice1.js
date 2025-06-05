console.log("i am first");
console.log("i am second");

let callback = (arg) => {
    console.log(arg);
    
}

let loadSript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback(src)
    document.head.append(sc)
}

loadSript("https://www.codewithharry.com/notes/",callback)
