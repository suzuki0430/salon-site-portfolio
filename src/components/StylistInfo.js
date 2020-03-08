import React from 'react';
import { addName } from '../actions/booking';
import { connect } from 'react-redux';

class StylistInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    const input = document.querySelector('.form-check-input');
    if (input.value) {
      console.log(this.props.id, this.props.name)
      this.props.addName(this.props.id, this.props.name)
    } else {
      return
    }
  }

  render() {
    return (
      <div className="container">
        <div className="form-group form-check">
          <input onChange={this.onChange} className="form-check-input" type="checkbox" value={this.props.id} />
          <label className="form-check-label">{this.props.name}</label>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addName: (id, name) => dispatch(addName(id, name))
});

export default connect(
  null,
  mapDispatchToProps
)(StylistInfo);
