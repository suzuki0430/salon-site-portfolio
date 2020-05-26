import React from "react";
import { addCourse } from "../actions/booking";
import { connect } from "react-redux";

const StylistCourse = ({ addCourse }) => {
  return (
    <div className="container">
      <h2>コース</h2>
      <form onChange={(e) => addCourse(e.target.value)} className="form-check">
        <select name="course" className="form-control form-control-lg">
          <option value="">コースを選択してください</option>
          <option value="カットコース">カットコース</option>
          <option value="パーマコース">パーマコース</option>
          <option value="カラーコース">カラーコース</option>
        </select>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCourse: (course) => dispatch(addCourse(course)),
});

export default connect(null, mapDispatchToProps)(StylistCourse);
