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
				<div>
					<ul>
						<li>10.21.18: How Edabit Works</li>
						<li>10.22.18: Return the Sum of Two Numbers</li>
					</ul>
				</div>
			</Provider>
		)
	}
}

export default App
