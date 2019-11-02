import React from 'react';
class Form extends React.Component{
    state = { input: "" };
  handleChange = event => {
    this.setState(
      {
        input: event.target.value
      }
    )};
    handleSubmit=e=>{
      this.props.addPost(this.state.input)
      this.setState({input:""})
    }
    render(){
    return(
<div>
<div className="input-group input-group-lg">

<input type="text" className="tn btn-warning" aria-label="Large" aria-describedby="inputGroup-sizing-sm"placeholder="write something here..." onChange={this.handleChange} value={this.state.input}>
</input>
<div className="input-group-prepend">
<span className="input-group-text" id="inputGroup-sizing-sm">
<button  className="btn btn-primary btn-sm"onClick={this.handleSubmit}>POST</button></span>
</div>
</div>
</div>
    )};
}
export default Form;