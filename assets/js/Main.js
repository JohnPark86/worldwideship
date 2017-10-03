import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Services from './Services'
import FAQ from './FAQ'



export default class Main extends React.Component{

	render(){
		return( 
		 	<div className="bodyContainer">
			    <Switch>
			      <Route exact path='\/' component={Home}/>
			      <Route path='\/services' component={Services}/>  
			      <Route path='\/faq' component={FAQ}/>
			    </Switch>
  			</div>
  		)
	}  
}
