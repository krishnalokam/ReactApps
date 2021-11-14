import './App.css';
import Header from './header.js';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {todos: [] }
  }
  
  addTodo = (e)=> {
    e.preventDefault();
    console.log("add activitiy");
    let time = this.refs.time.value;
    let activity = this.refs.activity.value;    
    this.state.todos.push({time,activity})
    console.log(this.state);
    this.setState({todos: this.state.todos})
    this.refs.formref.reset();
    this.refs.time.focus();
    
  }
  removeTodo = (i) => {    
    this.state.todos.splice(i,1);
    this.setState({todos: this.state.todos});

    this.refs.formref.reset();
    this.refs.time.focus();

  }
  render() {

    return (
     
      <div className="App">
         <Header />      
         <form ref = "formref" className="form-inline">
           <input type="text" size="8" placeholder="time" ref="time" className="form-control"></input>
           <input type="text" size="30" placeholder="Activity" ref = "activity" className="form-control"></input>
           <button onClick = {this.addTodo} className="btn btn-info">Save</button>
         </form>
         <hr />
         
           <ul>
           {this.state.todos.map((datam,idx) => 
            <li key={idx}>
              <div className="todo-wrapper">
               <button onClick={() =>this.removeTodo(idx)}  className="btn btn-outline-danger">Delete </button>  {datam.time}: {datam.activity}                                
                </div>
                </li>  
             )}
             </ul>                           
      </div>
    );
  }
}

export default App;

/* References: https://github.com/AndrewChristianto/DailyActivity-react-js*/