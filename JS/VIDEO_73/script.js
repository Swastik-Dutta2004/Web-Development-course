function cardMaking (image, title, cName, time, views, duration){
    document.querySelector(".image").src = image;
    document.querySelector(".title").innerHTML = title
    document.querySelector(".cName").innerHTML = cName
    document.querySelector(".time").innerHTML = time + " months ago"; 

   let formattedViews = "";
  if (views >= 1000000) {
    formattedViews = (views / 1000000).toFixed(1) + "M";  // e.g., 1500000 => 1.5M
  } else if (views >= 1000) {
    formattedViews = (views / 1000).toFixed(1) + "K";      // e.g., 54000 => 54.0K
  } else {
    formattedViews = views;                     // e.g., 800 => 800
  }
    document.querySelector(".views").innerHTML = formattedViews;

    document.querySelector(".duration").innerHTML = duration
}

cardMaking("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Introduction to Backend | Sigma Web Dev video #2","Code With Harry","7","5400000","32:21")