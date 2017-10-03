import React from 'react';
import { Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import headerStyles from '../../css/header.css';


export default class Header extends React.Component {

	render() {
		return(
			<header className="header">
					<Navbar>
					    <Navbar.Header>
					      <Navbar.Brand>
					      <img src={require('../../img/logo.png')} /> 
					        <a href="#">Worldwide Shipping</a>
					      </Navbar.Brand>
					      <Navbar.Toggle />
					    </Navbar.Header>
					    <Navbar.Collapse>
					      <Nav pullRight>
					        <NavItem eventKey={1} href="#/">Home</NavItem>
					        <NavItem eventKey={2} href="#/services">Services</NavItem>
					        <NavItem eventKey={3} href="#/faq">FAQ</NavItem>
					      </Nav>
					    </Navbar.Collapse>
					  </Navbar>
			</header>);
	}
}