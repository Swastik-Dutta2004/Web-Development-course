function cardMaking (image, title, cName, time, views){
    document.querySelector(".image").src = image;
    document.getElementsByClassName("title").innerHTML = title
    document.getElementsByClassName("cName").innerHTML = cName
    document.getElementsByClassName("time").innerHTML = time
    document.getElementsByClassName("views").innerHTML = views
}