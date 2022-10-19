import React from 'react';
import Modal from '../UI/Modal/Modal';



const OrderReceived = (props) => {
  return (
    <Modal>
      <h1>Order Successfully Recevied</h1>
      <button onClick={props.onHideOrder}>Ok</button>
    </Modal>
  );
}

export default OrderReceived;
