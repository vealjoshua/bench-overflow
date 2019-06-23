import { questionConstants } from '../Constants/questionConstants'
import { Question } from '../Types/Question'

export interface SetActiveQuestionAction {
	type: questionConstants.SET_ACTIVE_QUESTION
	question: Question | null
}

export interface OtherAction {
	type: questionConstants.OTHER_ACTION
}

export type QuestionActionTypes = SetActiveQuestionAction | OtherAction

export const questionActions = {
	setActiveQuestionAction: (question: Question | null): SetActiveQuestionAction => ({
		type: questionConstants.SET_ACTIVE_QUESTION,
		question
	}),

	otherAction: (): OtherAction => ({
		type: questionConstants.OTHER_ACTION
	})
}
