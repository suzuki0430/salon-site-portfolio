import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="modal-dialog"
      >
        <div className="modal-content">
          <div className="header modal-header">{props.title}</div>
          <div className="content modal-body">{props.content}</div>
          <div className="actions modal-footer">{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

// ui dimmer modals visible active
// ui standard modal visible active