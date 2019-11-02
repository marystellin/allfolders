
import React from 'react';
import ListComment from './ListComment'
//import Comment from './Comment';

class List extends React.Component {
  state={
    count:0,
    countinc:0,
    input:"",
    commentlist:[]
}
addComment=value=>{
    this.setState({
      commentlist:[...this.state.commentlist,value]
    })
  }
handleChange = event => {
  this.setState(
    {
      input: event.target.value
    }
  )};
  handleSubmit=e=>{
    this.addComment(this.state.input)
    this.setState({input:""})
  }
likecount=e=>{
    this.state.countinc=(this.state.count)+1
    this.setState({
        
   count:this.state.countinc,
    
    });

    console.log(this.state.count)
}
  
render() {
  return (<div>
    <ul>
      {
        this.props.list.map((i) => {
       return(
        <li key={i} className="list-group-item">
        <span>{i}</span><br></br><br></br>
        <span className="float-left">
        <span>{this.state.count} likes..</span>
        <button onClick={this.likecount}>Like</button>
        </span>
        <button onClick={this.props.handleDelete.bind(this,i)}>Delete</button>
        
        <input type="text"placeholder="write comments..." onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.handleSubmit}>post</button>
        <ListComment commentlist={this.state.commentlist}/>
       </li>
        )})
      }
       </ul>
  </div>);
};
    }

export default List;
