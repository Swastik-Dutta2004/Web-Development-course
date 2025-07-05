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
    songul.innerHTML = songul.innerHTML + `<li> ${song.replaceAll("%20"," ")} </li>`
    
  }

  var audio = new Audio(songs[0]);
  audio.play();

  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
}
main();
