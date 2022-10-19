import React, {useRef, useState} from 'react';

import styles from './MeanItemForm.module.css'
import Input from '../../../../UI/Input/Input';

const MeanItemFom = (props) => {
  const [amountIsValid, setAmountIsValid] = useState (true)

  const amountInputRef = useRef()

  const submitHander = e =>{
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enteredAmount

    console.log(enteredAmount)

    if(enteredAmount.trim().length ===0
       || enterdAmountNumber < 1 ||
        enterdAmountNumber > 5 ){
          setAmountIsValid(false);
          console.log(typeof enterdAmountNumber);
          console.log(enterdAmountNumber);
          console.log(enteredAmount)
          console.log(amountIsValid)
          return;
        }
        console.log( typeof enterdAmountNumber)
        props.onAddToCart(enterdAmountNumber)
  };

  return (
    <form className={styles.form}  onSubmit = {submitHander}>
        <Input 
        ref = {amountInputRef}
        label = 'Amount'
        
        input = {{
            id: "Amount_" + props.id,
            type: 'number',
            min: '1',
            max: "5",
            step: '1',
            defaultValue: "1"


        }}/>
        <button> +  Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MeanItemFom;
