import React, {useContext} from 'react';
import CartItem from './CartItem'
import CartContext  from '../store/CartContext';
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';

const Cart = (props) => {

   
const cartCtx = useContext(CartContext);

const totalAmount  = `$${cartCtx.totalAmount.toFixed(2)}`;

const hasItem = cartCtx.items.length > 0;

const cartItemAddHandler = (item) =>{
    
    cartCtx.addItem({...item, amount:1});
}

const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
        console.log("I'm" )
}

const showorderHandlermi = ()=>{
    props.onClose(); 
    props.onShowOrder();

}


const cartItems = <ul 
className={styles.cartSty}>
{cartCtx.items.map((item) =>(
    <CartItem  
     key = {item.id}
     name = {item.name}
     amount = {item.amount}
     price = {item.price}
     onRemove = {cartItemRemoveHandler.bind(null, item.id)} 
     onAdd = {cartItemAddHandler.bind(null,item)}
      />))}
    

</ul>
               
    return (
    <Modal onClose = {props.onClose}>
    {cartItems}
    <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
        <div className={styles.actions}>
            <button onClick={props.onClose} className={styles.buttondel}>Close</button>
            { hasItem &&  <button className={styles.button} onClick = {showorderHandlermi}>Order</button>}
        </div>
    </Modal>
  );
}

export default Cart;
