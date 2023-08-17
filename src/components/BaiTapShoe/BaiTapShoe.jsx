import React, { Component } from "react";
import data from "../../data/dataShoe.json";

export default class BaiTapShoe extends Component {
 renderShoeList =() =>{
  //console.log(data);
  return data.map((element ,idx)=>{
    return (
    <div key={idx} className="col-4">
    <div className="card">
      <img className="card-img-top" src={element.image} alt="..." />
      <div className="card-body">
        <h4 className="card-title">{element.name}</h4>
       <button className="btn btn-dark"> SHOW DESCRIPTION</button>
      </div>
    </div>
  </div>
    );
  })
 }
 
  render() {
    return (
      <div className="row">
      {this.renderShoeList()}
      </div>
    );
  }
}
