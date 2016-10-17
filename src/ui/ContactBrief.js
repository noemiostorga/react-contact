import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <Link to={"/contact/" + this.props.id}>
        <div className="list">
          <img className="firstImg"src={this.props.image} />
          <span className="name">{this.props.fname} {this.props.lname}</span>
        </div>
      </Link>
    )
  }
})