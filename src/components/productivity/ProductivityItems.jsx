import React, {Component, useState} from "react";
import RangeSlider from 'react-bootstrap-range-slider';
import './ProductivityTracker.css';

const ProductivityItems = props => {

    const [ val, updateVal ] = useState(0); 

    return(
        <ul className="prod-list">
            {props.prods.map(prod => {
                return <li key={prod.id}>
                    <div>{prod.name}:</div>
                    <div><RangeSlider value={prod.val} onChange={changeEvent => updateVal(changeEvent.target.val)}/></div>
                </li>
            })}
        </ul>
    );
}

export default ProductivityItems;