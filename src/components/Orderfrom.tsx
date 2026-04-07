import { useState } from "react"

interface OrderFormProps{

    onSubmit(order: { name: string ; cups: number}): void;
}


export function OrderForm({onSubmit}: OrderFormProps)
{ const [name, setName] = useState<string>('Masla'); // using typescript to verify that the variable is string
  const [cups, setCups] = useState<number>(1); // using typescript to verify that the variable is number

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    onSubmit({name, cups});

  }

    return(
       <form onSubmit={handleSubmit}>
        <label> Tea Name</label>
        <input
        value ={name}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setName(e.target.value)
        } 
        />
         <label> Cups</label>
        <input
        type="number"
        value ={cups}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setCups(Number(e.target.value)||0) // using typescript to verify that the variable is number
        } 
        />
        <button type="submit">Place Order</button>

       </form>
    )
}