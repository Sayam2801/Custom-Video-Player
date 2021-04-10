const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and pause video 
function toggleVideoStatus()
{
    if(video.paused)
       video.play();
    else  
       video.pause();
}

//Update play/pause icon 
function updatePlayIcon()
{
    if(video.paused)
       play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    else   
       play.innerHTML = '<i class="fa fa-stop fa-2x"></i>';
}

//Update progress and timestamp
function updateTimestamp()
{
    //Update progress value at each step of video
   progress.value = (video.currentTime/video.duration)*100;

   //Get minutes 
   let mins = Math.floor(video.currentTime/60);
   if(mins < 10) 
      mins = '0' + String(mins);

   //Get seconds  
   let secs = Math.floor(video.currentTime%60); 
   if(secs < 10)
      secs = '0' + String(secs);
    
   //Update timestamp of video 
   timestamp.innerHTML = `${mins}:${secs}`;//Template string
}

//Set video time to progress
function setVideoProgress()
{
    video.currentTime=(+progress.value*video.duration)/100;
}

//Stop the video 
function stopVideo()
{
    video.currentTime = 0;
    video.pause();
}

//Event Listeners
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateTimestamp);
play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);

