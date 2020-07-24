const sumAll = function(num1, num2) {
    let sumNum = 0;

    if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    } else if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            sumNum += i;
        }
        return sumNum;
    } else if (num2 < num1) {
        for (i = num2; i <= num1; i++) {
            sumNum += i;
        }
        return sumNum;
    } 
}

module.exports = sumAll
