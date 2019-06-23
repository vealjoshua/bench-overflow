import { call, put as dispatch, takeLatest } from 'redux-saga/effects'

import { homeActions } from '../Actions/homeActions'
import { get } from './Helpers/makeFetchCall'
import { homeConstants } from '../Constants/homeConstants'

export function* fetchAllQuestionsSaga(): IterableIterator<any> {
	const payload = yield call(get, { url: 'http://localhost:8000/api/load/all' })

	if (payload.error) {
		console.error('Error:', payload.error)
	} else {
		console.log(payload.payload)
		yield dispatch(homeActions.setAllQuestions(payload.payload))
	}
}

export default function*(): IterableIterator<any> {
	yield takeLatest([homeConstants.FETCH_ALL_QUESTIONS], fetchAllQuestionsSaga)
}
