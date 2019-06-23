import * as React from 'react'
// import { RootState } from '../../../Redux'
// import { connect } from 'react-redux'
// import { questionActions, SetActiveQuestionAction } from '../../../Redux/Actions/questionActions'
// import { Question } from '../../../Redux/Types/Question'
import '/Users/mgm0821/IdeaProjects/bench-overflow/src/Components/Header/Header.css';


const PostQuestionPage = () =>  {
	return (
		<>
			<div className="main-wrapper">
	    
	    		<article className="blog-post px-3 py-5 p-md-5">
		    		<div className="container">
			    		<header className="blog-post-header">
				    		<h2 className="title mb-1">Submit Your Question</h2>
			    		</header>
			    
			    		<div className="blog-post-body">
							<form className="text-center border border-light p-5">

								<div className="form-row mb-4">
									<div className="col">
								
										<input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"></input>
									</div>
									<div className="col">
								
										<input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"></input>
									</div>
								</div>

						
								<input type="email" id="submitQuestionFormEmail" className="form-control mb-4" placeholder="Question Title"></input>

						
								<input type="text" id="submitQuestionFormDescription" className="form-control mb-4" placeholder="Description"></input>

						
								<input type="text" id="submitQuestionFormClient" className="form-control mb-4" placeholder="Client"></input>

						
						<div className="custom-control custom-checkbox ">
							<div className="col">
								<input type="checkbox" className="custom-control-input" id="defaultRegisterFormSAE"></input>
								<label className="custom-control-label" htmlFor="defaultRegisterFormSAE">SAE</label>
							</div>

							<div className="col">
								<input type="checkbox" className="custom-control-input" id="defaultRegisterFormDA"></input>
								<label className="custom-control-label" htmlFor="defaultRegisterFormDA">DA</label>
							</div>

							<div className="col">
								<input type="checkbox" className="custom-control-input" id="defaultRegisterFormDL"></input>
								<label className="custom-control-label" htmlFor="defaultRegisterFormDL">DL</label>
							</div>

							<div className="col">
								<input type="checkbox" className="custom-control-input" id="defaultRegisterFormBA"></input>
								<label className="custom-control-label" htmlFor="defaultRegisterFormBA">BA</label>
							</div>

						</div>

						
						<button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>

						
						<p>or sign up with:</p>

						<a type="button" className="light-blue-text mx-2">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a type="button" className="light-blue-text mx-2">
							<i className="fab fa-twitter"></i>
						</a>
						<a type="button" className="light-blue-text mx-2">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a type="button" className="light-blue-text mx-2">
							<i className="fab fa-github"></i>
						</a>

						<hr></hr>

						
						{/* <p>By clicking
							<em>Sign up</em> you agree to our
							<a href="" target="_blank">terms of service</a> */}

					</form>
			    </div>
				    
			    <nav className="blog-nav nav nav-justified my-5">
				  <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
						
		    </div>
	    </article>

    </div>
		</>
	)
}

export default PostQuestionPage
