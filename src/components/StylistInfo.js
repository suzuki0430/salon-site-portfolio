import React from "react";
import { addName } from "../actions/booking";
import { connect } from "react-redux";

const StylistInfo = ({ id, name, addName }) => {
  const onChange = () => {
    const input = document.querySelector(".form-check-input");
    if (input.value) {
      console.log(id, name);
      addName(id, name);
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <div className="form-group form-check">
        <input
          onChange={onChange}
          className="form-check-input"
          type="checkbox"
          value={id}
        />
        <label className="form-check-label">{name}</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addName: (id, name) => dispatch(addName(id, name)),
});

export default connect(null, mapDispatchToProps)(StylistInfo);
