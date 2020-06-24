function show() {
    if (document.getElementById('sounds').value == 'piano') soundSet = '';
    if (document.getElementById('sounds').value == 'flute') soundSet = 'f';
    pianoDiv.innerHTML = `
    <svg viewBox="0 0 322 120" width="100%" height="100%">
    <rect onclick="play(${soundSet}noteC)" style="fill:white;stroke:black" x="0" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteD)" style="fill:white;stroke:black" x="23" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteE)" style="fill:white;stroke:black" x="46" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteF)" style="fill:white;stroke:black" x="69" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteG)" style="fill:white;stroke:black" x="92" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteA)" style="fill:white;stroke:black" x="115" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteB)" style="fill:white;stroke:black" x="138" y="0" width="23" height="120"/>
    <!--  White keys 2  -->
    <rect onclick="play(${soundSet}noteC6)" style="fill:white;stroke:black" x="161" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteD6)" style="fill:white;stroke:black" x="184" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteE6)" style="fill:white;stroke:black" x="207" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteF6)" style="fill:white;stroke:black" x="230" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteG6)" style="fill:white;stroke:black" x="253" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteA6)" style="fill:white;stroke:black" x="276" y="0" width="23" height="120"/>
    <rect onclick="play(${soundSet}noteB6)" style="fill:white;stroke:black" x="299" y="0" width="23" height="120"/>

    <!--  Black keys  -->
    <rect onclick="play(${soundSet}noteCm)" style="fill:black;stroke:black" x="14.33333" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteDm)" style="fill:black;stroke:black" x="41.66666" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteFm)" style="fill:black;stroke:black" x="82.25" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteGm)" style="fill:black;stroke:black" x="108.25" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteAm)" style="fill:black;stroke:black" x="134.75" y="0" width="13" height="80"/>
    <!--  Black keys 2  -->
    <rect onclick="play(${soundSet}noteCm6)" style="fill:black;stroke:black" x="175.33333" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteDm6)" style="fill:black;stroke:black" x="202.66666" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteFm6)" style="fill:black;stroke:black" x="243.25" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteGm6)" style="fill:black;stroke:black" x="269.25" y="0" width="13" height="80"/>
    <rect onclick="play(${soundSet}noteAm6)" style="fill:black;stroke:black" x="295.75" y="0" width="13" height="80"/>
    </svg>`;
}

// let pianoDiv = document.getElementById('piano')
// //C D E F G A B C# D# F# G# A#
// function show()
// {
//     if (document.getElementById('sounds').value == 'piano') soundSet = pianoVar;
//     if (document.getElementById('sounds').value == 'flute') soundSet = fluteVar;
//     pianoDiv.innerHTML = `
//     <svg viewBox="0 0 322 120" width="100%" height="100%">
//     ${soundSet}
//     </svg>

    
//     `;

// }