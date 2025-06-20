// Main Website 
// https://cara-project-nine.vercel.app/
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Productdetails from './Components/Productdetails';
import Shoppage from './Components/Shoppage';
import Blogpage from './Components/Blogpage';
import Aboutuspage from './Components/Aboutuspage';
import Contactpage from './Components/Contactpage';

function App() {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/products/:id" element={<Productdetails />} />
        {/* <Route path="/product/:category/:id" element={<Productdetails />} /> */}
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;