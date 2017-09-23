import React from 'react'
import ReactDOM from 'react-dom'
import homeTextStyles from '../css/hometext.css';

export default class HomeText extends React.Component {

	render(){
		return(
			<div className="homeTextPadding">
			<p>Worldwide Shipping LLC was opened on the principle that people should be able to ship their cars with honest, licensed professionals at reasonable prices. We offer you personalized and simplified auto transportation for one of your most valued possessions – your vehicle! Our commitment as an owner-operated transport company is to provide you with professional, sincere, and dedicated services, from start to finish. Your complete satisfaction is, and always will be, our top priority.</p>

					<p className="bold">Full coverage insurance!</p>

					<p>Your vehicle is fully insured from the moment of pick up until the moment of delivery.</p>

					<p className="bold">No up-front deposits!</p>

					<p>You do not pay a penny until we have a licensed, bonded, and insured carrier dispatched to pick up your vehicle!</p>

					<p className="bold">Door to door transportation!</p>

					<p>You provide us with the pickup and delivery addresses and we coordinate that with our drivers! There are no terminals or depots to worry about.</p>

					<p className="bold">Family-owned and operated company!</p>

					<p>You will never have to speak to a pushy salesperson or an attitude ridden customer service rep! You will always work directly with the owners, ensuring you are provided with the best possible service, every time!</p>

					<p className="bold">Extended office hours!</p>

					<p>Call us at 888-505-2851! We are open from 8 am to 9 pm, 7 days a week. We are also available 24/7 via email; you can reach us at support@worldwideshippingllc.com.</p>
				</div>
			)
	}
}