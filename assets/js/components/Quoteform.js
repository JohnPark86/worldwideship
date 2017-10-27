import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-bootstrap';
import ValidateableForm from 'react-form-validate';
import {} from '../../css/quoteform.css'


export default class QuoteForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
        isOpen: false,
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

    openModal(){
      this.setState({
        isOpen: true
      });
    };
   
    hideModal(){
      this.setState({
        isOpen: false
      });
    };


  	handleChange(event) {
    	var change = {}
    	change[event.target.id] = event.target.value
    	this.setState(change)
  	}

  	handleSubmit(event) {
 		    event.preventDefault();

        var data = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          puCity: this.state.puCity,
          puState: this.state.puState,
          puZip: this.state.puZip,
          dvCity: this.state.dvCity,
          dvState: this.state.dvState,
          dvZip: this.state.dvZip,
          year: this.state.year,
          make: this.state.make,
          model: this.state.model,
          running: this.state.running,
          info: this.state.info
        };

     
         $.ajax({
           type: "POST",
           url: "email.php",
           data: data,
           success: function(data){
            console.log(data);
            { this.openModal };
           }
         });
  	}

  	render() {
        return (
          <div>
            <ValidateableForm  
                onSubmit={this.console}
                rules={{
                  email: {
                      email: true
                  },
                  phoneNumber: {
                      phoneNum (value){
                        return value.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
                      }
                  }
                }}
            >
        	  <form ref="vForm" onSubmit={this.handleSubmit}>
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
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
              explicabo hic incidunt placeat quasi repellendus soluta,
              vero. Autem delectus est laborum minus modi molestias
              natus provident, quidem rerum sint, voluptas!</p>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              Close
            </button>
            <button className='btn btn-primary'>
              Save changes
            </button>
          </ModalFooter>
        </Modal>
      </div>
    	) 
  	}
} 