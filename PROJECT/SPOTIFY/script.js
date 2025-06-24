async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/PROJECT/SPOTIFY/songs/")
    let response =  await a.text()
    console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}

async function main() {
    let songs = await getSongs()
    console.log(songs);

    let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0]
   for (const song of songs) {
    // Extract title and artist
    let [title, artist] = song.replaceAll("%20", " ").replace(".mp3", "").split(" - ");
    artist = artist || "Unknown Artist";

    // Add the song item to the list
    songUl.innerHTML += `
        <li>
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

    var audio = new Audio(songs[1]);
    audio.play();
    audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
    
  // The duration variable now holds the duration (in seconds) of the audio clip
});
}
main()
