import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/Header';
import ImageCarousel from './js/ImageCarousel'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<ImageCarousel />, document.getElementById('imageCarousel'));