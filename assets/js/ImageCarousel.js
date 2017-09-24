import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselStyles from '../css/carousel.css';

export default class ImageCarousel extends React.Component {

	render(){
		return(
			<div className="container">
				<h2 className="slogan">“Whatever you need, wherever you need it.”</h2>
				<div className="centerCarousel">    
					<Carousel showThumbs={false}>
						<div>
		                    <img src={require('../imgs/Antique.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/Antique-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/Bentley.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/black.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/black-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/Car-Carrier-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/car-shipping.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/Carrier.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/exotic.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/porsche-1.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/Porsche.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../imgs/red.jpg')}></img>
		                </div>
	            	</Carousel>
           		 </div>
           	</div>
		)
	}	
}