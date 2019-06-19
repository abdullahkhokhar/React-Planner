import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[{task: "walk the dog"}]};
    this.create = this.create.bind(this);
  }

  create(newToDo){
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  render(){
    const allToDo = this.state.todos.map(todo => {
      return <Todo task={todo.task }/>;
    });

    return(
      <div>
        <h1>ToDo List!</h1>
        <NewTodoForm createToDo={this.create} />
        <ul>{allToDo}</ul>
      </div>
    );
  }
}

export default TodoList;
