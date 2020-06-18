let contentDiv = document.getElementById('content');
let resultDiv = document.getElementById('result');

let input = null;
let answer = '';

const morseCodeJSON = {'a':'.-', 'b':'-...', 'c':'-.-.', 'd':'-..', 'e':'.', 'f':'..-.', 'g':'--.', 'h':'....',
'i':'..', 'j':'.---', 'k':'-.-', 'l':'.-..', 'm':'--', 'n':'-.', 'o':'---', 'p':'.--.',
'q':'--.-', 'r':'.-.', 's':'...', 't':'-', 'u':'..-', 'v':'...-', 'w':'.--', 'x':'-..-',
'y':'-.--', 'z':'--..', ' ':' ', 'æ':'·−·−', 'ø':'−−−·', 'å':'·−−·−'};