import React from 'react';
import { Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import headerStyles from '../css/header.css';
export default class Header extends React.Component {

	render() {
		return(
			<header className ="header">
					<img className="image" src={require('../imgs/logo.png')} />
					<Navbar collapseOnSelect>
					    <Navbar.Header>
					      <Navbar.Brand>
					        <a href="#">Worldwide Shipping</a>
					      </Navbar.Brand>
					      <Navbar.Toggle />
					    </Navbar.Header>
					    <Navbar.Collapse>
					      <Nav pullRight>
					        <NavItem eventKey={1} href="#">Home</NavItem>
					        <NavItem eventKey={2} href="#">Services</NavItem>
					        <NavItem eventKey={3} href="#">Why Worldwide Shipping LLC?</NavItem>
					        <NavItem eventKey={4} href="#">FAQ</NavItem>
					        <NavItem eventKey={5} href="#">Contact Us</NavItem>
					      </Nav>
					    </Navbar.Collapse>
					  </Navbar>
			</header>);
	}
}