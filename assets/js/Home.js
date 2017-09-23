import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ImageCarousel from './ImageCarousel'
import HomeText from './HomeText'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class Home extends React.Component {

	render(){
		return(
			<div>
				<Header />
				<ImageCarousel />
				<HomeText />
			</div>
		)
	}
}