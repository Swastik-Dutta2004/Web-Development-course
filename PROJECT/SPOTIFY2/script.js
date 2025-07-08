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

async function displayAlbums() {
  let a = await fetch(`http://127.0.0.1:3000/PROJECT/SPOTIFY2/songs/`);
  let result = await a.text();
  console.log(result);
  let div = document.createElement("div");
  div.innerHTML = result;
  let anchors = div.getElementsByTagName("a")
  let cardContainer = document.querySelector(".cardContainer")
  Array.from(anchors).forEach(async e=>{
    if(e.href.includes("/songs")){
      let folder = e.href.split("/").slice(-2)[0]
      
      //get the metadata of the folder
      let a = await fetch(`http://127.0.0.1:3000/PROJECT/SPOTIFY2/songs/${folder}/info.json`)
      let result = await a.json()
      console.log(result)
      cardContainer.innerHTML = cardContainer.innerHTML + `<div class="cardContainer">
            <div data-folder="test" class="cards">
              <div class="play">
                <button
                  style="
                    background: none;
                    border: 2px solid black;
                    cursor: pointer;
                    padding: 0;
                    background-color: green;
                    border-radius: 50%;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <!-- Green circle -->
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="green"
                      stroke-width="1.5"
                    ></circle>

                    <!-- Black play button -->
                    <path
                      d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      fill="#000"
                    ></path>
                  </svg>
                </button>
              </div>
              <img src="music.jpg" alt="" />
              <h2>Happy Hits</h2>
              <p>Hits to boost your moodand fill you with happyiness</p>
            </div>
            <div data-folder="cs" class="cards">
              <img src="/PROJECT/SPOTIFY2/songs/${folder}/cover.jpg" alt="" />
              <h2>${result.title}</h2>
              <p>${result.description}</p>
            </div>
  
          </div>`
    }
  })  
}

async function main() {
  //get the list of all the songs
  await getSongs("songs/cs");
  // console.log(songs);
  playMusic(songs[0],true)

  //Display all the albums in the page
  displayAlbums()

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
  e.addEventListener("click",async item=>{
    songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
    
  })
})



}
main();
