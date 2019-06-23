import * as React from 'react'
import { Button, Form, Table, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux'
import {
	homeActions,
	SetIsLoggedInAction,
	FetchAllQuestionsAction
} from '../../../Redux/Actions/homeActions'
import { Question } from '../../../Redux/Types/Question'
import { Redirect } from 'react-router'
import { globalActions, SetRedirectAction } from '../../../Redux/Actions/globalActions'
import { questionActions, SetActiveQuestionAction } from '../../../Redux/Actions/questionActions'

export interface LoginProps {
	isLoggedIn: boolean
	allQuestions: Question[]
	redirectTarget: string
	setIsLoggedIn(isLoggedIn: boolean): SetIsLoggedInAction
	fetchAllQuestions(): FetchAllQuestionsAction
	setRedirect(redirectTarget: string): SetRedirectAction
	setActiveQuestion(question: Question | null): SetActiveQuestionAction
}

const Login: React.FunctionComponent<LoginProps> = props => {
	const {
		isLoggedIn,
		setIsLoggedIn,
		fetchAllQuestions,
		allQuestions,
		setRedirect,
		redirectTarget,
		setActiveQuestion
	} = props

	const formHandler = (e: any) => {
		e.preventDefault()
		setIsLoggedIn(true)
		fetchAllQuestions()
		// setRedirect('')
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

	const rowClickHandler = (e: any, questionId: string) => {
		const activeQuestion: Question | null =
			allQuestions.find((question: Question) => question.id === questionId) || null
		setActiveQuestion(activeQuestion)

		const route = `/question/${questionId}`
		setRedirect(route)
	}

	if (isLoggedIn) {
		if (redirectTarget) {
			return <Redirect to={redirectTarget} />
		}

		return allQuestions ? (
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>Username</th>
						<th>Question</th>
						<th>Client</th>
						<th>LOS</th>
						<th>Date</th>
					</tr>
				</thead>

				<tbody>
					{allQuestions.map((question: Question) => (
						<tr onClick={(e: any) => rowClickHandler(e, question.id)} key={question.id}>
							<td>{question.username}</td>
							<td>{question.question}</td>
							<td>{question.client}</td>
							<td>{question.los}</td>
							<td>{question.timestamp}</td>
						</tr>
					))}
				</tbody>
			</table>
		) : (
			<h1>No questions yet</h1>
		)
	}

	return LoginPrompt
}

const mapStateToProps = (state: RootState) => ({
	isLoggedIn: state.home.isLoggedIn,
	allQuestions: state.home.questions,
	redirectTarget: state.global.redirectTarget
})

const mapDispatchToProps = {
	setIsLoggedIn: homeActions.setIsLoggedIn,
	fetchAllQuestions: homeActions.fetchAllQuestions,
	setRedirect: globalActions.setRedirect,
	setActiveQuestion: questionActions.setActiveQuestionAction
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
