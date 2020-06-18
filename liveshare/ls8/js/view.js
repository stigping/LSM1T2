function show()
{
    contentDiv.innerHTML = `
    <input id='inputs' oninput="makeText(this.value)">
    <button id='myBtn' onclick="refresh()">Decode</button>
    <button id='resetBtn' onclick="resetAnswer()">Reset</button>
    <div id="answer">${answer}</div>
    `;
}

function makeText(tekst)
{
    if (hasNumber(tekst) == true) return ; 
    if (hasMeta(tekst) == true) return;
    ltekst = tekst.toLowerCase();
    answer = '';
    input = document.getElementById('inputs');
    for (let i = 0; i < ltekst.length; i++)
    {
        ltekst = ltekst.toLowerCase();
        inputText = ltekst[i];
        console.log("Bokstav", inputText, "array", ltekst[i],'Translated', morseCodeJSON[inputText],"Input: ", input.value);
        answer += morseCodeJSON[inputText];
    }
}

function refresh()
{
    input = '';
    show();
}