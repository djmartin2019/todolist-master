import React, {Component, useState} from "react";
import RangeSlider from 'react-bootstrap-range-slider';

const ProductItems = () => {
    const [value, setValue] = useState(0);
}
//Need to understand the Map function. Additionally, understand how the useState references work. 
class ProductivityItems extends Component{
    
    createSliders(item){
        return (
            <div className="row justify-content-center p-3">
                <p className="mr-4">TEST</p>
                <RangeSlider value={ProductItems().value} onChange={e => ProductItems().setValue(e.target.ProductItems().value)} size='lg'/>
            </div>
        )
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createSliders);

        return(
            <ul className="list-group p-3">
                {listItems}
            </ul>
        );
    }
}

export default ProductivityItems;