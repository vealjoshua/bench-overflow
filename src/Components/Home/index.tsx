import * as React from 'react'
import Login from './Login/Login'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col>
					<Login />
				</Col>
			</Row>
		</Container>
	)
}

export default Home
