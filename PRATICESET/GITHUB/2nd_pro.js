let a = [1,2,3,4,5,4,3,2]

a = [...new Set(a)];

function double(){
    for (let i = 0; i < a.length; i++) {

        if(a[i] == i){
            i++
        }
        a[i] = a[i]*2
    } 
    console.log(a);
}
double()