import React, {Component} from 'react';
import Todo from './Todo.js';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[{task: "walk the dog"}]};
  }

  render(){
    const allToDo = this.state.todos.map(todo => {
      return <Todo task={todo.task }/>;
    });

    return(
      <div>
        <h1>ToDo List!</h1>
        <ul>{allToDo}</ul>
      </div>
    );
  }
}

export default TodoList;
