import React, {Component} from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component{
  constructor(props){
    super(props);
    this.state = { task:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: [evt.target.value]
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createToDo({...this.state, id: uuid()});
    this.setState({ task: "" });
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="title">New Todo!</label>
        <input
          name="task"
          type="text"
          id="title"
          placeholder="New Task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add ToDo</button>
      </form>
    );
  }
}

export default NewTodoForm;
