async function ArrayMapping(arr) {
    let result = await Promise.all(
      arr.map(num =>{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num*2)
            }, 5000);
        })
      })  
    )
    return result
}

ArrayMapping([1,2,3,4,5,6,7,8]).then(res =>{
    console.log("Double array: "+ res);
    
})