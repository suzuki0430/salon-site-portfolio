import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import history from '../history';

class BookingCheck extends React.Component {

  renderActions() {
    return (
      <React.Fragment>
        <Link to="/bookingcomplete" className="btn btn-primary btn-lg">OK</Link>
        <Link to="/booking" className="btn btn-secondary btn-lg">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (this.props.booking.name) {
      return '予約を確定してもよろしいでしょうか？'
    } else {
      return `記載漏れがございますので、再入力をお願いいたします。`
    }
  }

  render() {
    return (
      <Modal 
        title="予約確認"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return { booking: state.booking }
};

export default connect(
  mapStateToProps,
  null
)(BookingCheck);