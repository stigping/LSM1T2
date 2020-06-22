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
'1':'u', '2':'n', '3':'i','4':'c', '5':'o', '6':'r','7':'n', '8':';', '9':'-', '0':')', '?':'..--..'};

// ! = · · − − · @	· − − · − ·
