import React from 'react';
import Contact from 'ui/Contact';
import { getContactById } from 'api/users';

export default React.createClass({
  getInitialState: function() {
    return {
      contact: {}
    }
  },
  componentWillMount: function () {
    this.setState({
      contact: getContactById(this.props.params.contactId)
    })
  },
  render: function () {
    return (
      <Contact contact={this.state.contact} />
    )
  }
})