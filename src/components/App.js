import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
// import {hello} from '../actions/VeryEasy'

class App extends Component {

	/* componentDidMount() {
		hello()
	} */

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<h2>JavaScript Functions</h2>
					<h3>Very Easy</h3>
					<ol>
						<li>How Edabit Works</li>
						<li>Return the Sum of Two Numbers</li>
						<li>Return the Next Number from the Integer Passed</li>
						<li>Is the Number Less than or Equal to Zero?</li>
						<li>Compare Strings by Sum of Characters</li>
						<li>Return the Last Item in an Array</li>
						<li>Is the Number Even or Odd?</li>
						<li>Find the Index</li>
						<li>To the Power of _______</li>
						<li>Find the Amount of Digits a Number Has</li>
						<li>Convert Number to Corresponding Month Name</li>
						<li>Get Word Count</li>
						<li>Convert Number to String of Dashes</li>
						<li>Find the Largest Number in an Array</li>
						<li>Flip the Boolean</li>
						<li>Find the Smallest Number in an Array</li>
						<li>Shuffle the Name</li>
						<li>Reverse the Order of a String</li>
						<li>Check if String Ending Matches Second String</li>
						<li>Multiply by Length</li>
						<li>Alphabet Soup</li>
						<li>Return the Four Letter Strings</li>
						<li>Repeat the Same Item Multiple Times</li>
						<li>Eliminate Odd Numbers within an Array</li>
					</ol>
					<h3>Easy</h3>
					<ol>
						<li>Find the Smallest and Biggest Numbers</li>
					</ol>
				</div>
			</Provider>
		)
	}
}

export default App
