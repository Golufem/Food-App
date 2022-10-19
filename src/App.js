import React, {useState} from 'react';
import './App.css';
import CartProvider from './Components/store/CartProvider';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header/Header';
import Meals from './Components/Meals/Meals/Meals';

function App() {

  const [showCart, setShowCart]= useState(false)
  
  const showCArtHandler = ()=>{
    setShowCart(true)
  }
  
  const hideCArtHandler = ()=>{
    setShowCart(false)
  }

  
  
  
  return (
    <CartProvider>
      {showCart && <Cart onClose = {hideCArtHandler}></Cart>}
      <Header onShowCart = {showCArtHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
