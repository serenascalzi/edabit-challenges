import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
// import {hello} from '../actions/Actions'

class App extends Component {

	/* componentDidMount() {
		hello()
	} */

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<h2>JavaScript Functions</h2>
					<h3>Edabit</h3>
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
					</ol>
				</div>
			</Provider>
		)
	}
}

export default App
