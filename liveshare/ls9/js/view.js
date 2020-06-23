let pianoDiv = document.getElementById('piano')
//C D E F G A B C# D# F# G# A#
function show() {
    if (document.getElementById('sounds').value == 'flute') soundSet = pianoVar;
    pianoDiv.innerHTML = `
    
    ${pianoVar}
    

    
    `;

}

// function riktigLyd(lyd) {
//   if (lyd == "piano") {
//     pianodiv = pianoVar;
//   } else {
//     pianodiv = fluteVar;
//   }
// }