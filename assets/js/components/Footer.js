import React from 'react';
import ReactDOM from 'react-dom'
import {} from '../../css/footer.css'

export default class Footer extends React.Component {

	render(){
		return(
			<div className="footer">
				<div className="footerFloatLeft ">
					<div className="footerContact">
						<img className="payments" src={require('../../img/payment.png')} />
					</div>
					<div className="footerContact">
						<p><b>Toll free:</b> 888-505-2851</p>
						<p><b>Local:</b> 305-901-1410</p>
					</div>
					<div className="footerContact">
						<p><b>Fax:</b> 888-505-2853</p>
						<p><b>MC #:</b> 934235</p>
					</div>
				</div>
				<div className="footerFloatRight">
				    <img src={require('../../img/central.png')} />
					<img src={require('../../img/fmcsa.gif')} />
					<img src={require('../../img/dept.png')} />
					<img src={require('../../img/auth.png')} />
				</div>
			</div>
		);
	}
}