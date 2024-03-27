import { Link } from "react-router-dom";

const Contact = () => {
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
				<Link className="nav-link" to="index.html">Home <span className="sr-only">(current)</span></Link>
			  </li>
			  <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown03">
						<li><Link className="dropdown-item" to="about.html">Our company</Link></li>
						<li><Link className="dropdown-item" to="pricing.html">Pricing</Link></li>
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
			   <li className="nav-item"><Link className="nav-link" to="contact.html">Contact</Link></li>
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
          <span className="text-white">Contact Us</span>
          <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to="#" className="text-white-50">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="contact-form-wrap section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                 <form id="contact-form" className="contact__form" method="post" action="mail.php">
                 
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success contact__msg" style={{display: "none"}} role="alert">
                                Your message was sent successfully.
                            </div>
                        </div>
                    </div>
                    
                    <span className="text-color">Send Link message</span>
                    <h3 className="text-md mb-4">Contact Form</h3>
                    <div className="form-group">
                        <input name="name" type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                    <div className="form-group-2 mb-4">
                        <textarea name="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn btn-main" name="submit" type="submit">Send Message</button>
                </form>
            </div>

            <div className="col-lg-5 col-sm-12">
                <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                    <span className="text-muted">We are Professionals</span>
                    <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

                    <ul className="address-block list-unstyled">
                        <li>
                            <i className="ti-direction mr-3"></i>North Main Street,Brooklyn Australia
                        </li>
                        <li>
                            <i className="ti-email mr-3"></i>Email: contact@mail.com
                        </li>
                        <li>
                            <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                        </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                        <li className="list-inline-item">
                            <Link to="http://www.themefisher.com"><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="http://www.themefisher.com"><i className="fab fa-twitter"></i></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="http://www.themefisher.com"><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="google-map">
    <div id="map"></div>
</div>

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

export default Contact;
