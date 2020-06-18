function resetAnswer()
{
    answer = '';
    show();
}

function hasNumber(tekst) {
    return /\d/g.test(tekst);
  }

 function hasMeta(tekst) {
     return /^[a-z0-9]+$/i.test(tekst)
 } 