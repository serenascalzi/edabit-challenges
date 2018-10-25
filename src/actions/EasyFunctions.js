// import store from '../store'

// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
export function minMax(arr) {
	let array = []
	array.push(Math.min(...arr))
	array.push(Math.max(...arr))
	return array	
}
