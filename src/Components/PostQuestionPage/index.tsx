import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PostQuestionPage from './PostQuestionPage/PostQuestionPage'

const QuestionPage = () => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col>
					<PostQuestionPage />
				</Col>
			</Row>
		</Container>
	)
}

export default QuestionPage
