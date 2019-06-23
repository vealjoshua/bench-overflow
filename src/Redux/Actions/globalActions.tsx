import { globalConstants } from '../Constants/globalConstants'

export interface SetRedirectAction {
	redirectTarget: string
	type: globalConstants.SET_REDIRECT
}

export interface OtherAction {
	type: globalConstants.OTHER_ACTION
}

export type GlobalActionsTypes = SetRedirectAction | OtherAction

export const globalActions = {
	setRedirect: (redirectTarget: string): SetRedirectAction => ({
		type: globalConstants.SET_REDIRECT,
		redirectTarget
	}),

	otherAction: (): OtherAction => ({
		type: globalConstants.OTHER_ACTION
	})
}
