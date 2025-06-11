let str = "My name is Swastik. I want to be a Developer"

let count = 0 
let vowels = "aeiouAEIOU";
 

function vowel(){
    for(let i = 0; i <= str.length; i++){
        if(vowels.includes(str[i])){
            console.log("The vowels are: "+str[i]);

            count++
        }
    }console.log("Number of vowels are: "+count);
    
    
}vowel()