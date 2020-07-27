const palindromes = function(word) {
    let oldWord = '';
    let naughtyChars = [' ', '!', '.', ','];
    let reverse = word.toLowerCase();

    reverse = reverse.split('');
    reverse = reverse.filter(element => !naughtyChars.includes(element));

    oldWord = reverse.join('');
    
    reverse = reverse.reverse().join('');
    return oldWord == reverse;
}

module.exports = palindromes
