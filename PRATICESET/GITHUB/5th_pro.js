let arr = [5, 10, 3, 7, -2, 6, 8]

function sum(){
    let a = 0
    for(let i = 0; i < arr.length; i++){
       if(arr[i] < 0 ){
        console.log("it is a negetive number "+ arr[i]);
        break;
       }
       a += arr[i]
    }
    console.log(a);
    
}
sum()