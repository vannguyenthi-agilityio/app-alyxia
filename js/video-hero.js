let tag = document.createElement('script');
let firstScriptTag = document.getElementsByTagName('script')[0];
let player;
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("close");
let iframeWrapper = document.getElementById("banner-video");
let iframe = document.getElementById("player");

// 2. This code loads the IFrame Player API code asynchronously.
tag.src = "https://www.youtube.com/iframe_api";

// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  player = event.target;
  event.target.playVideo();
}

function pause() {
  if (player && player.pauseVideo) {
    player.pauseVideo();
  }
}

function play() {
  if(!iframe) {
    // Create iframe once loading
    iframe = document.createElement("iframe");
    iframe.allowfullscreen = '';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.frameborder = '0';
    iframe.id = 'player';
    iframe.class = 'vid';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.title = 'AgilityIO - New Yorks Enterprise Web and Mobile Development Agency';
    iframe.style = 'border: 0';
    iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/EwOuGsrYmGA?enablejsapi=1');
    iframeWrapper.appendChild(iframe)
    
    // Initialize player to control when play/pause
    new YT.Player('player', {
      videoId: 'EwOuGsrYmGA',
      events: {
        'onReady': onPlayerReady
      }
    });
    iframe.focus();
  }
  if (player && player.playVideo) {
    player.playVideo();
  }
}
