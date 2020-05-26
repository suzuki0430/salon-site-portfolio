import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  title,
  content,
  actions,
  onDismiss,
  name,
  month,
  date,
  hour,
  course,
}) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="modal-dialog">
        <div className="modal-content">
          <div className="header modal-header">{title}</div>

          <div className="list-group">
            <div className="list-group-item">スタイリスト：{name}</div>
            <div className="list-group-item">コース：{course}</div>
            <div className="list-group-item">
              予約日時：
              {month}月{date}日　
              {hour}時　
            </div>
          </div>

          <div className="content modal-body">{content}</div>
          <div className="actions modal-footer">{actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

// ui dimmer modals visible active
// ui standard modal visible active
