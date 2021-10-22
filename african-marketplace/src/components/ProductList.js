import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import AddProduct from "./AddProduct";

const StyledBox = styled.div`
  width: 80%;
  text-align: left;
  margin: 0.5rem 0 0.5rem 0;
`;

const StyledPrice = styled.div`
  width: 15%;
  text-align: left;
  padding-top: 3rem;
  margin-bottom: 1em;
  font-weight: bold;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  margin: auto;
  border-bottom: 1px solid black;
`;

const StyledBtnRed = styled.div`
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background: #e84a34;
  border-radius: 20px;
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 1.25em;
  cursor: pointer;
  &:hover {
    background-color: pink;
  }
`;

const initialFormValues = {
  description: "",
  id: "",
  name: "",
  price: "",
};

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    const getItems = () => {
      axios
        .get(`https://bw-african-marketplace.herokuapp.com/api/items/`)
        .then((resp) => {
          setItems(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getItems();
  }, []);

  const filteredItems = items.filter((item) => item.name);

  useEffect(() => {
    const getItems = () => {
      axios
        .get(`https://reqres.in/api/items`)
        .then((resp) => {
          setProduct(resp.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getItems();
  }, []);

  const handleChange = (name, value) => {
    // const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newProduct = {
      id: [Math.random()],
      name: formValues.name,
      color: formValues.description,
      year: formValues.price,
    };
    postNewItem(newProduct);
    setShowDiv(false);
  };

  const postNewItem = (newItem) => {
    axios
      .post("https://reqres.in/api/items", newItem)
      .then((res) => {
        setProduct([res.data, ...product]);
        console.log(`posting ${res}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  //   const handleClick = (e, item) => {
  //       e.preventDefault();
  // }

  // SHOW/HIDE ADD-PRODUCT-FORM
  const [showDiv, setShowDiv] = useState(true);
  const hide = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <div className="pageHeader">Marketplace</div>
      <div className="product-container">
        <div className="add-product">
          <StyledBox>
            <StyledBtnRed onClick={hide}>Add a Product</StyledBtnRed>
          </StyledBox>
        </div>
        {showDiv && (
          <div>
            <AddProduct
              values={formValues}
              submit={formSubmit}
              change={handleChange}
            />
          </div>
        )}

        {product.map((items) => {
          return (
            <StyledTop>
              <StyledBox key={items.id}>
                <h1>{items.name}</h1>

                <h5>Item description:</h5>
                <p>{items.color}</p>
              </StyledBox>
              <StyledPrice>KSh {items.year}</StyledPrice>
            </StyledTop>
          );
        })}

        {filteredItems.map((items) => {
          return (
            <StyledTop>
              <StyledBox key={items.id}>
                <h1>{items.name}</h1>

                <h5>Item description:</h5>
                <p>{items.description}</p>
              </StyledBox>
              <StyledPrice>KSh {items.price}</StyledPrice>
            </StyledTop>
          );
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
    </div>
  );
};

export default ProductList;
