import React from 'react';
import ReactDOM from 'react-dom'
import {} from '../../css/footer.css'

export default class Footer extends React.Component {

	render(){
		return(
			<div className="footer">
				<div className="footerContact">
					<p>Toll free: 888-505-2851</p>
					<p>Local: 305-901-1410</p>
				</div>
				<div className="footerContact">
					<p>Fax: 888-505-2853</p>
					<p>MC #: 934235</p>
				</div>
			</div>
		);
	}
}