// Q2
// function addBookMark(){
//     let name = document.querySelector("#sitename").value
//     let url = document.querySelector("#siteUrl").value

//     if(!name || !url){
//         console.log("Enter the name of the site and its url");
//     }
    
//     let list = document.getElementById('bookmarksList')
//     let a = document.createElement("a")
//     a.href = url
//     a.textContent = name
//     a.target = "_blank"
    
//     let div =  document.createElement("div")
//     div.appendChild(a)
//     list.appendChild(div)
    
//     document.getElementById("sitename").value = ""
//     document.getElementById("siteUrl").value = ""
// }

//Q3

document.getElementById("addBookMark").addEventListener("click", function(){
    let name = document.querySelector("#sitename").value
    let url = document.querySelector("#siteUrl").value

    if(!name || !url){
        console.log("Enter the name of the site and its url");
    }
    
    let list = document.getElementById('bookmarksList')
    let a = document.createElement("a")
    a.href = url
    a.textContent = name
    a.target = "_blank"
    
    let div =  document.createElement("div")
    div.appendChild(a)
    list.appendChild(div)
    
    document.getElementById("sitename").value = ""
    document.getElementById("siteUrl").value = ""

    })