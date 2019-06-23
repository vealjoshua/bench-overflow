import * as React from 'react'
import { Nav, Navbar, Button, FormControl, Form } from 'react-bootstrap'

const Header = () => {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Navbar.Brand href='/'>Bench Overflow</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/profile'>Profile</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-light'>Search</Button>
				</Form>
			</Navbar>
		</>
	)
}

export default Header
