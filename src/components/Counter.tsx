import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState<number>(0);// typscript provide type safety
     //using typescript to verify that the variable is number

    return(
        <div>
          <p> Cups ordered: {count} </p> 
          <button onClick={()=>setCount((c)=>c+1)}>Order one more</button>
    
        </div>
    )
}
