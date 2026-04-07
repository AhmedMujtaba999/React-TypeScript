import type {Tea} from '../types'; // importing type tea from types.ts file
import { Card } from './Card'; // importing the Card component from the Card.tsx file

interface ListofTeaProps{
    items: Tea[];
}
export function List({ items }: ListofTeaProps){
    return (
        <div> 
                   <h1>List of Items</h1>
            {items.map((Tea)=> (
                <Card key= {Tea.id} name={Tea.name} price={Tea.price} isSpecial={Tea.price >30 }/>
            ))}
     
        </div>
    )
}