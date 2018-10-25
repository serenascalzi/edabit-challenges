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
export function findLargestNum(arr) {
	return Math.max(...arr)
}

// Flip the Boolean
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
export function reverse(bool) {
	if (bool === true) {
		return false
	} else if (bool === false) {
		return true
	} else {
		return 'boolean expected'
	}
}

// Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.
export function findSmallestNum(arr) {
	return Math.min(...arr)	
}

// Shuffle the Name
// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
export function nameShuffle(str) {
	return str.split(' ').reverse().join(' ')
}

// Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.
export function reverse(str) {
	return str.split('').reverse().join('')
}

// Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false.
export function checkEnding(str1, str2) {
	if (str1.endsWith(str2)) {
		return true
	} else {
		return false
	}
}

// Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.
export function MultiplyByLength(arr) {
	return arr.map(function(item) {
		return item * arr.length
	})
}

// Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.
export function AlphabetSoup(str) {
	return str.split('').sort().join('')
}

// Return the Four Letter Strings
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
export function isFourLetters(arr) {
	return arr.filter(function(item) {
		return item.length == 4		
	})
}

// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
export function repeat(item, times) {
	let arr = []
	for (i = 0; i < times; i++) {
		arr.push(item)
	}
	return arr
}

// Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.
function noOdds(arr) {
	return arr.filter(function(item) {
		return item % 2 == 0
	})
}
