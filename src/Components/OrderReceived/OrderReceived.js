import React from 'react';
import Modal from '../UI/Modal/Modal';
import styles from './OrderReceivedStyle.module.css'



const OrderReceived = (props) => {
  return (
    <Modal>
     <div className={styles.wrap}>
     <h1 className={styles.text}>Order Successfully Recevied</h1>
     <button onClick={props.onHideOrder}className = {styles.button}>Ok</button>
     </div>
    </Modal>
  );
}

export default OrderReceived;
