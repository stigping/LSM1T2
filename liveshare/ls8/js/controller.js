function isAlphabetical(tekst)
{
    let code, i, len;
  
    for (i = 0, len = tekst.length; i < len; i++) {
      code = tekst.charCodeAt(i);
      if (!(code > 64 && code < 91) && 
            !(code > 96 && code < 123) &&
            !(code == 32) &&
            !(code == 230) &&
            !(code == 248) &&
            !(code == 229))

            {
                return false;
            }
        }
    return true;
}

function makeText(tekst)
{
    if (isAlphabetical(tekst) == false) return console.log("Numbers found, we don't like those..");
    ltekst = tekst.toLowerCase();
    answer = '';
    input = document.getElementById('inputs');
    for (let i = 0; i < ltekst.length; i++)
    {
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

function resetAnswer()
{
    answer = '';
    storedWords = [];
    show();
}
