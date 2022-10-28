import React, {Component} from "react";
import "./planer.css";

class PlanerItems extends Component{
    constructor(props){
        super(props);
        this.createItem = this.createItem.bind(this);
        this.delete = this.delete.bind(this);
    }
    
    createItem(item){
        return <li className="toDoItem" onClick={()=>this.delete(item.key)}key={item.key}>{item.text}</li>
    }
    delete(key){
        this.props.delete(key);
    }
  
    render(){
        var itemsEntries = this.props.entries;
        var itemsList = itemsEntries.map(this.createItem);
        return(
            <ul className="ulToDoList">
                {itemsList}
            </ul>
        );
    }
}
export default PlanerItems;