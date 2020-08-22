import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['razzak','jashim','sakib','nirob','shuvo']
  const products = [
    {name:'web developer', price: '$99.90'},
    {name: 'programmer', price:'$149.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name='manna' nayika='moushumi'></Person>

        <Counter>
          Count : 0
        </Counter>
        
        

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li> */}
        </ul>
        
  
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  const handleIncrease = ()=> setCount(count +1);
  const handleDecrease = ()=> setCount(count -1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleDecrease}> Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Product(props) {
  const productStyle={
    border: '2px solid aqua',
    borderRadius : '4px',
    backgroundColor: 'gray',
    height:'250px',
    width:'250px',
    float : 'left',
    margin:'10px'
  }
  // const {name,price} = {name:'web developer', price: '$99.90'} 
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}





function Person(props){
  const personStyle= {
    border: '3px solid yellow',
    margin : '5px',
    padding : '15px'
  }
  return(
  <div style = {personStyle}>
      <h1>Name : {props.name} {props.nayika}</h1>
      <h3> zafina Rahman</h3>
  </div> 
  )}

export default App;
