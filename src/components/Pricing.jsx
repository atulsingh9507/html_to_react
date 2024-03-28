import {Link} from 'react-router-dom';
import Header from '../vikash/Header';
import Footer from '../vikash/Footer';

const Pricing = () => {
  return (
    <div>
      
<Header/>
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

<Footer/>
   
    </div>

   
  
    </div>
  );
};

export default Pricing;
