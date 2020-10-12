import React, {Component} from "react";

class TodoItems extends Component{
    createTasks(item){
        return <li className="list-group-item" key={item.key}>{item.text}</li>
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="list-group p-3">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;