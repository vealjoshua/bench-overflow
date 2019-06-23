import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import QuestionView from './QuestionView/QuestionView'

const QuestionPage = () => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col>
					<QuestionView />
				</Col>
			</Row>
		</Container>
	)
}

export default QuestionPage
