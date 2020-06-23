function play(curNote)
{
    curNote.play()
    curNote.volume = 0.2;
    if (curNote.currentTime > 0) curNote.currentTime = 0;
}