import { HomeState } from './Reducers/homeReducer'
import { GlobalState } from './Reducers/globalReducer'
import { QuestionState } from './Reducers/questionReducer'

export interface RootState {
	home: HomeState
	global: GlobalState
	question: QuestionState
}
