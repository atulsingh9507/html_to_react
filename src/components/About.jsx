import {Link} from 'react-router-dom'

const About = () => {
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
			   <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>
			   <li className="nav-item"><Link className="nav-link" to="/project">Portfolio</Link></li>
			   <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
						<li><Link className="dropdown-item" to="/bloggrid">Blog Grid</Link></li>
						<li><Link className="dropdown-item" to="/blogsidebar">Blog with Sidebar</Link></li>

						<li><Link className="dropdown-item" to="/blogsingle">Blog Single</Link></li>
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
<section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">About Us</span>
          <h1 className="text-capitalize mb-4 text-lg">Our Company</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to="#" className="text-white-50">About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="section about-2 position-relative">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-6">
				<div className="about-item pr-3 mb-5 mb-lg-0">
					<span className="h6 text-color">What we are</span>
					<h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
					<p className="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>

					<Link to="#" className="btn btn-main btn-round-full">Get started</Link>
				</div>
			</div>
			<div className="col-lg-6 col-md-6">
				<div className="about-item-img">
					<img src="images/about/home-7.jpg" alt="" className="img-fluid"/>
				</div>
			</div>
		</div>
	</div>
</section>


 
<section className="about-info section pt-0">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="about-info-item mb-4 mb-lg-0">
					<h3 className="mb-3"><span className="text-color mr-2 text-md ">01.</span>Our Mission</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="about-info-item mb-4 mb-lg-0">
					<h3 className="mb-3"><span className="text-color mr-2 text-md">02.</span>Vission</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="about-info-item mb-4 mb-lg-0">
					<h3 className="mb-3"><span className="text-color mr-2 text-md">03.</span>Our Approach</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
		</div>
	</div>
</section>

<section className="section counter bg-counter">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<i className="ti-check color-one text-md"></i>
					<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">1730</span> +</h3>
					<p className="text-white-50">Project Done</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<i className="ti-flag color-one text-md"></i>
					<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">125 </span>M </h3>
					<p className="text-white-50">User Worldwide</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<i className="ti-layers color-one text-md"></i>
					<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">39</span></h3>
					<p className="text-white-50">Availble Country</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center">
					<i className="ti-medall color-one  text-md"></i>
					<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">14</span></h3>
					<p className="text-white-50">Award Winner </p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section team">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Our Team</span>
					<h2 className="mt-3 content-title">Expert Team member to get best service</h2>
				</div>
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5">
					<div className="team-item position-relative">
						<img src="images/team/team-1.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">Justin hammer</h4>
						<p>Digital Marketer</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5">
					<div className="team-item position-relative">
						<img src="images/team/team-2.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">Jason roy</h4>
						<p>UI/UX Designer</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5 ">
					<div className="team-item position-relative">
						<img src="images/team/team-3.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">Henry oswald</h4>
						<p>Developer</p>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5 mb-lg-0">
					<div className="team-item position-relative">
						<img src="images/team/team-4.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">David Williams</h4>
						<p>Senior Marketer</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5 mb-lg-0">
					<div className="team-item position-relative">
						<img src="images/team/team-6.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">Peter Odin</h4>
						<p>App Developer</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="team-item-wrap mb-5 mb-lg-0 ">
					<div className="team-item position-relative">
						<img src="images/team/team-5.jpg" alt="" className="img-fluid w-100"/>
						<div className="team-img-hover">
							<ul className="team-social list-inline">
								<li className="list-inline-item">
									<Link to="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
								</li>
								<li className="list-inline-item">
									<Link to="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="team-item-content">
						<h4 className="mt-3 mb-0 text-capitalize">David Spensor</h4>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section testimonial bg-gray">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Clients testimonial</span>
					<h2 className="mt-3 content-title">Check what's our clients say about us</h2>
				</div>
			</div>
		</div>
	</div>

	<div className="container">
		<div className="testimonial-wrap">
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

export default About;