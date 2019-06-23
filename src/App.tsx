import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Components/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import QuestionPage from './Components/QuestionPage'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<div style={{ height: '25px' }} />
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/question/:id' render={() => <QuestionPage />} />
			<div style={{ height: '50px' }} />
			<Footer />
		</BrowserRouter>
	)
}

export default App
