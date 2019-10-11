const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let mas = [];
    let j = 0;
    let output = '';
    for (let i = 0; i < expr.length; i += 10) {
            mas[j] = expr.substr(i, 10);
            j++;
        }
    for (let i = 0; i < mas.length; i++) {
        let j = 0;
        let result = '';
        let letter = mas[i];
        while (j < letter.length) {
            if (letter[j] + letter[j+1] == '00') {
                result += '';
                j+=2;
            }
            else if (letter[j] + letter[j+1] == '10') {
                result += '.';
                j+=2;
            }
            else if (letter[j] + letter[j+1] == '11') {
                result += '-';
                j+=2;
            }
            else {
                result = ' ';
                j = 10;
            }
        }
        mas[i] = result;
    }
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] != " ") {
            output += MORSE_TABLE[mas[i]];
        }
        else {
            output += " ";
        }
    }
    return output;
}

module.exports = {
    decode
}