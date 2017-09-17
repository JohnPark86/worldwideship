import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselStyles from '../css/carousel.css';

export default class ImageCarousel extends React.Component {

	render(){
		return(
			<Carousel width="50%" showThumbs={false} className="centerCarousel">
                <div>
                    <img src={require('../imgs/Antique.jpg')}></img>
                </div>
                <div>
                    <img src={require('../imgs/Antique-2.jpg')}></img>
                </div>
                <div>
                    <img src={require('../imgs/Bentley.jpg')}></img>
                </div>
            </Carousel>
		)
	}	
}