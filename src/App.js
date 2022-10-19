import React, {useState} from 'react';
import './App.css';
import CartProvider from './Components/store/CartProvider';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header/Header';
import Meals from './Components/Meals/Meals/Meals';
import OrderReceived from './Components/OrderReceived/OrderReceived';

function App() {

  const [showCart, setShowCart]= useState(false);

  const [order, setOrder] = useState(false)
  
  const showCArtHandler = ()=>{
    setShowCart(true)
  }
  
  const hideCArtHandler = ()=>{
    setShowCart(false)
  }
  const showOrderHandler = () =>{
    setOrder(true)
  }
  const HideOrder = () =>{
    setOrder(false)
  }

  
  
  
  return (
    <CartProvider>
    { order && <OrderReceived onHideOrder = {HideOrder}></OrderReceived>}
      {showCart && <Cart onClose = {hideCArtHandler} onShowOrder = {showOrderHandler}></Cart>}
      <Header onShowCart = {showCArtHandler} ></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
