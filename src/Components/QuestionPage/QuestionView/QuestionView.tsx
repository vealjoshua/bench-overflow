import * as React from 'react'
import { RootState } from '../../../Redux'
import { connect } from 'react-redux'
import { questionActions, SetActiveQuestionAction } from '../../../Redux/Actions/questionActions'
import { Question } from '../../../Redux/Types/Question'

export interface QuestionViewProps {
	activeQuestion: Question | null
	setActiveQuestion(question: Question | null): SetActiveQuestionAction
}

const QuestionView: React.FunctionComponent<QuestionViewProps> = props => {
	const { activeQuestion } = props

	return (
		<>
			<div className='card'>
				<div className='card-header'>{activeQuestion && activeQuestion.question}</div>
				<div className='card-body'>
					<p className='card-text'>{activeQuestion && activeQuestion.description}</p>
					<a href='#' className='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
			<hr />
			<div className='card mb-3'>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img
							src='https://media.licdn.com/dms/image/C4E03AQFzD6ERpy88cw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=mS8Cz9Wmqy25DWr2a0NgK7XAMnw0uYFQnH-KJxatAhY'
							className='card-img'
							alt='...'
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<p className='card-text'>Hello I am Tom! Pee pee poo poo bpbaoaba opranper aia n</p>
							<p className='card-text'>
								<small className='text-muted'>Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state: RootState) => ({
	activeQuestion: state.question.activeQuestion
})

const mapDispatchToProps = {
	setActiveQuestion: questionActions.setActiveQuestionAction
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionView)
