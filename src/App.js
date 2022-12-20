
import './App.css';
import Navbar from "./Components/Navbar"; // import navbar.jsx
import Home from './Components/Home'; // import home.jsx
import { Routes, Route } from 'react-router-dom'; // our routes, route has a path and renders the component
//import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Products from './Components/Products';// import products.jsx
import Product from './Components/Product';// import product.jsx
import Login from './Components/Login'; // import login.jsx
import Footer from './Components/Footer'; // import footer.jsx
function App() {
  return (
    //Wrap our content
    //routes is used to wrap all route paths and layout
    //route is used to render component based on specific path
    <>
      <Navbar />
      <Routes>

        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/Products" element={<Products />}></Route>
        <Route exact path="/Products/:id" element={<Product />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>

      </Routes>
      <Home />
      <Footer />
    </>
    //End



  );
}

export default App;
