import { combineReducers } from 'redux'
import home from './homeReducer'
import global from './globalReducer'
import question from './questionReducer'
import { RootState } from '..'

export default combineReducers<RootState>({
	home,
	global,
	question
})
