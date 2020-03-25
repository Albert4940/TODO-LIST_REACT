import React from 'react';
import  '../index.css';
class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        console.log("item"+event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        })
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return(
                <div className = "list-group-item" key = {item}>
                    {item}<span className = "put_right"> | <button value = {item} className = "btn btn-danger " onClick = {this.deleteTodo.bind(this)} >X</button></span> 
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1 align="center">Ma Todo List</h1>
                <form className = "form-row align-items-center">
                <input 
                className = " form-control mb-2"
                 value = {this.state.userInput}
                 type="text" 
                 placeholder="Renseigner un item"
                 onChange = {this.onChange.bind(this)}
                 />
                <button 
                className = "btn btn-primary"
                onClick = {this.addTodo.bind(this)}
                >Ajouter</button>
                </form>
                <br/>
                <hr/>
                <div className = "list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;