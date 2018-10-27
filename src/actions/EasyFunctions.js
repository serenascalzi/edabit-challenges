// import store from '../store'

// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
export function minMax(arr) {
	let array = []
	array.push(Math.min(...arr))
	array.push(Math.max(...arr))
	return array	
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
