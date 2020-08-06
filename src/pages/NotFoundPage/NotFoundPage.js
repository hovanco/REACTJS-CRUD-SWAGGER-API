import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <strong>khong tim thay trang!</strong>
        </div>
      </div>
    );
  }
}