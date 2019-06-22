import { combineReducers } from 'redux'
import homePage from './homeReducer'
import { RootState } from '..'

export default combineReducers<RootState>({
	homePage
})
