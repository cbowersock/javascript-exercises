const reverseString = function(word) {
    let charArray = Array.from(word);
    let reversedWord = '';
    for (let i = charArray.length - 1; i >= 0; i--) {
        reversedWord += charArray[i];
    }
    return reversedWord;
}

module.exports = reverseString
