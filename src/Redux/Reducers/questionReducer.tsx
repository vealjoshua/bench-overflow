import { Question } from '../Types/Question'
import { RootAction } from '../Actions'
import { questionActions } from '../Actions/questionActions'
import { questionConstants } from '../Constants/questionConstants'
import { combineReducers } from 'redux'

const activeQuestion = (
	state: Question | null = null,
	action: RootAction = questionActions.otherAction()
): Question | null => {
	switch (action.type) {
		case questionConstants.SET_ACTIVE_QUESTION:
			return action.question
		default:
			return state
	}
}

const question = combineReducers({
	activeQuestion
})

export interface QuestionState {
	activeQuestion: Question | null
}

export default question
