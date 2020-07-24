const repeatString = function(word, times) {
    let repeatedWord = '';
    if (times < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < times; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

module.exports = repeatString
