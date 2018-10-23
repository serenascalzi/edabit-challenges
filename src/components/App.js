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
						<li>How Edabit Works</li>
					</ul>
				</div>
			</Provider>
		)
	}
}

export default App
