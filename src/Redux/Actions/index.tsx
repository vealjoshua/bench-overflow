import { HomeActionTypes, homeActions } from './homeActions'
import { GlobalActionsTypes, globalActions } from './globalActions'
import { questionActions, QuestionActionTypes } from './questionActions'

export default {
	...homeActions,
	...globalActions,
	...questionActions
}

export type RootAction = HomeActionTypes | GlobalActionsTypes | QuestionActionTypes
