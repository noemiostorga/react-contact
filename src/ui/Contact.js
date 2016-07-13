import React from 'react';
import { hashHistory } from 'react-router';

export default React.createClass({
  handleBack: function () {
    hashHistory.goBack();
  },
  render: function () {
    return (
      <div>
        <button onClick={this.handleBack}>{"<"}</button>
        <div><img src={this.props.contact.image} /></div>
        <p>{this.props.contact.fname} {this.props.contact.lname}</p>
        <p>{this.props.contact.email}</p>
        <p>{this.props.contact.phone}</p>
        <p>{this.props.contact.city}, {this.props.contact.state}</p>
      </div>
    )
  }
})