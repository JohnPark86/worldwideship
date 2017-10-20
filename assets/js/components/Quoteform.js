import React from 'react';
import ReactDOM from 'react-dom';
import ValidateableForm from 'react-form-validate';
import {} from '../../css/quoteform.css'


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
    		running: '',
    		info: ''
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
 		    event.preventDefault();
  	}

  	render() {
        return (
            <ValidateableForm  
                onSubmit={this.console}
                rules={{
                  email: {
                      email: true
                  },
                  phoneNumber: {
                      phoneNum (value){
                        console.log(value);
                        return value.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
                      }
                  }
                }}
            >
                
        	  <form  ref="vForm" onSubmit={this.handleSubmit}>
          		<h3> Your Info </h3>
            	<label className="margin-left">
              		Your Name:
              		<input name="name" className="form-control" id="name" type="text" value={this.state.name} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Your Phone Number:
              		<input placeholder="xxx-xxx-xxxx" name="phoneNumber" className="form-control" id="number" type="text" value={this.state.number} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Your Email:
              		<input name="email" className="form-control" id="email" type="text" value={this.state.email} onChange={this.handleChange} required />
            	</label>
            	<h3> Pick-up Info </h3>
            	<label className="margin-left">
              		City:
              		<input name="puCity" className="form-control" id="puCity" type="text" value={this.state.puCity} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		State:
              		<input name="puState" className="form-control" id="puState" type="text" value={this.state.puState} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Zip Code:
              		<input name="puZip" className="form-control" id="puZip" type="text" value={this.state.puZip} onChange={this.handleChange} required />
            	</label>
            	<h3> Delivery Info </h3>
            	<label className="margin-left">
              		City:
              		<input name="dvCity" className="form-control" id="dvCity" type="text" value={this.state.dvCity} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		State:
              		<input name="dvState" className="form-control" id="dvState" type="text" value={this.state.dvState} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Zip Code:
              		<input name="dvZip" className="form-control" id="dvZip" type="text" value={this.state.dvZip} onChange={this.handleChange} required />
            	</label>
            	<h3> Vehicle Info </h3>
            	<label className="margin-left">
              		Year:
              		<input name="year" className="form-control" id="year" type="text" value={this.state.year} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Make:
              		<input name="make" className="form-control" id="make" type="text" value={this.state.make} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
              		Model:
              		<input name="model" className="form-control" id="model" type="text" value={this.state.model} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left">
            		Running/Inop
            		<input name="running" className="form-control" id="running" type="text" value={this.state.running} onChange={this.handleChange} required />
            	</label>
            	<label className="margin-left full-width">
              		Additional Information:
              		<textarea name="info" className="form-control" id="info" rows="4" value={this.state.info} onChange={this.handleChange} />
            	</label>
            	<div className="center" >
            		<input className="btn btn-default btn-lg" type="submit" value="Submit" />
          		</div>
            </form>
        </ValidateableForm>
    	) 
  	}
} 