import React, { useState } from 'react';
import './ProductivityTracker.css'

const NewProdItems = props => {
    const [enteredVal, setEnteredVal] = useState('0');
    const [enteredName, setEnteredName] = useState('');

    const addProdHandler = event => {
        event.preventDefault();

        const newProd = {
            id: Math.random().toString(),
            val: enteredVal, 
            name: enteredName
        };

        setEnteredVal('');
        setEnteredName('');

        props.onAddProd(newProd);
    };

    const valChangeHandler = event => {
        setEnteredVal(event.target.value);
    };

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    return(
        <form onSubmit={addProdHandler}>
            <input className="mb-3" type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Prod Name"/><br/>
            <input className="mb-3" type="text" value={enteredVal} onChange={valChangeHandler} placeholder="0"/><br/>
            <button type="submit">Add Productivity</button>
        </form>
    );
};

export default NewProdItems;