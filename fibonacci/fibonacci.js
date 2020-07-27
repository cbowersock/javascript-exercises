const fibonacci = function(num) {
    let fibNum = 1;
    let fibNumMinus1 = 1;
    let fibNumMinus2 = 0;
    let numArray = []

    if (parseInt(num) > 0) {
        while (numArray.length < num) {
            numArray.push(fibNum);
            fibNum = fibNumMinus2 + fibNumMinus1
            fibNumMinus2 = fibNumMinus1;
            fibNumMinus1 = fibNum;
        }
    
        return numArray[num - 1];
    }
    else return 'OOPS'
}

module.exports = fibonacci
