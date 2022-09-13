import React, { Fragment } from "react";

const Product = (props) => {
    // const onClickBtn = () => {

    // }
    return (
        <Fragment>
            <img src={props.img} alt={props.alt} style={{ width: "200px" }} />
            <div>{props.title}</div>
        </Fragment>
    );
};

export default Product;
