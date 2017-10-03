import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './Main';


export default class App extends React.Component {

	render(){
		return(
			<div>
    			<Header />
    			<Main />
    			<Footer />
			</div>
		)
	}
}



