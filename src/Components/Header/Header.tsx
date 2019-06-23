import * as React from 'react'
import { Nav, Navbar, Button, FormControl, Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '/Users/mgm0821/IdeaProjects/bench-overflow/src/Components/Header/Header.css';
import logo from '/Users/mgm0821/IdeaProjects/bench-overflow/src/Components/Header/teamDaughertyLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
		<body>
			<header className="header text-center">	  
				<h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Bench Overflow</a></h1>
				<nav className="navbar navbar-expand-lg navbar-dark" >
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div id="navigation" className="collapse navbar-collapse flex-column" >
						<div className="profile-section pt-3 pt-lg-0">
							<img src={logo} alt="Logo" className="profile-image mb-3 rounded-circle mx-auto"/>
							{/* <img className="profile-image mb-3 rounded-circle mx-auto" src="{logo}" alt="image" ></img> */}

							<div className="bio mb-3">Post your questions to fellow consultant to solve client problems and keep your skills relevant</div>
							<ul className="social-list list-inline py-3 mx-auto">
			            		<li className="list-inline-item"><a href="#"><i className="fas fa-certificate"></i></a></li>
			            		<li className="list-inline-item"><a href="#"><i className="fas fa-award"></i></a></li>
			            		<li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
			            		<li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
			            		<li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
			        		</ul>
							<hr></hr>
						</div>
						<ul className="navbar-nav flex-column text-left" >
						<li className="nav-item active">
							{/* <Link to={`/login`} activeClassName="active">QuestionBoard</Link> */}
					    	<a className="nav-link" href="/"><i className="fas fa-home fa-fw mr-2"></i>Question Board <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
					    	<a className="nav-link" href="/ask"><i className="fas fa-bookmark fa-fw mr-2"></i>Post Question</a>
						</li>
						<li className="nav-item">
					    	<a className="nav-link" href="about.html"><i className="fas fa-user fa-fw mr-2"></i>About Us</a>
						</li>
					</ul>

					<div className=" flex-column pt-3 pt-lg-3">
						<form className="card card-sm">
						<div className="row no-gutters align-items-center">

							<div className="col">
								<input className="form-control form-control-sm form-control-borderless" type="search" placeholder="Search topics or keywords"></input>
							</div>
							
							<div className="col align-right">
								<button className="btn btn-primary" type="submit">Search</button>
							</div>
						
						</div>
						</form>
					</div> 
						
					</div>
					{/* <ul className="navbar-nav flex-column text-left" >
						<li className="nav-item active">
					    	<a className="nav-link" href="index.html"><i className="fas fa-home fa-fw mr-2"></i>Question Board <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
					    	<a className="nav-link" href="blog-post.html"><i className="fas fa-bookmark fa-fw mr-2"></i>Post Question</a>
						</li>
						<li className="nav-item">
					    	<a className="nav-link" href="about.html"><i className="fas fa-user fa-fw mr-2"></i>About Us</a>
						</li>
					</ul>
					<div className=" flex-column pt-3 pt-lg-3">
						<form className="card card-sm">
						<div className="row no-gutters align-items-center">

							<div className="col">
								<input className="form-control form-control-sm form-control-borderless" type="search" placeholder="Search topics or keywords"></input>
							</div>
							
							<div className="col align-items-left">
								<button className="btn btn-primary" type="submit">Search</button>
							</div>
						
						</div>
						</form>
					</div> */}
				</nav>
			</header>
		</body>
			{/* <Navbar bg='primary' variant='dark'>
				<Navbar.Brand href='/'>Bench Overflow</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/profile'>Profile</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-light'>Search</Button>
				</Form>
			</Navbar> */}
		</>
	)
}

export default Header
