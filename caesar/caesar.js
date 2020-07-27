const caesar = function(string, shift) {
    let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newString = '';
    stringArray = string.split('');
    stringArray.forEach(letter => {
        if (alphaUpper.includes(letter)) {
            if (alphaUpper.indexOf(letter) + shift > 0) {
                newString += alphaUpper[(Math.abs(alphaUpper.indexOf(letter) + shift)) % 26];
            }
            else {
                newString += alphaUpper[(alphaUpper.indexOf(letter) + shift + 26) % 26];
            }
        } 
        else if (alphaLower.includes(letter)) {
            if (alphaLower.indexOf(letter) + shift > 0) {
                newString += alphaLower[(Math.abs(alphaLower.indexOf(letter) + shift)) % 26];
            }
            else {
                newString += alphaLower[(alphaLower.indexOf(letter) + shift + 26) % 26];
            }
        }
        else {
            newString += letter;
        }
    })
    return newString;
}

module.exports = caesar
