import * as React from 'react'
import { RootState } from '../../../Redux'
import { connect } from 'react-redux'
import { questionActions, SetActiveQuestionAction } from '../../../Redux/Actions/questionActions'
import { Question, Reply } from '../../../Redux/Types/Question'

export interface QuestionViewProps {
	activeQuestion: Question | null
	setActiveQuestion(question: Question | null): SetActiveQuestionAction
}

const QuestionView: React.FunctionComponent<QuestionViewProps> = props => {
	const { activeQuestion } = props

	const comments =
		activeQuestion &&
		activeQuestion.comments.map((comment: Reply) => (
			<div>
				<hr />
				<div className='card mb-3'>
					<div className='row no-gutters'>
						<div className='col-md-10'>
							<div className='card-body'>
								<p className='card-text'>{comment.answer}</p>
								<p className='card-text'>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div className='col-md-2'>
							<img
								src='https://media.licdn.com/dms/image/C4E03AQFzD6ERpy88cw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=mS8Cz9Wmqy25DWr2a0NgK7XAMnw0uYFQnH-KJxatAhY'
								className='card-img'
								alt='...'
							/>
						</div>
					</div>
				</div>
			</div>
		))

	return (
		<>
			<div className='card mb-3'>
				<div className='card-header text-white bg-primary font-weight-bold'>
					{activeQuestion && activeQuestion.question}
				</div>
				<div className='row no-gutters'>
					<div className='col-md-2'>
						<img
							src='https://media.licdn.com/dms/image/C4E03AQFzD6ERpy88cw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=mS8Cz9Wmqy25DWr2a0NgK7XAMnw0uYFQnH-KJxatAhY'
							className='card-img'
							alt='...'
						/>
					</div>
					<div className='card-body'>
						<p className='card-text'>{activeQuestion && activeQuestion.description}</p>
					</div>
				</div>
			</div>
			{comments}
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
