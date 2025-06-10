window.onload =  function(){
    loadBookMarks()
}

document.getElementById("addBookMark").addEventListener("click", function(){
    let name = document.getElementById("sitename").value
    let url = document.getElementById("siteurl").value

    if(!name || !url){
        alert("please enter the name of the site and its url");
    }
})

let bookmarks = JSON.parse(localStorage.getItem("bookmraks")) || []

bookmarks.push({name: name, url: url})

localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

document.getElementById("sitename").value = ""
document.getElementById("siteurl").value = ""

function loadBookMarks(){
    let list = document.getElementById("bookmraks")
    list.innerHTML = ""

    let bookmarks = JSON.parse(localStorage.getItem("bookmraks")) || []

    bookmarks.forEach(bookmark => {
        
    });
}