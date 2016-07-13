import React from 'react';
import ContactList from 'ui/ContactList';
import { getContactList } from 'api/users';

export default React.createClass({
  getInitialState: function () {
    return {
      users: []
    }
  },
  componentWillMount: function() {
    this.setState({
      users: getContactList()
    });
  },
  render: function () {
    return (
      <ContactList users={this.state.users} />
    )
  }
})