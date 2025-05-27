function cardMaking (image, title, cName, time, views){
    document.querySelector(".image").src = image;
    document.querySelector(".title").innerHTML = title
    document.querySelector(".cName").innerHTML = cName
    document.querySelector(".time").innerHTML = time + " months ago"; 
   if (views >  1000000) {
    return views += views + "M"
   } else if (views >10000 ){
    return views 
   }

}
cardMaking("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Introduction to Backend | Sigma Web Dev veido #2","Code With Harry","7","54000")