const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$video.addEventListener('input', handleInput);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Reproduciendo');
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('pausando');
}

function handleBackward() {
    $video.currentTime -= 10;
}

function handleForward() {
    $video.currentTime  += 10;
}

function handleLoaded() {
    $progress.max = $video.duration;
    console.log('duracion del video', $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value;
}