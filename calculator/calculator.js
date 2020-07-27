function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let sum = 0;
	array.forEach(num => {
		sum += num;
	})
	return sum;
}

function multiply (array) {
	let sum = 1;
	array.forEach(num => {
		sum *= num;
	})
	return sum;
}

function power(num1, num2) {
	return Math.pow(num1, num2)
}

function factorial(number) {
	return number ? number * factorial(number - 1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}