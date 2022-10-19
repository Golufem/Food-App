import React, {useContext} from 'react';

import styles from './MealItem.module.css'
import MeanItemFom from './MealitemForm/MeanItemFom';
import CartContext from '../../../store/CartContext';
const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
 const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = amount =>{
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount:amount,
        price :props.price 
      })
  }

    return (
    <li className={styles.meal}>
      <div >
        <h3> {props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
          <MeanItemFom id = {props.id} onAddToCart = {addtoCartHandler}/>
      </div>
      
       
        
     

    </li>
  );
}

export default MealItem;
