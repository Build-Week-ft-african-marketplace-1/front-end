import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
    description: '',
    id: '',
    name: '',
    price: '',
}

const AddProduct = (props) => {
    const [isFetching, setIsFetching] = useState(false);
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const handleSubmit = (evt) => {
        evt.preventDefault();
        push("/productlist");
        setIsFetching(true);
        axiosWithAuth()
          .post(
            `https://bw-african-marketplace.herokuapp.com/api/items`,
            formValues
          )
          .then((res) => {
            setIsFetching(false);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
        };  

    


    return (
            <div className="product-container">
            <form onSubmit={handleSubmit}>
                <header className="loginHeader">Add a product to the marketplace</header>
                <div className="row">
                    <label className="productlabel">Item Name</label>
                    <input
                    value={formValues.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Please enter you item name."
                    />
                </div>
                <div className="row">
                <label className="productlabel">Item Description</label>
                    <input
                    value={formValues.description}
                    onChange={handleChange}
                    name="description"
                    type="text"
                    placeholder="Please describe your item you wish to sell."
                    />
                </div>
                <div className="row">
                <label className="productlabel">Price</label>
                    <input
                    value={formValues.price}
                    onChange={handleChange}
                    name="price"
                    type="text"
                    placeholder="Please enter your price."
                    />
                </div>
                {/* <div className="row">
                <label className="productlabel">Seller's Name</label>
                    <input
                    value={formValues.username}
                    onChange={handleChange}
                    name="username"
                    type="text"
                    placeholder="Please enter your name."
                    />
                </div>
                <div className="row">
                <label className="productlabel">Region</label>
                    <select
                    value={formValues.country}
                    onChange={handleChange}
                    name="item_country"
                    type="text"
                    placeholder="What is your Region?">
                    <option value="">Select Seller's Region</option>
                    <option value="1">South Africa</option>
                    <option value="2">Middle Africa</option>
                    <option value="3">East Africa</option>
                    <option value="4">West Africa</option>
                    <option value="5">North Africa</option>
                    </select>
                </div> */}
                <div className="row">
                    <button id="loginBtn">Add your item</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;