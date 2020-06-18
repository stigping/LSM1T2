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
    answer = '';
    input = document.getElementById('inputs');
    //console.log('I funksjon: ', inputText, inputText.length, input);
    for (let i = 0; i < tekst.length; i++)
    {
        inputText = tekst[i];
        console.log("Bokstav", inputText, "array", tekst[i],'Translated', morseCodeJSON[inputText],"Input: ", input.value);
        answer += morseCodeJSON[inputText];
    }
}

function refresh()
{
    input = '';
    show();
}