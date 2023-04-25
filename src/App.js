
import React from "react";
import {useState} from "react";

function Counter()
{
    let [count,setcount]=useState(0);
    let [factor,setfactor]=useState(1);
    console.log(count);
    console.log("valk"+setcount+"dalk");



    const Increment = () =>{
      count=count+factor;
      
  
      setcount(count);
     console.log(count);
    }
    
     
    const Decrement = () =>{
      count=count-factor;
      setcount(count);
      console.log(count);
      
    }

    const Reset = () =>{
      count=0;
      setcount(count);
      console.log(count);
      
    }


    const handle = (input) =>{
      if(input)
      {
      setfactor(input);
      }
      else
      {
        setfactor(1);
      }
    }

    console.log(factor);
    return(
      <div>
        
    
        <h1 style={{color: count > 0 ? "green" : count < 0 ? 'red' : 'black'}}>{count}</h1>
          <div>
           <button onClick={Increment}>INCREMENT</button>
          <button onClick={Decrement}>DECREMENT</button>
          <button onClick={Reset}>RESET</button>
        </div>


        <div>
          Enter the number
          <input type="number"
          value={factor}
          onChange={(e)=>handle(e.target.valueAsNumber)} />
          </div>
      </div>

    )
    
}


export default Counter;
