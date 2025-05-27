console.log("you bluddy fucker 🫵🫵");
console.log("you Bluddy mother fucker 🫵🫵");

setTimeout(() => {
    console.log("you are a son of a bitch 🫵🫵");
}, 5000);

console.log("ajj ka liya bas itna hi 🤝🤝");

let callback = (arg) =>{
    console.log(arg);
    
}

let test = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src = src
    sc.onload = callback("swastik")
}

test("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
