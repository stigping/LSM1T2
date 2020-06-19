let contentDiv = document.getElementById('content');
let resultDiv = document.getElementById('result');
let storedWords = [];
let savedWords = '';

// hva er dette = morseCodeJSON[,+inputs];
// inputs + ,
// morsekode = [string =('h','e','i', 'p','å', 'd','e','g')]
// input = morsekode

let input = '';
let answer = '';

const morseCodeJSON = {'a':'.-', 'b':'-...', 'c':'-.-.', 'd':'-..', 'e':'.', 'f':'..-.', 'g':'--.', 'h':'....',
'i':'..', 'j':'.---', 'k':'-.-', 'l':'.-..', 'm':'--', 'n':'-.', 'o':'---', 'p':'.--.',
'q':'--.-', 'r':'.-.', 's':'...', 't':'-', 'u':'..-', 'v':'...-', 'w':'.--', 'x':'-..-',
'y':'-.--', 'z':'--..', ' ':' ', 'æ':'·−·−', 'ø':'−−−·', 'å':'·−−·−',
 '1':'', '2':'', '3':'','4':'', '5':'', '6':'','7':'', '8':'', '9':'', '0':''};