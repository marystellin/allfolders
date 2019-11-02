import React from 'react';
import ListComment from './ListComment';

class TodoItem extends React.Component{
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
 
    render(){  
return <div><br></br><br></br>
<li key={this.props.item} className="list-group-item">
<span>{this.props.item}</span><br></br><br></br>
<span className="float-left">
<span>{this.state.count} likes..</span>
<button onClick={this.likecount}>Like</button>
</span>
<button onClick={this.props.handleDelete.bind(this,i.id)}>Delete</button>

<input type="text"placeholder="write comments..." onChange={this.handleChange} value={this.state.input}></input>
<button onClick={this.handleSubmit}>post</button></li>
<ListComment commentlist={this.state.commentlist}/>
</div>
    }
}
export default TodoItem;

