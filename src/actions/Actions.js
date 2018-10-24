// import store from '../store'

// How Edabit Works
// This is an introduction to how challenges on Edabit work.
export function hello() {
	return 'hello edabit.com'
}

// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.
export function addition(a, b) {
	return a + b	
}

// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
export function addition(num) {
	return num + 1	
}

// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
export function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true
	} else {
		return false
	}
}

// Compare Strings by Sum of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the number of their charcters is equal or not.
export function comp(str1, str2) {
	if (str1.length == str2.length) {
		return true
	} else {
		return false
	}
}

// Return the Last Item in an Array
// Create a function that accepts an array and returns the last item in the array.
export function getLastItem(arr) {
	return arr.pop()
}

// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
export function isEvenOrOdd(num) {
	if (num % 2 == 0) {
		return 'even'
	} else {
		return 'odd'
	}
}

// Find the Index
// Create a function that takes an array and a string as arguments and return the index of the string.
export function find_index(arr, str) {
	return arr.indexOf(str)	
}

// To the Power of _______
// Create a function that takes a base number and an exponent number and returns the calculation.
export function calculateExponent(num, exp) {
	return Math.pow(num, exp)	
}

// Find the Amount of Digits a Number Has
// Create a function that takes a number as an argument and returns the amount of digits it has.
export function findDigitAmount(num) {
	return num.toString().length	
}

// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
export function month_name(num) {
	let month = ''
	if (num == 1) {
		month = 'January'
	} else if (num == 2) {
		month = 'February'
	} else if (num == 3) {
		month = 'March'
	} else if (num == 4) {
		month = 'April'
	} else if (num == 5) {
		month = 'May'
	} else if (num == 6) {
		month = 'June'
	} else if (num == 7) {
		month = 'July'
	} else if (num == 8) {
		month = 'August'
	} else if (num == 9) {
		month = 'September'
	} else if (num == 10) {
		month = 'October'
	} else if (num == 11) {
		month = 'November'
	} else if (num == 12) {
		month = 'December'
	}
	return month
}

// Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.
export function countWords(str) {
	return str.split(' ').length
}

// Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
export function Go(num) {
	let hyphen = ''
	for (let i = 0; i < num; i++) {
		hyphen += '-'
	}
	return hyphen
}

// Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
	return Math.max(...arr)
}
