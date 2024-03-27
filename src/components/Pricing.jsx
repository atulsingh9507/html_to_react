import {Link} from 'react-router-dom';

const Pricing = () => {
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
          <span className="text-white">Our pricing</span>
          <h1 className="text-capitalize mb-4 text-lg">Pricing Package</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to="#" className="text-white-50">Our pricing</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="section intro">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-5">
				<div className="section-title pt-5">
					<span className="h6 text-color ">We are creative</span>
					<h2 className="mt-3">We provide best solution to client with their business problem </h2>
				</div>
			</div>

			<div className="col-lg-6 ml-auto">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="intro-item mb-4 mb-lg-0">
							<i className="ti-wand text-color"></i>
							<h4 className="mt-4">Modern & Responsive design</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="intro-item mb-4 mb-lg-0">
							<i className="ti-medall text-color"></i>
							<h4 className="mt-4">Awarded licensed company</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section pricing bg-gray position-relative">
	<div className="hero-img bg-overlay h70"></div>
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-white">Our Pricing</span>
					<h2 className="mt-3 content-title text-white">No hidden Charges.Choose Your Perfect Plan</h2>
				</div>
			</div>
		</div>

		<div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card text-center mb-md-0 mb-3">
                    <div className="card-body py-5">
                        <div className="pricing-header mb-5">
                            <h5 className="font-weight-normal mb-3">Free</h5>
                            <h1>$0</h1>
                            <p className="text-muted">Per User / Month</p>
                        </div>
                        <strong>Includes:</strong>
                        <ul className="list-unstyled lh-45 mt-3 text-black">
                            <li>- Up to 1 User</li>
                            <li>- Max 100 Item</li>
                            <li>- 500 Queries</li>
                            <li>- Basic Statistics</li>
                        </ul>
                        <Link to="#" className="btn btn-small btn-solid-border mt-3 btn-round-full">Download Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-center mb-md-0 mb-3">
                    <div className="card-body py-5">
                        <div className="pricing-header mb-5">
                            <h5 className="font-weight-normal mb-3">Basic</h5>
                            <h1>$12</h1>
                            <p className="text-muted">Per User / Month</p>
                        </div>
                        <strong>Includes:</strong>
                        <ul className="list-unstyled lh-45 mt-3 text-black">
                            <li>- Up to 5 User</li>
                            <li>- Max 1000 Item</li>
                            <li>- 5000 Queries</li>
                            <li>- Standard Statistics</li>
                        </ul>
                        <Link to="#" className="btn btn-small btn-main mt-3 btn-round-full">Signup Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-center mb-md-0 mb-3">
                    <div className="card-body py-5">
                        <div className="pricing-header mb-5">
                            <h5 className="font-weight-normal mb-3">Premium</h5>
                            <h1>$39</h1>
                            <p className="text-muted">Per User / Month</p>
                        </div>
                        <strong>Includes:</strong>
                        <ul className="list-unstyled lh-45 mt-3 text-black">
                            <li>- Unlimited User</li>
                            <li>- Unlimited Item</li>
                            <li>- Unlimited Queries</li>
                            <li>- Full Statistics</li>
                        </ul>
                        <Link to="#" className="btn btn-small btn-solid-border mt-3 btn-round-full">Download Now</Link>
                    </div>
                </div>
            </div>
        </div>
	</div>

	<div className="container">
	<div className="cta-block mt-5 p-5 rounded">
		<div className="row justify-content-center align-items-center ">
			<div className="col-lg-7">
				<span className="text-color">For Every type business</span>
				<h2 className="mt-2 text-white">Entrust Your Project to Our Best Team of Professionals</h2>
			</div>
			<div className="col-lg-4">
				<Link to="contact.html" className="btn btn-main btn-round-full float-lg-right float-md-right float-sm-right">Contact Us</Link>
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
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color">Megakit.</span> by <Link to="https://themefisher.com/" target="_blank">Themefisher</Link>
					</div>
				</div>
				<div className="col-lg-6 text-left text-lg-right">
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

export default Pricing;
