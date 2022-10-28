import React, {Component} from "react";
import {
    Route,
    HashRouter,
    Routes
} from "react-router-dom";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Something from "./Something";
import Home from "./Home";
import Planer from "./Planer";

class MainContainer extends Component{
    constructor(props){

        super(props);

        this.state={
            visible:false,
        }

        this.toggleMenu=this.toggleMenu.bind(this);
        this.handleMouseDown=this.handleMouseDown.bind(this);
        
    }
    toggleMenu(){

        this.setState({
                visible:!this.state.visible
            });
    }

    handleMouseDown(e){
        this.toggleMenu();
        console.log("click");
        e.stopPropagation();
    }

    render(){
        
        return(
            <HashRouter>
                <div>
                    <header className="header">
                        <MenuButton handleMouseDown={this.handleMouseDown}/>
                    </header>  
                    <Menu menuVisibility={this.state.visible}/>
                    <main  className="main">           
                        <div className="content">
                            <Routes>
                                <Route  path="/" element={<Home/>} exact></Route>
                                <Route  path="/Something" element={<Something/>}></Route>
                                <Route  path="/Planer" element={<Planer/>} exact></Route>
                            </Routes>
                        </div>
                    </main>
                    <footer className="footer">
                    </footer>
                </div>
            </HashRouter>
        );
    }
}
export default MainContainer;