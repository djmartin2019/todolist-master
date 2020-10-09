import React, {Component} from 'react';

class ProductivityTracker extends Component {
    render(){
       return(
           <React.Fragment>
               <div className="row">
                   <div className="col-1">
                        <div className="col-10 bg-white text-center text-dark">
                            <h1 className="pt-2 pb-2">Productivity Tracker</h1>
                        </div>   
                   </div>
               </div>
           </React.Fragment>
        ); 
    }
}

export default ProductivityTracker;