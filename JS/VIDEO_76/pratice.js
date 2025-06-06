// async function getData() {
//     return new Promise ((resolve,reject) => {setTimeout(() => {
//         resolve(455)
//     }, 3000);})
// }

async function getData() {
    let x = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    let Data = await x.json()
    return Data    
}

async function main() {
    console.log("Loading Function");

    console.log("do something else");

    let data = await getData()
    console.log(data);
    

    console.log("Processing Data");

    console.log("showing Data");
    
}

main()