 function getData(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src =  src;
    script.onload = () => resolve(src);
    script.onerror = () => reject("Failed to load the script ❌❌")
    document.head.appendChild(script);
})
}


    getData('test.js')
    .then((src) => {
        alert("File has loaded sucessfully")
    }).catch ((error)  => {
    console.log(error);
    
    alert("Something went wrong")
})