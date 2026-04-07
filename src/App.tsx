import { useState } from 'react'

import './App.css'
import { Card } from './components/Card'

import { Counter } from './components/Counter'
import type {Tea} from './types';
import { List } from './components/List';
import { OrderForm } from './components/Orderfrom';
import { Card2 } from './components/Card2';
const menu: Tea[]=[
  {
    id: 1,
    name: 'Green Tea',
    price: 25,
  },
  {
    id: 2,
    name: 'Black Tea',
    price: 65,    
  },
  {
    id: 3,
    name: 'Oolong Tea',
    price: 70,    
  },
]
function App() {
 

  return (
    <>
      <div >
          <h1>Get started</h1>
  <Card name="Example Product" price={19.99}/>
  <Card name="Special Product" price={29.99}/>
        </div>
        <div>
          <Counter/>
        </div>
        <div>
          <List items={menu}/>
        </div>
        <div>
          <OrderForm 
          onSubmit={(order)=> {
            console.log("placed", order.name, order.cups);

          }} 
          />
        </div>
        <div>
          <Card2

          title= "Typescript learning Card"
          footer = {<button>Order Now</button>}

          
          />
        </div>
        
    </>
  )
}

export default App
