async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/PROJECT/SPOTIFY2/songs/");
  let result = await a.text();
  console.log(result);
  let div = document.createElement("div");
  div.innerHTML = result;
  let as = div.getElementsByTagName("a");

  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}
async function main() {
  //get the list of all the songs
  let songs = await getSongs();
  console.log(songs);

  let songul = document.querySelector(".song-list").getElementsByTagName("ul")[0]
  for (const song of songs) {
    let [title, artist] = song.replaceAll("%20", " ").replace(".mp3", "").split(" - ");
    artist = artist || "Unknown Artist";

    // Add the song item to the list
    songul.innerHTML += `
         <li data-song="${song}">
            <img class="invert" src="music.svg" alt="">
            <div class="songInfo">
                <div>${title}</div>
                <div>${artist}</div>
            </div>
            <div class="playnow">
                <img class="invert" src="play2.svg" alt="">
            </div>
        </li>`;
    
  }

 Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
        console.log(e.querySelector(".songInfo").firstElementChild.innerHTML);
        playMusic(e.querySelector(".songInfo").firstElementChild.innerHTM)
    })
    
 })
}
main();
