import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledBox = styled.div`
    background-color: #008080;
    width: 40%;
    border-radius: 10px;
    margin-bottom: 1em;
    
`

const StyledTop = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`

const ProductList = () => {
    const [items, setItems] = useState([]);
    const { push } = useHistory();
    
    
    useEffect(() => {
     const getItems = () => {
      axios.get(' https://bw-african-marketplace.herokuapp.com/api/items')
         .then(resp => {
             setItems(resp.data)
             console.log(resp.data)
                      }
             )
             .catch(err => {
                 console.log(err)
             })
     }
     getItems()
      },[])
     
      const filteredItems = items.filter(
        item => item.name
    );
     
 
    //   const handleClick = (e, item) => {
    //       e.preventDefault();
    // }
    return (
        <div className="product-container">
        <header >
             <h1 className='loginHeader'>Here are items that can be found in the Market</h1>
             <p className='productlabel'> Click here if you have items for sale</p>
             <Link to ="/addproduct"><button id='loginBtn'>Add your item</button></Link>
         </header>

         {filteredItems.map(items => {
                return (
                    <StyledTop>
                    <StyledBox key={items.id}>
                    <h1>{items.name}</h1>
                        <div>
                            <h3>Item description:</h3>
                            <p>{items.description}</p>
                            <p>{items.price}</p>
                        </div>
                    </StyledBox>
                    </StyledTop>
                
                )
            })}

         {/* <div>
             {items.map(item=> (
                 <div onClick={e=> handleClick(e, item)} key={item.id}>
                     <h3>{item.item_name}</h3>
                     <p>Description: {item.item_description}</p>
                     <p>Price: ${item.item_price}</p>
                     <p>Country: {item.item_country}</p>
                     <p>Seller: {item.username}</p>
                </div>
             ))}
         </div> */}
         </div>
    );
};

export default ProductList;