import React from 'react';
class Title extends React.Component {
    state = { input: "" };
    handleChange = event => {
        this.setState(
            {
                input: event.target.value
            }
        )
    }
    handleSubmit=e=>{
       this.props.addItem(this.state.input);
       this.setState({input:""}); 
    }
    render() {
        return (<div>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.input}></input>
            <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>add item</button>
        </div>);
    }
}
export default Title;