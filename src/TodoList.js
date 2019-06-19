import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[]};
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(newToDo){
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  remove(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id != id)
    })
  }

  render(){
    const allToDo = this.state.todos.map(todo => {
      return <Todo key={todo.id} id={todo.id} task={todo.task} removeToDo={this.remove}/>;
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
