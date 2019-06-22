import createSagaMiddleware from 'redux-saga'
import sagas from '../Sagas'

const sagaMiddleware = createSagaMiddleware()

const makeReduxMiddleware = () => {
	const middlewares = [sagaMiddleware]

	const { createLogger } = require('redux-logger')
	const loggerMiddleware = createLogger({
		collapsed: true,
		duration: true,
		timestamp: true,
		logErrors: true
	})

	middlewares.push(loggerMiddleware)

	return middlewares
}

export const runSagas = () => sagaMiddleware.run(sagas)

export default makeReduxMiddleware()
