import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../../Cart/CartIcon';
import HdButtonStyles from './ButtonHeader.module.css';
import CartContext from '../../store/CartContext';



const ButonHeader = (props) => {
  const[buttonInaction, setBittonInAction] = useState(false)
  const cartCtx =useContext(CartContext);
  const itemmi = cartCtx.items


  const numberOfCart = itemmi.reduce(
    (curVal,val)=>{ 
      return(curVal+val.amount)
    },0
  ) 
  
  const {items} = cartCtx
 
const btnStyleClass = `${HdButtonStyles.button}  ${ buttonInaction ?  HdButtonStyles.bump: ''}`

useEffect(()=>{
  if (cartCtx.items.length === 0){
    return
  }
  setBittonInAction(true);

 const timer =  setTimeout(()=>{
    setBittonInAction(false)
  }, 300);

  return () =>{
    clearTimeout(timer);
  };
},[items])

  return (
    <button onClick={props.onShowCarthere } className={btnStyleClass}>
        <span className={HdButtonStyles.icon}><CartIcon/></span>
        <span> Your Cart</span>
        <span className={HdButtonStyles.badge}>{numberOfCart}</span>
    
    </button>
  );
}

export default ButonHeader;
