import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = React.memo(function Modal(props) {

  return (
    <>
      <Backdrop click={props.closed} show={props.visible}/>
      <div className={classes.Modal} style={{
        transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.visible ? '1': '0'
        }}>
        {props.children}
      </div>
    </>
  )
}, (prevProps, newProps) => newProps.visible === prevProps);

export default Modal;