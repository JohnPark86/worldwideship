import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Services from './Services'

export default class App extends React.Component {


	render(){
		return(
			<div>
				<Home />
				<Services />
			</div>
			)
	}
}