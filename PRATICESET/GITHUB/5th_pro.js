let arr = [0,-1,-2,-3,-4]

function sum(){
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        let b = arr[i];
            a = a + b

            if(a < 0){
                console.log("its a negative number");
                break
            }
    }    
    console.log(a);
    
}
sum()
