import React from 'react';
import ReactDOM from 'react-dom';
import {} from '../css/services.css';

export default class Services extends React.Component {


	render(){
		return(
			<div className="container">
				<h2>Domestic Auto Transport</h2>
				<div className="content">
					<img className="image-left" src={require('../imgs/services1.jpg')} />
					<p className="serviceText">Whether you’re seeking auto transport services to another part of town, another state, or across the country, Worldwide Shipping LLC can accommodate your auto transport needs. As a licensed, bonded, and insured auto transport broker, we work with only the most reputable and reliable car shipping carriers in the industry. Don’t trust your vehicle with just any transport broker… leave your vehicle in the hands of a true professional – Worldwide Shipping LLC. We also transport to Hawaii, Alaska, Puerto Rico, Guam, and Canada.</p>
				</div>
				<h2 className="image-right">International Auto Transport</h2>
				<div className="content">
					<img className="image-right" src={require('../imgs/services2.jpg')} />
					<p className="serviceText">If you’re considering sending your vehicle overseas, call us right away! Worldwide Shipping LLC can offer you the best rates on international auto transport services possible. We pride ourselves on our having some of the best connections in the business, which ensures that we work cooperatively with our contacts to get you the best prices and service available.</p>
				</div>
				<h2>Open Carrier Auto Transport</h2>
				<div className="content">
					<img className="image-left" src={require('../imgs/services3.png')} />
					<p className="serviceText">Open carrier auto transport is the most common method of car shipping, as it is quick, efficient, and affordable. These carriers are the most widely recognized by the public, and are often used by auctions and dealerships to move their vehicles. This service provides a more affordable and competitively priced option than enclosed car shipping. Every vehicle transported on an open carrier is fully insured.</p>
				</div>
				<h2 className="image-right">Enclosed Auto Transport</h2>
				<div className="content">
					<img className="image-right" src={require('../imgs/services4.png')} />
					<p className="serviceText">Enclosed auto transport carriers provide new, luxury, and antique vehicles with protection from the elements while in-transit. If you need your car to arrive ready for a show, sale, or event, ship it enclosed so that it won’t be exposed to rain, snow, dust, or sun. The cost for an enclosed car shipping carrier is considerably higher, but if you have a high-end vehicle that requires extra care, then this is the best choice to keep your vehicle protected. Every vehicle transported in an enclosed carrier is fully insured.</p>
				</div>
				<h2>Classic & Exotic Vehicle Auto Transport</h2>
				<div className="content">
					<img className="image-left" src={require('../imgs/services5.jpg')} />
					<p className="serviceText">Worldwide Shipping LLC has worked with many exotic car dealerships around the world, and we work hand-in-hand with buyers, sellers, and carriers to seamlessly coordinate transport. Whether you’re shipping a million dollar exotic car, or a flawless, irreplaceable antique vehicle, Worldwide Shipping LLC is the auto transport company to use. Your car is important to you, so be sure to hire a professional. We efficiently ship classic and exotic vehicles everyday, and have for years! We only use the latest technology, such as power lift gates, air-ride suspension, and GPS tracking, to ensure your vehicle is always safe.</p>
				</div>
				<h2 className="image-right">Large & Oversize Vehicle Auto Transport</h2>
				<div className="content">
					<img className="image-right" src={require('../imgs/services6.jpg')} />
					<p className="serviceText">Worldwide Shipping LLC is skilled in transporting RV’s and motor homes, and can accommodate several different hitch types, such as fifth wheel, goose-necks, reese hitches, and various ball hitches. We can also perform transport for heavy equipment, such as dump trucks, bulldozers, excavators, and forklifts. Please have dimensions, including weight, and photos available so that we can properly arrange your transport!</p>
				</div>
				<p className="bold">We also transport boats, yachts, motorcycles, all-terrain vehicles, utility trailers, and much more! For a quote, call us directly at 888-505-2851</p>
			</div>
			)
	}
}