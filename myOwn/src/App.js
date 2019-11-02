/*import React from 'react'
class App extends React.Component {
    constructor(){
    super();
    this.state={
        name:'ruby',
        class:'mca'
    }
}
    updateDetails(event){
        this.setState({
            name:event.target.value
        })

    }
    updateAnother(e){
        this.setState({
            class:e.target.value
        })
    }
    incrementValue
    render(){
        return(<div>
            <h1>HELLO WORLD</h1>
            <h3> stu.name:{this.state.name}</h3>
            <h2> stu.class:{this.state.class}</h2>
            <input type="text" onChange={this.updateDetails.bind(this)}></input>
            <input type="text" onChange={this.updateAnother.bind(this)}></input>
        </div>
            )
    }
}
class App extends React.Component {
        state = {
            list: [],
            input: " "
        };
    
    postValues = value => {
        console.log("new comments", value)
        this.setState(
            {
                list: [...this.state.list, value]
            }
        )
    }
    handleChange = event => {
        this.setState(
            {
                input: event.target.value
            }
        )
    };
    handleSubmit = e => {
        this.postValues(this.state.input)
        this.setState(
            { 
                input: "" 
            })
    }
    render() {
        return (
            <div>
                <textarea rows="5" cols="10" placeholder="write something.." onChange={this.handleChange} value={this.state.input}></textarea>
                <button onClick={this.handleSubmit}>POST</button>
                <ul>
                    {
                        this.state.list.map((i) => {
                            return <li key={i.id} className="list-group-item"><h3></h3><span>{i}</span></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default App;*/
/*
import React from 'react'
class App extends React.Component{
    constructor(){
        super();
    this.state={
        list:[{
                input1:"",
                val1:"",
                input2:"",
                val2:"",
                op1:"",
                op2:"",
                result:""
        }]
    }
}     
    //this.addNumber1 = this.addNumber1.bind(this);
    //this.addNumber2 = this.addNumber2.bind(this);
    addNumber1=(event)=>
    {   
            this.setState({
            input1:event.target.value
        })
    }
    addNumber2=(event1)=>{
        this.setState({
            input2:event1.target.value
        })
    }
    answer=()=>{
    this.setState({
        list:[...this.state.list,{
        val1:this.state.input1,
        val2:this.state.input2,
        op1:"+",
        op2:"=",
        result:Number(this.state.input1)+Number(this.state.input2)
    }],
    input1:"",
    input2:""   
    })}
    render()
    {
        return(
            <div>
                <h4>ADDING TWO VALUE</h4>
                <input type="text" onChange={this.addNumber1.bind(this)} value={this.state.input1} ></input><br></br>
                <input type="text" onChange={this.addNumber2.bind(this)} value={this.state.input2}></input>
                <button onClick={this.answer}>add</button>
                {/*<span>{this.state.result}</span>
                
                {
                this.state.list.map((i)=>{
                    return(
                            <p>
                                <span>{i.val1}{i.op1}{i.val2}{i.op2}{i.result}</span>
                            </p>
                            )
                })
                }
                </div>
    
        )
    }
}
export default App;

/*import React from 'react'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            
            //list:[{
                input:"" 
            //}]
        }
    }
    addList=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    getList=()=>{
        this.setState({
            //list:[...this.state.list,{
                val:this.state.input
            //}]
                    })

    }
    render(){
        return(
            <div>
                <h3>add todo item</h3>
                <input type="text" onChange={this.addList.bind(this)}></input>
                <button onClick={this.getList}>submit</button>
                <span>{this.state.val}</span>
            </div>
        )
    }
}
export default App;*/

import React,{createState} from "react";

function App(){
    const [input,setinput]=createState()
    const [list,setlist]=createState([])

    const addList=(event)=>{
            setinput(event.target.value)
    }
    const getList=()=>{
            setlist([...list,input])        
    }
        return(
            <div>
                <h3>add todo item</h3>
                <input type="text" onChange={addList} value={input}></input>
                <button onClick={getList}>submit</button>
                {
                    <ul>
                        {   list.map((i)=>{
                        return(
                            <li>key={i}</li>
                    )
                                            })
                    }

                        </ul>
                    }
</div>
        )
                }
 export default App;


/*import React from 'react'
import Axios from 'axios';
class App extends React.Component{
    constructor(){
        super();
    this.state={
        list:[{
        input1:"",
        input2:"",
        op1:"+",
        op2:"=",
        result:""}],
        // operator1:"",
        // operator2:"",        
    }
}
    componentDidMount(){
        Axios.get("http://localhost:8000/add1")
        .then(res=>{
            //console.log(res)
            this.setState({
                list:res.data
            })
        })
    }     
    //this.addNumber1 = this.addNumber1.bind(this);
    //this.addNumber2 = this.addNumber2.bind(this);
    addNumber1=(event)=>
    {   
            this.setState({
            input1:event.target.value
        })
    }
    addNumber2=(event1)=>{
        this.setState({
            input2:event1.target.value
        })
    }
    
    answer=()=>{
        this.state.result=this.state.input1+this.state.input2
        Axios.post("http://localhost:8000/add1",{value1:this.state.list.input1,value2:this.state.list.input2,operator1:this.state.list.op1,operator2:this.state.list.op2,result:this.state.list.result})
        .then(success=>{
            console.log(success.data)
            if(success.status=== 200 && success.statusText==="OK"){
                this.setState({
                    list:success.data,
                    input1:"",
                    input2:""
                })
            }
        })}

    render()
    {
        return(
            <div>
                <h4>ADDING TWO VALUE</h4>
                <input type="text" onChange={this.addNumber1.bind(this)} value={this.state.input1} ></input><br></br>
                <input type="text" onChange={this.addNumber2.bind(this)} value={this.state.input2}></input>
                <button onClick={this.answer}>add</button>
                {/*<span>{this.state.result}</span>
                
                {
                this.state.list.map((i)=>{
                    return(
                            <p key={i.id}>
                                <span>{i.value1}{i.operator1}{i.value2}{i.operator2}{i.result}</span>
                            </p>
                            )
                })
                }
                </div>
    
        )
    }
}
export default App;*/
