import React, {Component, useState} from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import ProductivityItems from './ProductivityItems';
import NewProdItems from './NewProdItems';

const ProductivityTracker = () => {
    const [prodVal, setValue] = useState([
        {id: 'cg1', val: '25'}
    ]);

    const addNewProdHandler = newProd => {
        setValue(prevProds => prevProds.concat(newProd));
    };

       return(
           <React.Fragment>
               <div className="row">
                   <div className="col-1"/>
                        <div className="col-10 bg-white text-center text-dark">
                            <h1 className="pt-2 pb-2">Productivity Tracker</h1>
                            <div className="row">
                                <div className="col-4"/>
                                <div className="col-4">
                                    <div className="row justify-content-center">
                                        <NewProdItems onAddProd={addNewProdHandler}/>
                                    </div>
                                    <div className="row justify-content-center pt-4">
                                        <ProductivityItems prods={prodVal}/>
                                    </div>
                                </div>
                            </div>
                        </div>   
                   </div>
           </React.Fragment>
        ); 
    }

export default ProductivityTracker;