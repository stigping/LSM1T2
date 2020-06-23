let pianoDiv = document.getElementById('piano')
//C D E F G A B C# D# F# G# A#
function show() {
    if (document.getElementById('sounds').value == 'piano') soundSet = pianoVar;
    if (document.getElementById('sounds').value == 'flute') soundSet = fluteVar;
    pianoDiv.innerHTML = `
    
    ${soundSet}
    

    
    `;

}

// function riktigLyd(lyd) {
//   if (lyd == "piano") {
//     pianodiv = pianoVar;
//   } else {
//     pianodiv = fluteVar;
//   }
// }