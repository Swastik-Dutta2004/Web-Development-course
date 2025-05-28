// async function getData (){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         },3000)
//     })
// }

async function getData (){
    let x = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
    
}

async function main() {
    console.log("loading modules");

    console.log("Do Sommething else");

    console.log("Load data");

    let data =  await getData()
        // console.log(data);
        
    console.log("process data");
    
    console.log("task 2");
    }

main()