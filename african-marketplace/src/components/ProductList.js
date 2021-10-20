import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProductList = () => {
    const [ item, setItem ] = useState([])
    const { push } = useHistory();
    
    
    useEffect(() => {
     const getItems = () => {
      axios.get('https://reqres.in/api/unknown')
         .then(res => {
             console.log(res.data.data)
             setItem(res.data.data)
                      }
             )
             .catch(err => {
                 console.log(err)
             })
     }
     getItems()
      },[])
     
      
     
 
      const handleClick = (e, item) => {
          e.preventDefault();
      }
    return (
        <div className="product-container">
        <header >
             <h1 className='loginHeader'>Here are items that can be found in the Market</h1>
             <p className='productlabel'> Click here if you have items for sale</p>
             <Link to ="/addproduct"><button id='loginBtn'>Add your item</button></Link>
         </header>

         {<div>
             {item.map(item=> (
                 <div onClick={e=> handleClick(e, item)} key={item.id}>
                     <h3>{item.item_name}</h3>
                     <p>Description: {item.item_description}</p>
                     <p>Price: ${item.item_price}</p>
                     <p>Country: {item.item_country}</p>
                     <p>Seller: {item.username}</p>
                </div>
             ))}
         </div>}
         </div>
    );
};

export default ProductList;