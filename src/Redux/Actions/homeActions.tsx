import { homeConstants } from '../Constants/homeConstants'
import { Question } from '../Types/Question'

export interface SetIsLoggedInAction {
	isLoggedIn: boolean
	type: homeConstants.SET_IS_LOGGED_IN
}

export interface OtherAction {
	type: homeConstants.OTHER_ACTION
}

export interface FetchAllQuestionsAction {
	type: homeConstants.FETCH_ALL_QUESTIONS
}

export interface SetAllQuestionsAction {
	type: homeConstants.SET_ALL_QUESTIONS
	questions: Question[]
}

export type HomeActionTypes =
	| SetIsLoggedInAction
	| OtherAction
	| FetchAllQuestionsAction
	| SetAllQuestionsAction

export const homeActions = {
	setIsLoggedIn: (isLoggedIn: boolean): SetIsLoggedInAction => ({
		type: homeConstants.SET_IS_LOGGED_IN,
		isLoggedIn
	}),
	fetchAllQuestions: (): FetchAllQuestionsAction => ({
		type: homeConstants.FETCH_ALL_QUESTIONS
	}),
	setAllQuestions: (questions: Question[]): SetAllQuestionsAction => ({
		type: homeConstants.SET_ALL_QUESTIONS,
		questions
	}),

	otherAction: (): OtherAction => ({
		type: homeConstants.OTHER_ACTION
	})
}
