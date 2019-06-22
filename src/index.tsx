import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, createStore } from 'redux'
import { RootState } from './Redux'
import { Provider } from 'react-redux'
import rootReducer from './Redux/Reducers'
import middlewares, { runSagas } from './Redux/Middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const makeReduxStore = () => {
	const store = createStore<RootState, any, any, any>(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middlewares))
	)
	runSagas()

	return store
}

const store = makeReduxStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
