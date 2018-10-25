import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import VeryEasyList from './VeryEasyList'
import EasyList from './EasyList'

class App extends Component {

	/* componentDidMount() {
		hello()
	} */

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<h2>JavaScript Functions</h2>
					<VeryEasyList />
					<EasyList />
				</div>
			</Provider>
		)
	}
}

export default App
