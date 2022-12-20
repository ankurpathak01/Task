import React from "react";
import { useState } from "react"; //have state variables in functional componenets
import { useEffect } from "react";//performs side effects in your components
import { useDispatch } from 'react-redux';// dispatch actions and trigger state changes to the state
import { addCart } from "../redux/actions";
import { useParams } from "react-router-dom"; // to access current route
import { NavLink } from "react-router-dom";

const Product = () => {
    const { id } = useParams(); // to access current route
    const [product, setProduct] = useState([]); // state for product 
    const [loading, setLoading] = useState(false); // loading is false
    const dispatch = useDispatch();//dispatch actions and trigger state changes to the state
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(() => {
        const getProduct = async () => { // await and return the array of json file
            setLoading(true);             // loading......
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);// fetch data // Backtick allows for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates
            setProduct(await response.json()); //send that response to state so we can use that 
            setLoading(false); // after successful fetch loading component stop working
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
                        <i className="fa fa-start"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-primary px-4 py-2" onClick={() => addProduct(product)}>Add to cart</button>
                    <NavLink to="/cart" className="btn btn-primary ms-2 px-3 py-2">Go to cart</NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
export default Product;