 function getData(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src =  src;
    script.onload = () => resolve(src);
    script.onerror = () => reject("Failed to load the script ❌❌")
    document.head.appendChild(script);
})
}

async function main() {    
    try{
        await getData('test.js')
        alert("File is not running")
    }
    catch (error){
        console.log(error);
        alert("Something went wrong")
    }
}
main()