import React, {Component} from "react";
import "./content.css";
import "./planer.css";
import PlanerItems from "./PlanerItems";

class Planer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            items: [],
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        var itemsMas = this.state.items;

        if (this._inputItem.value!==""){
            itemsMas.unshift({
                text: this._inputItem.value,
                key: Date.now()
        });

        this.setState({
            items:itemsMas
        });

        this._inputItem.value="";

        }

        e.preventDefault();
    }

    deleteItem(key){
        var filterItems = this.state.items.filter((item)=>{return(item.key !== key);});

        this.setState({
            items:filterItems
        });
    }

    render(){
        return(
            <div> 
                <h1 className="title">To Do List</h1>
                <p className="paragraf">Здесь ты можешь записать свои планы, удалить их, если выполнил или передумал их выполнять ♥ Удачи ♥</p>
                <form onSubmit = {this.addItem} className="form">
                    <input ref ={(a)=>this._inputItem = a} placeholder ="Введите задачу" className="input"></input>
                    <button type ="submit" className="button">+</button>
                </form>
                <div className="toDoList">
                    <PlanerItems delete={this.deleteItem} entries = {this.state.items}/>
                </div>
                <p className="paragraf">Планирование помогает сосредоточиться на поставленной задаче — вы знаете, что вам нужно сегодня сделать и почему. Это помогает лучше контролировать ситуацию, показывая, что вы можете контролировать и над чем вы не властны. </p>
                <p className="paragraf">Если вы тоже верите (как я когда-то), что для эффективной работы план вам не нужен, попробуйте ради эксперимента написать: чего вы хотите достичь, что для этого предпримете.Что у вас получилось? Чаще всего это будут разрозненные дела, обрывки мыслей. Иногда — полная растерянность и неспособность написать даже несколько дел.Даже составив огромный список дел, сможете ли вы за несколько секунд выбрать, какие из них нужно сделать в первую очередь, какие можно отложить, а какие — вообще вычеркнуть?План позволяет навести порядок в мыслях и служит одним из способов борьбы с прокрастинацией. Одной из причин, почему мы откладываем дела, является непонимание того, что может быть сделано сейчас, а также сложности с выбором задач.Когда в голове крутятся мысли: «Мне надо сделать это, это, вот это и еще вот то», вы не можете решить, за что взяться.В итоге заканчиваете день на диване с ощущением паники и того, что все выходит из-под контроля, что дел слишком много, и вы не справляетесь с ними.</p>
            </div>
        );
    }
}
export default Planer;