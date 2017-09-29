import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarousel from './components/ImageCarousel'
import HomeText from './components/HomeText'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class Home extends React.Component {

	render(){
		return(
			<div>
				<ImageCarousel />
				<HomeText />
			</div>
		)
	}
}