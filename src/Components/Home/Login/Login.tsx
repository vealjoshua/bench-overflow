import * as React from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux'
import {
	homeActions,
	SetIsLoggedInAction,
	FetchAllQuestionsAction
} from '../../../Redux/Actions/homeActions'
import { Question } from '../../../Redux/Types/Question'

export interface LoginProps {
	isLoggedIn: boolean
	allQuestions: Question[]
	setIsLoggedIn(isLoggedIn: boolean): SetIsLoggedInAction
	fetchAllQuestions(): FetchAllQuestionsAction
}

const Login: React.FunctionComponent<LoginProps> = props => {
	const { isLoggedIn, setIsLoggedIn, fetchAllQuestions, allQuestions } = props
	const formHandler = (e: any) => {
		e.preventDefault()
		setIsLoggedIn(true)
		fetchAllQuestions()
	}

	const LoginPrompt = (
		<Form onSubmit={formHandler}>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	)

	const rowClickHandler = (e: any) => {
		console.log(e)
	}

	if (isLoggedIn) {
		return allQuestions ? (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th id='username'>Username</th>
						<th>Question</th>
						<th>Client</th>
						<th>LOS</th>
						<th>Date</th>
					</tr>
				</thead>

				<tbody>
					{allQuestions.map((question: Question) => (
						<tr onClick={rowClickHandler} key={question.id}>
							<td>{question.username}</td>
							<td>{question.question}</td>
							<td>{question.client}</td>
							<td>{question.los}</td>
							<td>{question.timestamp}</td>
						</tr>
					))}
				</tbody>
			</Table>
		) : (
			<h1>No questions yet</h1>
		)
	}

	return LoginPrompt
}

const mapStateToProps = (state: RootState) => ({
	isLoggedIn: state.homePage.isLoggedIn,
	allQuestions: state.homePage.questions
})

const mapDispatchToProps = {
	setIsLoggedIn: homeActions.setIsLoggedIn,
	fetchAllQuestions: homeActions.fetchAllQuestions
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
