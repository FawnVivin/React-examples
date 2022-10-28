import React, {Component} from "react";
import "./menu.css";
import {NavLink} from "react-router-dom";

class Menu extends Component{
 
    render(){
        var visibility = "hide";
        if (this.props.menuVisibility){
            visibility = "show"
        }
        var classes = "menu" + " "+ visibility;

        return(
            <div className= {classes}>
                <ul className="items_list">
                    <li className="item"><NavLink to="/">Главная</NavLink></li>
                    <li className="item"><NavLink to="/Something">Что-то ещё</NavLink></li>
                    <li className="item"><NavLink to="/Planer">Планировщик</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default Menu;