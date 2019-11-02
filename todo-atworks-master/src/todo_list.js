import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line: 'none'
    }
    this.markItemDone = this.markDone.bind(this);
  }

  removeItem(item) {
    console.log("test")
    this.props.handleClick(item);
    //this.event.preventDefault();
  }
  markDone(event) {
    event.target.style.textDecoration = "line-through";
  }

  renderList() {
    return this.props.items.map(function (item) {
      return (
        <li
          key={item}
          className="list-group-item">
          <span onClick={this.markDone.bind(this)}>{item}</span>
          <span onClick={this.removeItem.bind(this, item)} className="float-right">Remove</span>
        </li >
      );
    }, this)
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

export default TodoList;