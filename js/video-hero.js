let tag = document.createElement('script');

// 2. This code loads the IFrame Player API code asynchronously.
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("close");
var iframe = document.getElementById("player");
playButton.addEventListener("click", play);
pauseButton.addEventListener("click",pause);
iframe.setAttribute('src', 'https://www.youtube.com/embed/EwOuGsrYmGA?enablejsapi=1');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'EwOuGsrYmGA',
    events: {
      'onReady': onPlayerReady
    }
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // play();
}
function pause() {
  player.pauseVideo();
}
function play() {
  player.playVideo();
}
