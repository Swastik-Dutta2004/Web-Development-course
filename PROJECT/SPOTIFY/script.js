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

const playMusic = (track) => {
    let audio = new Audio("/songs/" + track)
    audio.play()
};


async function main() {
    let currentSong;

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

   
  // The duration variable now holds the duration (in seconds) of the audio clip
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e =>{
        e.addEventListener("click",element => {
            console.log(e.querySelector(".songInfo").firstElementChild.innerHTML)
            playMusic(e.querySelector(".songInfo").firstElementChild.innerHTML)
        })
    })
}
main()
