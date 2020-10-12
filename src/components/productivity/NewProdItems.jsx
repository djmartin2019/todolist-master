import React, { useState } from 'react';
import './ProductivityTracker.css';

const NewProdItems = props => {
    const [enteredVal, setEnteredVal] = useState('0');

    const addProdHandler = event => {
        event.preventDefault();

        const newProd = {
            id: Math.random().toString(),
            val: enteredVal
        };

        setEnteredVal('');

        props.onAddProd(newProd);
    };

    const valChangeHandler = event => {
        setEnteredVal(event.target.value);
    };

    return(
        <form className="new-prod" onSubmit={addProdHandler}>
            <input type="text" value={enteredVal} onChange={valChangeHandler}/>
            <button type="submit">Add Productivity</button>
        </form>
    );
};

export default NewProdItems;