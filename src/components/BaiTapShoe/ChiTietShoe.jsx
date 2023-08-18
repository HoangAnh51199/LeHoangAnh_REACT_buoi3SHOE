import React, { Component } from "react";

export default class ChiTietShoe extends Component {
  render() {
    //console.log(this.props.detail);
    return (
        
      <div className="row mt-4">
        <div className="col-4 text-center">
          <h2> Adidas Prophere </h2>
          <img className="img-fluid" alt="..." src={this.props.detail.image} />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h1>Thông số chi tiết </h1>
                </td>
              </tr>
              <tr>
                <td>Alias</td>
                <td>{this.props.detail.name}</td>
              </tr>
              <tr>
                <td>Giá </td>
                <td>{this.props.detail.price}</td>
              </tr>
              <tr>
                <td>Chú thích</td>
                <td>{this.props.detail.description}</td>
              </tr>
              <tr>
                <td>Chú thích ngắn </td>
                <td>{this.props.detail.shortDescription}</td>
              </tr>
              <tr>
                <td>Tồn Kho </td>
                <td>{this.props.detail.quantity} cái</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
