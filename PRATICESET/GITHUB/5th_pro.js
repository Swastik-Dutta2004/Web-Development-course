let arr = [1,2,3,4,5,6,7,8,9,0]

function sum(){
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        let b = arr[i];
            a = a + b
    }
    console.log(a);
    
}
sum()