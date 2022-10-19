import React from 'react';
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
  const Backdrop = (props)=>(
    <div onClick={props.onCloseparent} className={styles.backdrop}></div>
  )
  const Overlay = (props)=>(
    <div className={styles.modal}>{props.children}</div>
  )

  const overlayportal = document.getElementById('overlay')
  
    return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseparent = {props.onClose}></Backdrop>,overlayportal)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlayportal)}
    </React.Fragment>
  );
}

export default Modal;
