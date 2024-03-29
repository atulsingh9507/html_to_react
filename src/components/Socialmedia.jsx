import {Link} from 'react-router-dom';
import Header from '../vikash/Header';




const SocialMedia = () => {
  return (
<>
<Header/>
<center>
<h1>You  can contect with SocialMedia</h1>
<strong><hr></hr></strong>
<br></br>
<ul className="list-inline footer-socials">
						<li className="list-inline-item"><Link to="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</Link></li>
						<li className="list-inline-item"><Link to="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</Link></li>
						<li className="list-inline-item"><Link to="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</Link></li>
					</ul>
					</center>
</>



    );
};

export default SocialMedia;
