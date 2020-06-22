function isAlphabetical(tekst)
{
    let code, i, len;
  
    for (i = 0, len = tekst.length; i < len; i++) {
      code = tekst.charCodeAt(i);
      if (!(code > 64 && code < 91) && 
            !(code > 96 && code < 123) &&    
            !(code > 47 && code < 58) &&     
            !(code == 32) &&                 // SPACE
            !(code == 230 || code == 198) && // Æ
            !(code == 248 || code == 216) && // Ø
            !(code == 197 || code == 229))   // Å
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

function isAlphabetical2(tekst) {
    let code, i, len;
  
    for (i = 0, len = tekst.length; i < len; i++) {
      code = tekst.charCodeAt(i);
      if (!(code > 64 && code < 91) && 
          !(code > 96 && code < 123) &&
          !(code == 229 || code == 197)) {
        return false;
      }
    }
    return true;
  };
