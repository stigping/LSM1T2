function show()
{
    contentDiv.innerHTML = `
    <input id='inputs'>
    <button id='myBtn' onclick="refresh()">Decode</button>
    <button id='resetBtn' onclick="resetAnswer()">Reset</button>
    <div id="answer">${answer}</div>
    `;
}