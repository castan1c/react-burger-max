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
}, (prevProps, newProps) =>
  newProps.visible === prevProps.visible &&
  newProps.children === prevProps.children);

// #Class based implementation::
// class Modal extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.visible !== this.props.visible;
//   }

//   render() {
//     return (
//     <>
//        <Backdrop click={this.props.closed} show={this.props.visible}/>
//        <div className={classes.Modal} style={{
//         transform: this.props.visible ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: this.props.visible ? '1': '0'
//       }}>
//         {this.props.children}
//       </div>
//     </>
//     )
//   }
// }

export default Modal;