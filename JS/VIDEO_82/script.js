async function name() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(5)
        }, 2000);
    })
}

(async function main() {
    let a = await name()
    console.log(a);
    let b = await name()
    console.log(b);
})()