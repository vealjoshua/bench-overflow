import { RootAction } from '../Actions'
import { globalActions } from '../Actions/globalActions'
import { globalConstants } from '../Constants/globalConstants'
import { combineReducers } from 'redux'

const redirectTarget = (state = '', action: RootAction = globalActions.otherAction()): string => {
	switch (action.type) {
		case globalConstants.SET_REDIRECT:
			return action.redirectTarget
		default:
			return state
	}
}

const global = combineReducers({
	redirectTarget
})

export interface GlobalState {
	redirectTarget: string
}

export default global
