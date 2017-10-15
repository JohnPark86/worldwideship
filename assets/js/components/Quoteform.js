import React from 'react';
import ReactDOM from 'react-dom';


export default class QuoteForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		name: '',
    		number: '',
    		email: '',
    		puCity: '',
    		puState: '',
    		puZip: '',
    		dvCity: '',
    		dvState: '',
    		dvZip: '',
    		year: '',
    		make: '',
    		model: '',
    		running: ''
    	};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	var change = {}
    	change[event.target.id] = event.target.value
    	this.setState(change)
  	}

  	handleSubmit(event) {
    	console.log('submitted: ' + this.state.name  + 
    		" --- " + this.state.number + 
    		" --- " + this.state.email + 
    		" --- " + this.state.puCity + 
    		" --- " + this.state.puState + 
    		" --- " + this.state.puZip +
    		" --- " + this.state.dvCity + 
    		" --- " + this.state.dvState + 
    		" --- " + this.state.dvZip +
    		" --- " + this.state.year +
    		" --- " + this.state.make + 
    		" --- " + this.state.model + 
    		" --- " + this.state.running
    		);
 		event.preventDefault();
  	}

  	render() {
    	return (
      	<form onSubmit={this.handleSubmit}>
      		<h3> Your Info </h3>
        	<label>
          		Your Name:
          		<input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        	</label>
        	<label>
          		Your Phone Number:
          		<input id="number" type="text" value={this.state.number} onChange={this.handleChange} />
        	</label>
        	<label>
          		Your Email:
          		<input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
        	</label>
        	<h3> Pick-up Info </h3>
        	<label>
          		City:
          		<input id="puCity" type="text" value={this.state.puCity} onChange={this.handleChange} />
        	</label>
        	<label>
          		State:
          		<input id="puState" type="text" value={this.state.puState} onChange={this.handleChange} />
        	</label>
        	<label>
          		Zip Code:
          		<input id="puZip" type="text" value={this.state.puZip} onChange={this.handleChange} />
        	</label>
        	<h3> Delivery Info </h3>
        	<label>
          		City:
          		<input id="dvCity" type="text" value={this.state.dvCity} onChange={this.handleChange} />
        	</label>
        	<label>
          		State:
          		<input id="dvState" type="text" value={this.state.dvState} onChange={this.handleChange} />
        	</label>
        	<label>
          		Zip Code:
          		<input id="dvZip" type="text" value={this.state.dvZip} onChange={this.handleChange} />
        	</label>
        	<h3> Vehicle Info </h3>
        	<label>
          		Year:
          		<input id="year" type="text" value={this.state.year} onChange={this.handleChange} />
        	</label>
        	<label>
          		Make:
          		<input id="make" type="text" value={this.state.make} onChange={this.handleChange} />
        	</label>
        	<label>
          		Model:
          		<input id="model" type="text" value={this.state.model} onChange={this.handleChange} />
        	</label>
        	<label>
        		Running/Inop
        		<input id="running" type="text" value={this.state.running} onChange={this.handleChange} />
        	</label>
        	<input type="submit" value="Submit" />
      	</form>
    	);
  	}
} 