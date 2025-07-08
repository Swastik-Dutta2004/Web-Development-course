let currentSong = new Audio();
let songs;
let currFolder;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");

  return `${formattedMins}:${formattedSecs}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:3000/PROJECT/SPOTIFY2/${folder}/`);
  let result = await a.text();
  console.log(result);
  let div = document.createElement("div");
  div.innerHTML = result;
  let as = div.getElementsByTagName("a");

   songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
  let songul = document.querySelector(".song-list").getElementsByTagName("ul")[0];
  songul.innerHTML = ""
  for (const song of songs) {
    let [title, artist] = song
      .replaceAll("%20", " ")
      .replace(".mp3", "")
      .split(" - ");
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
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("songs/" + encodeURIComponent(track));
  currentSong.src = `/PROJECT/SPOTIFY2/${currFolder}/` + encodeURIComponent(track);
  if(!pause){
    currentSong.play();
    play.src = "pause.svg";

  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00/00:00";
};

async function main() {
  //get the list of all the songs
  await getSongs("songs/test");
  // console.log(songs);
  playMusic(songs[0],true)

  //left songlist click events
  Array.from(
    document.querySelector(".song-list").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      let filename = e.getAttribute("data-song");
      console.log("Playing: " + filename);
      playMusic(filename);
    });
  });

//play pause event listener
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  });

  //time update and seekbar's circle
  currentSong.addEventListener("timeupdate", () => {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${formatTime(
      currentSong.currentTime)}/${formatTime(currentSong.duration)}`
    document.querySelector(".circle").style.left = ((currentSong.currentTime/currentSong.duration)*100) + "%";
  });

  document.querySelector(".seekbar").addEventListener("click",(e)=> {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
    document.querySelector(".circle").style.left = percent + "%"
    currentSong.currentTime = ((currentSong.duration)*percent)/100 
  })

  //Add an eventslistener for hamburger
  document.querySelector(".hamburgericon").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = 0;
  })
  document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "-100%";
  })

  //Add an event listener for next
  document.querySelector("#previous").addEventListener("click",()=>{
    console.log("Playing previous song");

  let filename = decodeURIComponent(currentSong.src.split("/").pop());
  let index = songs.indexOf(filename);
  console.log(songs, index);

  if (index > 0) {
    playMusic(songs[index - 1]);
  }
  else{
    playMusic(songs[0])
  }
  })

  //Add an event listener for next
 document.querySelector("#next").addEventListener("click", () => {
  console.log("Playing next song");

  let filename = decodeURIComponent(currentSong.src.split("/").pop());
  let index = songs.indexOf(filename);
  console.log(songs, index);

  if (index !== -1 && index < songs.length - 1) {
    playMusic(songs[index + 1]);
  }
});

//Load the playlist whenevr the cards are clicked
Array.from(document.getElementsByClassName("cards")).forEach(e=>{
  console.log(e);
  e.addEventListener("click",async item=>{
    songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
    
  })
})



}
main();
