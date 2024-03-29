import {Link} from 'react-router-dom';
import Header from '../vikash/Header';
import Footer from '../vikash/Footer';

const App = () => {
  return (
    <div>
    
<Header/>



<div className="main-wrapper ">
<section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Our blog</span>
          <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to="#" className="text-white-50">Our blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section blog-wrap bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="atul/images/blog/1.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-4">
				<div className="blog-item-meta  py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Creativity</span>
				</div> 

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Improve design with typography?</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>

	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="atul/images/blog/2.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-4">
				<div className="blog-item-meta py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Design</span>
				</div>   

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Interactivity connect consumer</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>

	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="atul/images/blog/3.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-4">
				<div className="blog-item-meta py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Community</span>
				</div>  

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Marketing Strategy to bring more affect</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>
	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="atul/images/blog/4.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-4">
				<div className="blog-item-meta py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Marketing</span>
				</div>  

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Marketing Strategy to bring more affect</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>
</div>
            </div>
            <div className="col-lg-4">
                <div className="sidebar-wrap">
	<div className="sidebar-widget search card p-4 mb-3 border-0">
		<input type="text" className="form-control" placeholder="search"/>
		<Link to="#" className="btn btn-mian btn-small d-block mt-2">search</Link>
	</div>

	<div className="sidebar-widget card border-0 mb-3">
		<img src="atul/images/blog/blog-author.jpg" alt="" className="img-fluid"/>
		<div className="card-body p-4 text-center">
			<h5 className="mb-0 mt-4">Arther Conal</h5>
			<p>Digital Marketer</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>

			
		</div>
	</div>

	<div className="sidebar-widget latest-post card border-0 p-4 mb-3">
		<h5>Latest Posts</h5>

        <div className="media border-bottom py-3">
            <Link to="#"><img className="mr-4" src="atul/images/blog/bt-3.jpg" alt=""/></Link>
            <div className="media-body">
                <h6 className="my-2"><Link to="#">Thoughtful living in los Angeles</Link></h6>
                <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
        </div>

        <div className="media border-bottom py-3">
            <Link to="#"><img className="mr-4" src="atul/images/blog/bt-2.jpg" alt=""/></Link>
           <div className="media-body">
                <h6 className="my-2"><Link to="#">Vivamus molestie gravida turpis.</Link></h6>
                <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
        </div>

        <div className="media py-3">
            <Link to="#"><img className="mr-4" src="atul/images/blog/bt-1.jpg" alt=""/></Link>
            <div className="media-body">
                <h6 className="my-2"><Link to="#">Fusce lobortis lorem at ipsum semper sagittis</Link></h6>
                <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
        </div>
	</div>

	<div className="sidebar-widget bg-white rounded tags p-4 mb-3">
		<h5 className="mb-4">Tags</h5>

		<Link to="#">Web</Link>
		<Link to="#">agency</Link>
		<Link to="#">company</Link>
		<Link to="#">creative</Link>
		<Link to="#">html</Link>
		<Link to="#">Marketing</Link>
		<Link to="#">Social Media</Link>
		<Link to="#">Branding</Link>
	</div>
</div>
            </div>   
        </div>

        <div className="row mt-5">
            <div className="col-lg-8">
                <nav className="navigation pagination py-2 d-inline-block">
                    <div className="nav-links">
                        <Link className="prev page-numbers" to="#">Prev</Link>
                        <span aria-current="page" className="page-numbers current">1</span>
                        <Link className="page-numbers" to="#">2</Link>
                        <Link className="next page-numbers" to="#">Next</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</section>

<Footer/>
   
    </div>


    </div>
  );
};

export default App;
