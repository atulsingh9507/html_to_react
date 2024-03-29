import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {  Routes, Route} from 'react-router-dom';
import Pricing from "./components/Pricing";
import Bloggrid from "./components/bloggrid";
import Blogsidebar from "./components/Blogsidebar";
import Project from "./components/Project";
import Blogsingle from "./components/Blogsingle";
import Service from "./components/Service";
import SocialMedia from "./components/Socialmedia";

function App() {
  return (
    
    <div className="App">
      
       <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/pricing" element={ <Pricing/> } />
          <Route path="/bloggrid" element={ <Bloggrid/> } />
          <Route path="/blogsidebar" element={ <Blogsidebar/> } />
          <Route path="/blogsingle" element={ <Blogsingle/> } />
          <Route path="/project" element={ <Project/> } />
          <Route path="/service" element={ <Service/> } />
          <Route path="/socialmedia" element={ <SocialMedia/> } />
        </Routes>
        
     
    </div>
  );
}

export default App;
