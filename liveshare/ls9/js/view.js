let pianoDiv = document.getElementById('piano')
//C D E F G A B C# D# F# G# A#
function show() {
    pianoDiv.innerHTML = `
<svg width="auto" height="900px">
<rect onclick="play(noteC)" style="fill:white;stroke:black" x="0" y="713" width="80" height="180"/>
<rect onclick="play(noteD)" style="fill:white;stroke:black" x="43" y="713" width="80" height="180"/>
<rect onclick="play(noteE)" style="fill:white;stroke:black" x="86" y="713" width="80" height="180"/>
<rect onclick="play(noteF)" style="fill:white;stroke:black" x="129" y="713" width="23" height="180"/>
<rect onclick="play(noteG)" style="fill:white;stroke:black" x="142" y="713" width="23" height="180"/>
<rect onclick="play(noteA)" style="fill:white;stroke:black" x="175" y="713" width="23" height="180"/>
<rect onclick="play(noteB)" style="fill:white;stroke:black" x="218" y="713" width="23" height="180"/>
<!--  White keys 2  -->
<rect onclick="play(noteC6)" style="fill:white;stroke:black" x="241" y="713" width="23" height="180"/>
<rect onclick="play(noteD6)" style="fill:white;stroke:black" x="284" y="713" width="23" height="180"/>
<rect onclick="play(noteE6)" style="fill:white;stroke:black" x="317" y="713" width="23" height="180"/>
<rect onclick="play(noteF6)" style="fill:white;stroke:black" x="380" y="713" width="23" height="180"/>
<rect onclick="play(noteG6)" style="fill:white;stroke:black" x="453" y="713" width="23" height="180"/>
<rect onclick="play(noteA6)" style="fill:white;stroke:black" x="576" y="713" width="23" height="180"/>
<rect onclick="play(noteB6)" style="fill:white;stroke:black" x="699" y="713" width="23" height="180"/>

<!--  Black keys  -->
<rect onclick="play(noteCm)" style="fill:black;stroke:black" x="26" y="713" width="23" height="80"/>
<rect onclick="play(noteDm)" style="fill:black;stroke:black" x="52" y="713" width="23" height="80"/>
<rect onclick="play(noteFm)" style="fill:black;stroke:black" x="85.25" y="713" width="23" height="80"/>
<rect onclick="play(noteGm)" style="fill:black;stroke:black" x="108.25" y="713" width="23" height="80"/>
<rect onclick="play(noteAm)" style="fill:black;stroke:black" x="132.75" y="713" width="23" height="80"/>
<!--  Black keys 2  -->
<rect onclick="play(noteCm6)" style="fill:black;stroke:black" x="177.66666" y="713" width="23" height="80"/>
<rect onclick="play(noteDm6)" style="fill:black;stroke:black" x="200.66666" y="713" width="23" height="80"/>
<rect onclick="play(noteFm6)" style="fill:black;stroke:black" x="246.66666" y="713" width="23" height="80"/>
<rect onclick="play(noteGm6)" style="fill:black;stroke:black" x="268.66666" y="713" width="23" height="80"/>
<rect onclick="play(noteAm6)" style="fill:black;stroke:black" x="292.75" y="713" width="23" height="80"/>
</svg>`;
}