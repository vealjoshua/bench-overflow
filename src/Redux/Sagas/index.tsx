import { fork, ForkEffect } from 'redux-saga/effects'

import fetchAllQuestionsListener from './fetchAllQuestionsSaga'

export default function* sagasMain(): IterableIterator<ForkEffect> {
	yield fork(fetchAllQuestionsListener)
}
