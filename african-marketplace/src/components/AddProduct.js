import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddProduct = (props) => {
    const { push } = useHistory();


    const [ item, setItem ] = useState({
        item_name: '',
        item_description: '',
        item_price: '',
        item_country: '',
        item_price: '',
        username: '',
    })
    const handleChange = e => {
        setItem({
            ...item, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        push('/');
        // const newItem = {
        //     item_country: item.item_country,
        //     item_name: item.item_name,
        //     username: item.username,
        //     item_price: item.item_price,
        //     item_description: item.item_description,
        // };
        
        // axios.post(`endpoint`, newItem)
        // .then(res => {
        //     props.newItem(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }


    return (
            <div>
            <form onSubmit={handleSubmit}>
                <h3>Fill in this form to <br></br>add your item to the marketplace.</h3>
                <div>
                    <input
                    value={item.item_name}
                    onChange={handleChange}
                    name="item_name"
                    type="text"
                    placeholder="Please enter you item name."
                    />
                </div>
                <div>
                    <input
                    value={item.item_description}
                    onChange={handleChange}
                    name="item_description"
                    type="text"
                    placeholder="Please describe your item you wish to sell."
                    />
                </div>
                <div>
                    <input
                    value={item.item_price}
                    onChange={handleChange}
                    name="item_price"
                    type="text"
                    placeholder="Please enter your price."
                    />
                </div>
                <div>
                    <input
                    value={item.username}
                    onChange={handleChange}
                    name="username"
                    type="text"
                    placeholder="Please enter your name."
                    />
                </div>
                <div>
                    <select
                    value={item.item_country}
                    onChange={handleChange}
                    name="item_country"
                    type="tex"
                    placeholder="Your Region">
                    <option value="">Select Seller's Region</option>
                    <option value="1">South Africa</option>
                    <option value="2">Middle Africa</option>
                    <option value="3">East Africa</option>
                    <option value="4">West Africa</option>
                    <option value="5">North Africa</option>
                    </select>
                </div>
                <button>Add your item</button>
            </form>
        </div>
    );
};

export default AddProduct;