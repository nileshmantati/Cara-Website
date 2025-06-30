// Main Website 
// https://cara-project-nine.vercel.app/
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Productdetails from './Components/Productdetails';
import Shoppage from './Components/Shoppage';
import Blogpage from './Components/Blogpage';
import Aboutuspage from './Components/Aboutuspage';
import Contactpage from './Components/Contactpage';
import SignupForm from './Components/Signuppage';
import Loginpage from './Components/Loginpage';
import { CartProvider } from './Context/CartContext';
import CartPage from './Components/CartPage';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shoppage />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/about" element={<Aboutuspage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/products/:id" element={<Productdetails />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/product/:category/:id" element={<Productdetails />} /> */}
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;