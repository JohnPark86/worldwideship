import React from 'react';
import ReactDOM from 'react-dom'
import {} from '../../css/footer.css'


export default class Footer extends React.Component {

	render(){
		return(
			<footer className="footer">
				<div className="container-left">
					<ul>
						<li><b><u>CONTACT US:</u></b></li>
						<li><b>Toll free:</b> 888-505-2851</li>
						<li><b>Local:</b> 305-901-1410</li>
						<li><b>Fax:</b> 888-505-2853</li>
						<li><b>MC #:</b> 934235</li>
					</ul>
				</div>
				<div className="container-center">
					<img src={require('../../img/central.png')} />
					<img src={require('../../img/fmcsa.gif')} />
					<img src={require('../../img/dept.png')} />
					<img src={require('../../img/auth.png')} />
				</div>
				<div className="container-right">
					<img src={require('../../img/payment.png')} />
				</div>
			</footer>
		);
	}
}