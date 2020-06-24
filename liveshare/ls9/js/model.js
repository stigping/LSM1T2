let pianoDiv = document.getElementById('piano')
let soundSet;

//Piano Noter

let noteA = document.getElementById('na');
let noteB = document.getElementById('nb');
let noteC = document.getElementById('nc');
let noteD = document.getElementById('nd');
let noteE = document.getElementById('ne');
let noteF = document.getElementById('nf');
let noteG = document.getElementById('ng');
let noteAm = document.getElementById('nam');
let noteCm = document.getElementById('ncm');
let noteDm = document.getElementById('ndm');
let noteFm = document.getElementById('nfm');
let noteGm = document.getElementById('ngm');

let noteA6 = document.getElementById('na6');
let noteB6 = document.getElementById('nb6');
let noteC6 = document.getElementById('nc6');
let noteD6 = document.getElementById('nd6');
let noteE6 = document.getElementById('ne6');
let noteF6 = document.getElementById('nf6');
let noteG6 = document.getElementById('ng6');
let noteAm6 = document.getElementById('nam6');
let noteCm6 = document.getElementById('ncm6');
let noteDm6 = document.getElementById('ndm6');
let noteFm6 = document.getElementById('nfm6');
let noteGm6 = document.getElementById('ngm6');

//Fløyte Noter

let fnoteA = document.getElementById('fna');
let fnoteB = document.getElementById('fnb');
let fnoteC = document.getElementById('fnc');
let fnoteD = document.getElementById('fnd');
let fnoteE = document.getElementById('fne');
let fnoteF = document.getElementById('fnf');
let fnoteG = document.getElementById('fng');
let fnoteAm = document.getElementById('fnam');
let fnoteCm = document.getElementById('fncm');
let fnoteDm = document.getElementById('fndm');
let fnoteFm = document.getElementById('fnfm');
let fnoteGm = document.getElementById('fngm');

let fnoteA6 = document.getElementById('fna6');
let fnoteB6 = document.getElementById('fnb6');
let fnoteC6 = document.getElementById('fnc6');
let fnoteD6 = document.getElementById('fnd6');
let fnoteE6 = document.getElementById('fne6');
let fnoteF6 = document.getElementById('fnf6');
let fnoteG6 = document.getElementById('fng6');
let fnoteAm6 = document.getElementById('fnam6');
let fnoteCm6 = document.getElementById('fncm6');
let fnoteDm6 = document.getElementById('fndm6');
let fnoteFm6 = document.getElementById('fnfm6');
let fnoteGm6 = document.getElementById('fngm6');

// //
// let pianoVar = ` 
// <rect onclick="play(noteC)" style="fill:white;stroke:black" x="0" y="0" width="23" height="120"/>
// <rect onclick="play(noteD)" style="fill:white;stroke:black" x="23" y="0" width="23" height="120"/>
// <rect onclick="play(noteE)" style="fill:white;stroke:black" x="46" y="0" width="23" height="120"/>
// <rect onclick="play(noteF)" style="fill:white;stroke:black" x="69" y="0" width="23" height="120"/>
// <rect onclick="play(noteG)" style="fill:white;stroke:black" x="92" y="0" width="23" height="120"/>
// <rect onclick="play(noteA)" style="fill:white;stroke:black" x="115" y="0" width="23" height="120"/>
// <rect onclick="play(noteB)" style="fill:white;stroke:black" x="138" y="0" width="23" height="120"/>
// <!--  White keys 2  -->
// <rect onclick="play(noteC6)" style="fill:white;stroke:black" x="161" y="0" width="23" height="120"/>
// <rect onclick="play(noteD6)" style="fill:white;stroke:black" x="184" y="0" width="23" height="120"/>
// <rect onclick="play(noteE6)" style="fill:white;stroke:black" x="207" y="0" width="23" height="120"/>
// <rect onclick="play(noteF6)" style="fill:white;stroke:black" x="230" y="0" width="23" height="120"/>
// <rect onclick="play(noteG6)" style="fill:white;stroke:black" x="253" y="0" width="23" height="120"/>
// <rect onclick="play(noteA6)" style="fill:white;stroke:black" x="276" y="0" width="23" height="120"/>
// <rect onclick="play(noteB6)" style="fill:white;stroke:black" x="299" y="0" width="23" height="120"/>

// <!--  Black keys  -->
// <rect onclick="play(noteCm)" style="fill:black;stroke:black" x="16" y="0" width="13" height="80"/>
// <rect onclick="play(noteDm)" style="fill:black;stroke:black" x="40" y="0" width="13" height="80"/>
// <rect onclick="play(noteFm)" style="fill:black;stroke:black" x="85.25" y="0" width="13" height="80"/>
// <rect onclick="play(noteGm)" style="fill:black;stroke:black" x="108.25" y="0" width="13" height="80"/>
// <rect onclick="play(noteAm)" style="fill:black;stroke:black" x="132.75" y="0" width="13" height="80"/>
// <!--  Black keys 2  -->
// <rect onclick="play(noteCm6)" style="fill:black;stroke:black" x="177.66666" y="0" width="13" height="80"/>
// <rect onclick="play(noteDm6)" style="fill:black;stroke:black" x="200.66666" y="0" width="13" height="80"/>
// <rect onclick="play(noteFm6)" style="fill:black;stroke:black" x="246.66666" y="0" width="13" height="80"/>
// <rect onclick="play(noteGm6)" style="fill:black;stroke:black" x="268.66666" y="0" width="13" height="80"/>
// <rect onclick="play(noteAm6)" style="fill:black;stroke:black" x="292.75" y="0" width="13" height="80"/>
// `;

// let fluteVar =  `
// <rect onclick="play(fnoteC)" style="fill:white;stroke:black" x="0" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteD)" style="fill:white;stroke:black" x="23" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteE)" style="fill:white;stroke:black" x="46" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteF)" style="fill:white;stroke:black" x="69" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteG)" style="fill:white;stroke:black" x="92" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteA)" style="fill:white;stroke:black" x="115" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteB)" style="fill:white;stroke:black" x="138" y="0" width="23" height="120"/>
// <!--  White keys 2  -->
// <rect onclick="play(fnoteC6)" style="fill:white;stroke:black" x="161" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteD6)" style="fill:white;stroke:black" x="184" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteE6)" style="fill:white;stroke:black" x="207" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteF6)" style="fill:white;stroke:black" x="230" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteG6)" style="fill:white;stroke:black" x="253" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteA6)" style="fill:white;stroke:black" x="276" y="0" width="23" height="120"/>
// <rect onclick="play(fnoteB6)" style="fill:white;stroke:black" x="299" y="0" width="23" height="120"/>

// <!--  Black keys  -->
// <rect onclick="play(fnoteCm)" style="fill:black;stroke:black" x="16" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteDm)" style="fill:black;stroke:black" x="40" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteFm)" style="fill:black;stroke:black" x="85.25" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteGm)" style="fill:black;stroke:black" x="108.25" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteAm)" style="fill:black;stroke:black" x="132.75" y="0" width="13" height="80"/>
// <!--  Black keys 2  -->
// <rect onclick="play(fnoteCm6)" style="fill:black;stroke:black" x="177.66666" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteDm6)" style="fill:black;stroke:black" x="200.66666" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteFm6)" style="fill:black;stroke:black" x="246.66666" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteGm6)" style="fill:black;stroke:black" x="268.66666" y="0" width="13" height="80"/>
// <rect onclick="play(fnoteAm6)" style="fill:black;stroke:black" x="292.75" y="0" width="13" height="80"/>
// `;