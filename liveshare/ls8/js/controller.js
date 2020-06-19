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
};

function makeText(tekst)
{
    if (isAlphabetical(tekst) == false) return console.log("Numbers found, we don't like those..");
    ltekst = tekst.toLowerCase();
    answer = '';
    input = document.getElementById('inputs');
    for (let i = 0; i < ltekst.length; i++)
    {
        inputText = ltekst[i];
        translatedText = morseCodeJSON[inputText];
        //storedWords.push(morseCodeJSON[inputText]);
        console.log("ltekst: ", ltekst, 'inputText: ', inputText, 'storedWords: ', storedWords);
        
      //  console.log("Bokstav", inputText, "array", ltekst[i],'Translated', morseCodeJSON[inputText],"Input: ", input.value);
    }
    /*answer = storedWords.join(' ');
    savedWords += storedWords.join(' ');
    //answer = savedWords;
    storedWords = [];
    console.log(answer); */
}

function noSep(storedWords=[], separator=' ')
{
    let answer = '';
    
    let item;
    for(let index = 0; index < storedWords.length; index++)
    {
        item = storedWords [index];

        if (index == 0)
        {
            answer += item;
        }
        else
        {
            answer += `${separator}${item}`;
        }
        return answer;
    }

}

function resetAnswer()
{
    answer = '';
    storedWords = [];
    show();
}

function refresh()
{
    input = '';
    show();
}