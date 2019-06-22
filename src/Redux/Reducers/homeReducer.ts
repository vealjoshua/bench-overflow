import { combineReducers } from 'redux'
import { homeActions } from '../Actions/homeActions'
import { homeConstants } from '../Constants/homeConstants'
import { RootAction } from '../Actions'
import { Question } from '../Types/Question'

const isLoggedIn = (state = false, action: RootAction = homeActions.otherAction()): boolean => {
	switch (action.type) {
		case homeConstants.SET_IS_LOGGED_IN:
			return action.isLoggedIn
		default:
			return state
	}
}

const questions = (
	state: Question[] = [],
	action: RootAction = homeActions.otherAction()
): Question[] => {
	switch (action.type) {
		case homeConstants.SET_ALL_QUESTIONS:
			return action.questions
		default:
			return state
	}
}

const home = combineReducers({
	isLoggedIn,
	questions
})

export interface HomeState {
	isLoggedIn: boolean
	questions: Question[]
}

export default home
