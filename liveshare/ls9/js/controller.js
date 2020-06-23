function play(curNote)
{
    //var x = document.getElementById("myAudio");
    curNote.play()
    curNote.volume = 0.1;
    if (curNote.currentTime > 0) curNote.currentTime = 0;
}