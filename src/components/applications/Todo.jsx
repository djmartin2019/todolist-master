import React, {Component} from 'react';
import TodoItems from "./TodoItems";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        if (this._inputElement.value !==""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.Value="";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    render(){
       return(
        <div className="col-11 bg-white text-center text-dark">
            <h1 className="p-3">Todo list</h1>
            <div className="header">
                <form onSubmit={this.addItem}>
                    <div className="justify-content-center input-group mb-3">
                        <input ref={(a) => this._inputElement = a} placeholder="Enter Task"/> &nbsp;
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-info">Add</button>
                        </div>
                    </div>
                </form> 
            </div>
            <div className="row">
                <div className="col-4"/>
                <div className="col-4 justifty-content-center">
                    <TodoItems entries={this.state.items}/>
                </div>
                <div className="col-4"/>
            </div>
            
        </div>       
    ); 
    }
}

export default Todo;