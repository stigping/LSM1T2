let pianoDiv = document.getElementById('piano')
//C D E F G A B C# D# F# G# A#
function show() {
    if (document.getElementById('sounds').value == 'piano') soundSet = pianoVar;
    if (document.getElementById('sounds').value == 'flute') soundSet = fluteVar;
    pianoDiv.innerHTML = `
    <svg viewBox="0 0 322 120" width="100%" height="100%">
    ${soundSet}
    </svg>

    
    `;

}

// function riktigLyd(lyd) {
//   if (lyd == "piano") {
//     pianodiv = pianoVar;
//   } else {
//     pianodiv = fluteVar;
//   }
// }