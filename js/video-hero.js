let tag = document.createElement('script');
let firstScriptTag = document.getElementsByTagName('script')[0];
let player;
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("close");
let iframeWrapper = document.getElementById("banner-video");
let iframe = document.getElementById("iframe");

// 2. This code loads the IFrame Player API code asynchronously.
tag.src = "https://www.youtube.com/iframe_api";

// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);



{/* <iframe id="player" class="vid" width="100%" height="100%" 
src="https://www.youtube.com/embed/ci9QZbNLct0?enablejsapi=1" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen=""></iframe> */}

// function onYouTubeIframeAPIReady() {
  
// }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  console.log('onPlayerReady')
  player = event.target;
  event.target.playVideo();
}

function pause() {
  console.log(player)
  if (player && player.pauseVideo) {
    player.pauseVideo();
  }
}

function play() {
  if(!iframe) {
    iframe = document.createElement("iframe");
    iframe.onload = function() {
      window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player('banner-video', {
          videoId: 'EwOuGsrYmGA',
          events: {
            'onReady': onPlayerReady
          }
        });
      }
    }; 
    iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/EwOuGsrYmGA?enablejsapi=1');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('id', 'player');
    iframe.setAttribute('class', 'vid');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('title', 'AgilityIO - New Yorks Enterprise Web and Mobile Development Agency');
    iframeWrapper.appendChild(iframe)
    iframe.focus();
  }
  if (player && player.playVideo) {
    player.playVideo();
  }
}
