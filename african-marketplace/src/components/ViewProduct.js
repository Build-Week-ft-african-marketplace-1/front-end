import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const ViewProduct = (props) => {
    const {id, name, seller, description, location, price,} = props.ViewItem

    return(
        <div key={id}>
            <p>{name}</p>
            <p>{description}</p>
            <p>{location}</p>
            <p>{seller}</p>
            <p>{price}</p>
            <p> 
                <Link to={``} className="view"><input type="button" value="view"/></Link>
            </p>

        </div>
    );
};

export default ViewProduct;