import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Components/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path='/' render={() => <Home />} />
			<Footer />
		</BrowserRouter>
	)
}

export default App
