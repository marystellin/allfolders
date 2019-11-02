import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import List from './List';
class App extends React.Component{
  state={
    list:[]
    };
addPost=value=>{
    console.log("new comments",value)
    this.setState(
      {
        list:[...this.state.list,value]
      }
    )
  }
  handleDelete=item=>{
    this.setState({
      list:this.state.list.filter(value=>value!==item)
    })
  }

render(){
    return(
      <div>
<Navbar/>
<Form addPost={this.addPost}/>
<List list={this.state.list} handleDelete={this.handleDelete} />
</div>
    );
  };
}
export default App;

