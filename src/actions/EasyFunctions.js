// import store from '../store'

// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
export function minMax(arr) {
	let array = []
	array.push(Math.min(...arr))
	array.push(Math.max(...arr))
	return array	
}

// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	sum = 0
	for (let i = 0; i <= num; i++) {
		sum += i
	}
	return sum
}

// Is it Time for Milk and Cookies?
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function timeForMilkAndCookies(date) {
	if (date.getMonth() == 11 && date.getDate() == 24) {
		return true
	} else {
		return false
	}
}

// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.
function charCount(myChar, str) {
	count = 0
	for (let i = 0; i < str.length; i++) {
		if (myChar == str.charAt(i)) {
			count += 1
		}
	}
	return count
}

// Filter out Strings from an Array
// Create a function that takes an array of positive numbers and strings and returns a new array without the strings. In other words, remove all strings from an array of elements.
function filterArray(arr) {
	let array = []
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'string') {
			array.push(arr[i])
		}
	}
	return array
}

// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
	let string = ''
	for (let i = 0; i < str.length; i++) {
		string += str.charAt(i) + str.charAt(i)
	}
	return string
}

// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	sum = 0
	for (let i = 0; i <= num; i++) {
		sum += i
	}
	return sum
}

// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(arr) {
	return arr.reduce(function(a, b) {
		return Math.abs(a) + Math.abs(b)
	}, 0)
}

// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
	count = 0
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
			count += 1
		}
	}
	return count
}

// Head-Body-Tail
// Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
function verifySubstrs(mainStr, head, body, tail) {
	if (mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
		return 'My head, body, and tail.'
	} else {
		return 'Incomplete.'
	}
}

// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.
function silenceTrump(str) {
	arr = []
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i).toLowerCase() !== 'a' && str.charAt(i).toLowerCase() !== 'e' && str.charAt(i).toLowerCase() !== 'i' && str.charAt(i).toLowerCase() !== 'o' && str.charAt(i).toLowerCase() !== 'u') {
			arr.push(str.charAt(i))
		}
	}
	return arr.join('')
}
