import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  addTodo(event) {
    event.preventDefault();
    // Ensure a todo was actually entered before submitting
    if (this.state.input.length > 0) {
      this.props.addTodo(this.state.input);
      this.setState({ input: '' });
    }
  }

  handleChange(event) {
    //console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-9">
          <form className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Add a todo item"
              value={this.state.input}
              className=""></input>
          </form>
        </div>
        <div className="">
          <input
            onClick={this.addTodo}
            type="button"
            value="Add"
            className="btn btn-primary">
          </input>
        </div>
      </div>
    );
  };

}

export default TodoForm;