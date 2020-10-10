import React, {Component, useState} from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const ProductivityTracker = () => {
    const [value, setValue] = useState(0);
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
                                    <p className="mr-4">TEST</p>
                                    <RangeSlider value={value} onChange={e => setValue(e.target.value)} size='lg'/>
                                </div>
                                    
                                </div>
                                
                            </div>
                        </div>   
                   </div>
           </React.Fragment>
        ); 
    }

export default ProductivityTracker;