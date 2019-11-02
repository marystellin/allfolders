import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import List from './List';
import axios from 'axios';
class App extends React.Component {
  state = {
    list: []
  };
  componentDidMount(){
    axios.get("http://localhost:8080/result").then(result=>{
      this.setState(
        {
          list:result.data
        }
      );
      });
  }
  addItem = item => {
    //console.log("new item", item);
    axios.post("http://localhost:8080/result",{name:item}).then(result=>{
      this.setState(
        {
          list:[...this.state.list,result.data]
        });
});
  };
      handleDelete=item=>{
        axios.delete("http://localhost:8080/result/"+item).then(result=>{
        this.setState({
          list:this.state.list.filter(i=>i.id!==item)
        })
      })
    }
    
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
          <Navbar />
          <Title addItem={this.addItem} />
          <List items={this.state.list} handleDelete={this.handleDelete} markComplete={this.markComplete}/>

          </div>
        </div>
         </div>
    );
  }
};
export default App;
