async function name() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(5)
        }, 2000);
    })
}

(async function main() {
    // let a = await name()
    // console.log(a);
    // let b = await name()
    // console.log(b);
    
    // let [x,y,...rest] = [5,6,7,42];
    // console.log(x,y,rest);
    
    let obj = {
        a:1,
        b:5,
        c:6,
        d:8
    }

    let {a,b} = obj
    console.log(a,b);
    
})()