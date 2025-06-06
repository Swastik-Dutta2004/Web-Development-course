let a = prompt("Enter the number")

let b = prompt("Enter the number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

function main(){
    let sum = parseInt(a) + parseInt(b)

    try {
        console.log(sum);
        return true
    } catch (error) {
        console.log("this is unexpected");
        return false
    }
    finally{
        console.log("The program has completed");
        
    }
}

main()