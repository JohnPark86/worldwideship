import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselStyles from '../../css/carousel.css';

export default class ImageCarousel extends React.Component {

	render(){
		return(
			<div>
				<h1 className="slogan">WHATEVER YOU NEED. WHENEVER YOU NEED IT.</h1> 
				<div className="centerCarousel">   
					<Carousel showThumbs={false}>
						<div>
		                    <img src={require('../../img/Antique.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/Antique-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/Bentley.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/black.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/black-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/Car-Carrier-2.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/car-shipping.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/Carrier.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/exotic.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/porsche-1.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/Porsche.jpg')}></img>
		                </div>
		                <div>
		                    <img src={require('../../img/red.jpg')}></img>
		                </div>
	            	</Carousel>
           		 </div>
           	</div>
		)
	}	
}