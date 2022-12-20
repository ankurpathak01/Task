import React from "react";
import Products from "./Products"; //import products.jsx
const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <div className="card-img" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">Checkout The Latest Trends</p>
                    </div>


                </div>
            </div>
            <Products />
        </div>
    )
}
export default Home;