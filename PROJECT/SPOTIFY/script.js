let currentSong = new Audio();
let songs;
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    const formattedMins = mins.toString().padStart(2, '0');
    const formattedSecs = secs.toString().padStart(2, '0');

    return `${formattedMins}:${formattedSecs}`;
}


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
  
const playMusic = (track,pause = false) => {
    // let audio = new Audio("songs/" + encodeURIComponent(track));
    currentSong.src = "songs/" + encodeURIComponent(track)
    if(!pause){
        currentSong.play().catch(err => console.error("Audio play error:", err));
        play.src = "pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00/00:00"
};



async function main() {

    songs = await getSongs()
    console.log(songs);
    playMusic(songs[0],true)
    let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0]
   for (const song of songs) {
    // Extract title and artist
    let [title, artist] = song.replaceAll("%20", " ").replace(".mp3", "").split(" - ");
    artist = artist || "Unknown Artist";

    // Add the song item to the list
    songUl.innerHTML += `
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

   
  // The duration variable now holds the duration (in seconds) of the audio clip
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
        let filename = e.getAttribute("data-song");
        console.log("Playing:", filename);
        playMusic(filename);
    });
});

    //Play & Paused 
    play.addEventListener("click", () => {
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        }else{
            currentSong.pause()
            play.src = "play.svg"

        }
    })  

    //previous and next buttons
    previous.addEventListener("click",() =>{
        console.log("clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index-1) >= 0){
            playMusic(songs[index -1])
        }
    })

    next.addEventListener("click",() => {
        console.log("click");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index+1) > songs.length){
            playMusic(songs[index +1])
        }
        
    })

    //Time update and Seekbar also
    currentSong.addEventListener("timeupdate", ()=> {
        console.log(currentSong.currentTime,currentSong.duration);
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = currentSong.currentTime/currentSong.duration * 100 + "%"
    })

    document.querySelector(".seekbar").addEventListener("click",e => {
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)
        document.querySelector(".circle").style.left = percent *100 + "%";
        currentSong.currentTime = ((currentSong.duration)*percent)
    })

    document.querySelector(".hamburger").addEventListener("click", () =>{
        document.querySelector(".left").style.left = 0
    })

    document.querySelector(".cross").addEventListener("click",() =>{
        document.querySelector(".left").style.left = -100 + "%"
    })
}
main()
