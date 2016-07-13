import React from 'react';
import ContactBrief from 'ui/ContactBrief';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Peeps</h1>
        {this.props.users.map(function(user){
          return <ContactBrief key={user.id} id={user.id} image={user.image} fname={user.fname} lname={user.lname} />
        })}
      </div>
    )
  }
})