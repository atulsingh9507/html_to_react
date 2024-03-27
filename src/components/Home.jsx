import React from 'react';
import {Link} from 'react-router-dom';

const Home= () => {
  return (
    <div>
   

<header className="navigation">
	<div className="header-top ">
		<div className="container">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2 col-md-4">
					<div className="header-top-socials text-center text-lg-left text-md-left">
						<Link to="https://www.facebook.com/themefisher" target="_blank"><i className="ti-facebook"></i></Link>
						<Link to="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter"></i></Link>
						<Link to="https://github.com/themefisher/" target="_blank"><i className="ti-github"></i></Link>
					</div>
				</div>
				<div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
					<div className="header-top-info">
						<Link to="tel:+23-345-67890">Call Us : <span>+23-345-67890</span></Link>
						<Link to="mailto:support@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>support@gmail.com</span></Link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav className="navbar navbar-expand-lg  py-4" id="navbar">
		<div className="container">
		  <Link className="navbar-brand" to="index.html">
		  	Mega<span>kit.</span>
		  </Link>

		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span className="fa fa-bars"></span>
		  </button>
	  
		  <div className="collapse navbar-collapse text-center" id="navbarsExample09">
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item active">
				<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			  </li>
			  <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown03">
						<li><Link className="dropdown-item" to="/about">Our company</Link></li>
						<li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
					</ul>
			  </li>
			   <li className="nav-item"><Link className="nav-link" to="service.html">Services</Link></li>
			   <li className="nav-item"><Link className="nav-link" to="project.html">Portfolio</Link></li>
			   <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
						<li><Link className="dropdown-item" to="blog-grid.html">Blog Grid</Link></li>
						<li><Link className="dropdown-item" to="blog-sidebar.html">Blog with Sidebar</Link></li>

						<li><Link className="dropdown-item" to="blog-single.html">Blog Single</Link></li>
					</ul>
			  </li>
			   <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
			</ul>

			<form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
			  <Link to="contact.html" className="btn btn-solid-border btn-round-full">Get Link Quote</Link>
			</form>
		  </div>
		</div>
	</nav>
</header>



<div className="main-wrapper ">

<section className="slider">
	<div className="container">
		<div className="row">
			<div className="col-lg-9 col-md-10">
				<div className="block">
					<span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
					<h1 className="animated fadeInUp mb-5">Our work is presentation of our capabilities.</h1>
					<Link to="#" target="_blank" className="btn btn-main animated fadeInUp btn-round-full" >Get started<i className="btn-icon fa fa-angle-right ml-2"></i></Link>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section intro">
	<div className="container">
		<div className="row ">
			<div className="col-lg-8">
				<div className="section-title">
					<span className="h6 text-color ">We are creative & expert people</span>
					<h2 className="mt-3 content-title">We work with business & provide solution to client with their business problem </h2>
				</div>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-12">
				<div className="intro-item mb-5 mb-lg-0"> 
					<i className="ti-desktop color-one"></i>
					<h4 className="mt-4 mb-3">Modern & Responsive design</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="intro-item mb-5 mb-lg-0">
					<i className="ti-medall color-one"></i> 
					<h4 className="mt-4 mb-3">Awarded licensed company</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="intro-item">
					<i className="ti-layers-alt color-one"></i>
					<h4 className="mt-4 mb-3">Build your website Professionally</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div> 
		</div>
	</div>
</section>



<section className="section about position-relative">
	<div className="bg-about"></div>
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-6 offset-md-0">
				<div className="about-item ">
					<span className="h6 text-color">What we are</span>
					<h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
					<div className="about-content">
						<h4 className="mb-3 position-relative">We are Perfect Solution</h4>
						<p className="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>

						<Link to="#" className="btn btn-main btn-round-full">Get started</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section counter">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">1730</span> +</h3>
					<p className="text-muted">Project Done</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">125 </span>M </h3>
					<p className="text-muted">User Worldwide</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">39</span></h3>
					<p className="text-muted">Availble Country</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">14</span></h3>
					<p className="text-muted">Award Winner </p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section service border-top">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Our Services</span>
					<h2 className="mt-3 content-title ">We provide Link wide range of creative services </h2>
				</div>
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-desktop"></i>
					<h4 className="mb-3">Web development.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-layers"></i>
					<h4 className="mb-3">Interface Design.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-bar-chart"></i>
					<h4 className="mb-3">Business Consulting.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5 mb-lg-0">
					<i className="ti-vector"></i>
					<h4 className="mb-3">Branding.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5 mb-lg-0">
					<i className="ti-android"></i>
					<h4 className="mb-3">App development.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5 mb-lg-0">
					<i className="ti-pencil-alt"></i>
					<h4 className="mb-3">Content creation.</h4>
					<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section cta">
	<div className="container">
		<div className="row">
			<div className="col-lg-5">
				<div className="cta-item  bg-white p-5 rounded">
					<span className="h6 text-color">We create for you</span>
					<h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
					<p className="lead mb-4">Have any project on mind? For immidiate support :</p>
					<h3><i className="ti-mobile mr-3 text-color"></i>+23 876 65 455</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section testimonial">
	<div className="container">
		<div className="row">
			<div className="col-lg-7 ">
				<div className="section-title">
					<span className="h6 text-color">Clients testimonial</span>
					<h2 className="mt-3 content-title">Check what's our clients say about us</h2>
				</div>
			</div>
		</div>
	</div>

	<div className="container">
		<div className="row testimonial-wrap">
			<div className="testimonial-item position-relative">
				<i className="ti-quote-left text-color"></i>

				<div className="testimonial-item-content">
					<p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>

					<div className="testimonial-author">
						<h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
						<p>Excutive Director,themefisher</p>
					</div>
				</div>
			</div>
			<div className="testimonial-item position-relative">
				<i className="ti-quote-left text-color"></i>

				<div className="testimonial-item-content">
					<p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>

					<div className="testimonial-author">
						<h5 className="mb-0 text-capitalize">Mickel hussy</h5>
						<p>Excutive Director,themefisher</p>
					</div>
				</div>
			</div>
			<div className="testimonial-item position-relative">
				<i className="ti-quote-left text-color"></i>

				<div className="testimonial-item-content">
					<p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti.</p>

					<div className="testimonial-author">
						<h5 className="mb-0 text-capitalize">James Watson</h5>
						<p>Excutive Director,themefisher</p>
					</div>
				</div>
			</div>
			<div className="testimonial-item position-relative">
				<i className="ti-quote-left text-color"></i>

				<div className="testimonial-item-content">
					<p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>

					<div className="testimonial-author">
						<h5 className="mb-0 text-capitalize">Mickel hussy</h5>
						<p>Excutive Director,themefisher</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section latest-blog bg-2">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Latest News</span>
					<h2 className="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
				</div>
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 mb-5">
				<div className="card bg-transparent border-0">
					<img src="atul/images/blog/1.jpg" alt="" className="img-fluid rounded"/>

					<div className="card-body mt-2">
						<div className="blog-item-meta">
							<Link to="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></Link>
							<Link to="#"  className="text-white-50">Ui/Ux<span className="ml-2">/</span></Link>
							<Link to="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</Link>
						</div> 

						<h3 className="mt-3 mb-5 lh-36"><Link to="#" className="text-white ">How to improve design with typography?</Link></h3>

						<Link to="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</Link>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 mb-5">
				<div className="card border-0 bg-transparent">
					<img src="atul/images/blog/2.jpg" alt="" className="img-fluid rounded"/>

					<div className="card-body mt-2">
						<div className="blog-item-meta">
							<Link to="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></Link>
							<Link to="#"  className="text-white-50">Ui/Ux<span className="ml-2">/</span></Link>
							<Link to="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</Link>
						</div>  

						<h3 className="mt-3 mb-5 lh-36"><Link to="#" className="text-white">Interactivity design may connect consumer</Link></h3>

						<Link to="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</Link>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 mb-5">
				<div className="card border-0 bg-transparent">
					<img src="atul/images/blog/3.jpg" alt="" className="img-fluid rounded"/>

					<div className="card-body mt-2">
						<div className="blog-item-meta">
							<Link to="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></Link>
							<Link to="#"  className="text-white-50">Ui/Ux<span className="ml-2">/</span></Link>
							<Link to="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</Link>
						</div> 

						<h3 className="mt-3 mb-5 lh-36"><Link to="#" className="text-white">Marketing Strategy to bring more affect</Link></h3>

						<Link to="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="mt-70 position-relative">
	<div className="container">
	<div className="cta-block-2 bg-gray p-5 rounded border-1">
		<div className="row justify-content-center align-items-center ">
			<div className="col-lg-7">
				<span className="text-color">For Every type business</span>
				<h2 className="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
			</div>
			<div className="col-lg-4">
				<Link to="contact.html" className="btn btn-main btn-round-full float-lg-right ">Contact Us</Link>
			</div>
		</div>
	</div>
</div>

</section>


<footer className="footer section">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Company</h4>

					<ul className="list-unstyled footer-menu lh-35">
						<li><Link to="#">Terms & Conditions</Link></li>
						<li><Link to="#">Privacy Policy</Link></li>
						<li><Link to="#">Support</Link></li>
						<li><Link to="#">FAQ</Link></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Quick Links</h4>

					<ul className="list-unstyled footer-menu lh-35">
						<li><Link to="#">About</Link></li>
						<li><Link to="#">Services</Link></li>
						<li><Link to="#">Team</Link></li>
						<li><Link to="#">Contact</Link></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Subscribe Us</h4>
					<p>Subscribe to get latest news article and resources  </p>

					<form action="#" className="sub-form">
						<input type="text" className="form-control mb-3" placeholder="Subscribe Now ..."/>
						<Link to="#" className="btn btn-main btn-small">subscribe</Link>
					</form>
				</div>
			</div>

			<div className="col-lg-3 ml-auto col-sm-6">
				<div className="widget">
					<div className="logo mb-4">
						<h3>Mega<span>kit.</span></h3>
					</div>
					<h6><Link to="tel:+23-345-67890" >Support@megakit.com</Link></h6>
					<Link to="mailto:support@gmail.com"><span className="text-color h4">+23-456-6588</span></Link>
				</div>
			</div>
		</div>
		
		<div className="footer-btm pt-4">
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color">Megakit.</span> by <Link to="https://themefisher.com/" target="_blank">Themefisher</Link>
					</div>
				</div>

				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="copyright">
					Distributed by  <Link to="https://themewagon.com/" target="_blank">Themewagon</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12 text-left text-lg-left">
					<ul className="list-inline footer-socials">
						<li className="list-inline-item"><Link to="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</Link></li>
						<li className="list-inline-item"><Link to="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</Link></li>
						<li className="list-inline-item"><Link to="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
   
    </div>

    

    
   

  
      
    </div>
  );
};

export default Home;
