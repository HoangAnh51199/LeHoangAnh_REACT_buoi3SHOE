import React, { Component } from "react";
import Shoe from "./Shoe";

export default class DanhSachListShoe extends Component {
  renderShoeList = () => {
    return this.props.data.map((element, idx) => {
      return (
        <div key={idx} className="col-4">
          <Shoe
            addToCart={this.props.addToCart}
            getShoeDetail={this.props.getShoeDetail}
            element={element}
          />
        </div>
      );
    });
  };
  render() {
    //console.log(this.props.data);
    return <div className="row">{this.renderShoeList()}</div>;
  }
}
