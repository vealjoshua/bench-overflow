import * as React from 'react'
import Login from './Login/Login'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
	return (
		<>
		<div className="main-wrapper">
			<section className="cta-section theme-bg-light py-5">
		    	<div className="container text-center">
			    	<h2 className="heading">Question Board - A Communications Tool For Consultants</h2>
			    
		   		</div>
	    	</section>
		

		<section className="blog-list px-3 py-5 p-md-5">
<div className="container">
	<div className="item mb-5">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">What is the best tool to create an architecture diagram</a></h3>
				<div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
				<div className="intro">I need help creating graphics for a client presentation..</div>
				<a className="more-link" href="/question/1">Read more &rarr;</a>
			</div>
		</div>
	</div>
	<div className="item mb-5">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-2.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">A Guide to Becoming a Full-Stack Developer</a></h3>
				<div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><a href="#">26 comments</a></span></div>
				<div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
				<a className="more-link" href="/question/2">Read more &rarr;</a>
			</div>
		</div>
	</div>
	
	<div className="item mb-5">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-3.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">High Performance JavaScript</a></h3>
				<div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><a href="#">12 comments</a></span></div>
				<div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
				<a className="more-link" href="/question/3">Read more &rarr;</a>
			</div>
		</div>
	</div>
	<div className="item mb-5">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-4.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">Top 5 JavaScript Frameworks</a></h3>
				<div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><a href="#">3 comments</a></span></div>
				<div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
				<a className="more-link" href="/question/4">Read more &rarr;</a>
			</div>
		</div>
	</div>
	
	<div className="item mb-5">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-5.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">Learn React in 24 Hours</a></h3>
				<div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><a href="#">23 comments</a></span></div>
				<div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
				<a className="more-link" href="/question/5">Read more &rarr;</a>
			</div>
		</div>
	</div>
	
	<div className="item">
		<div className="media">
			<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-6.jpg" alt="image"></img>
			<div className="media-body">
				<h3 className="title mb-1"><a href="blog-post.html">About Remote Working</a></h3>
				<div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><a href="#">1 comment</a></span></div>
				<div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
				<a className="more-link" href="/question/6">Read more &rarr;</a>
			</div>
		</div>
	</div>
	
	<nav className="blog-nav nav nav-justified my-5">
	  <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
	  <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
	</nav>
	
</div>
</section>
</div>
</>
		// <Container>
		// 	<Row className='justify-content-md-center'>
		// 		<Col>
		// 			<Login />
		// 		</Col>
		// 	</Row>
		// </Container>
	)
}

export default Home
