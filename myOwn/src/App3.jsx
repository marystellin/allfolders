/*import React from 'react';
//import ReactDOM from 'react-dom';

const App3=()=>
{
const [input,setInput]=React.useState();
const [mul,setMul]=React.useState();
const handleChange=(e)=>
{
    setInput(e.target.value) 
   
}
const handleClick=(e)=>
{
    setMul(input*input)
}

return(
<div>
    <input onChange={handleChange} value={input}></input>
     <button onClick={handleClick}>but</button>
     <span>{mul}</span>
</div>
  

)
}
export default App3;*/

/*import React from 'react';
//import ReactDOM from 'react-dom';
//import App3 from './App3';
const App3=()=>
{
    const[input1,setInput1]=React.useState();
    const[input2,setInput2]=React.useState();
    const[add,addVal]=React.useState();
const getValue1=(e)=>{
    setInput1(e.target.value)
}
const getValue2=(e1)=>{
    setInput2(e1.target.value)
}
const butEvent=()=>{
    addVal(parseInt(input1)+parseInt(input2))
}
return(
    <div>
    {"Enter value1:"}<input type="text" onChange={getValue1}></input>
    {"Enter value2:"}<input type="text" onChange={getValue2}></input>
    <button onClick={butEvent}>submit</button>
    <span>{add}</span>
    </div>
    )
}
export default App3;*/


import React from 'react';

const App3=()=>
{
    const[input1,addInput1]=React.useState("");
    //const[view,viewVal]=React.useState("");
    const[list,setList]=React.useState([]);
    //const [list1,setList1]=React.useEffec
    const addTodo=(e)=>{
        addInput1(e.target.value)
    }
    const clickEvent=()=>
    {
        //viewVal(input1)
        setList([...list,input1])
        //input1="";
    }
    return(
        <div>
            {"Enter todo:"}<input type="text" onChange={addTodo}></input>
            <button color="danger" onClick={clickEvent}>Enter</button>
            {/*<span>{view}</span>*/}
            {
                <ul>
                    {
                    list.map((i)=>{
                    return(
                        <li>{i}</li>
                    )}
                    )
                    }
                </ul>
            }  
        </div>
    )
}
export default App3;