function play(curNote)
{
    //var x = document.getElementById("myAudio");
    curNote.play()
    curNote.volume = 0.1;
    if (curNote.currentTime > 0) curNote.currentTime = 0;
}

// https://www.youtube.com/watch?time_continue=347&v=p_dji9WgSSU&feature=emb_logo brukerJSon for å lage soundboard.