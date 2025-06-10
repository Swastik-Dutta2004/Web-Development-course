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