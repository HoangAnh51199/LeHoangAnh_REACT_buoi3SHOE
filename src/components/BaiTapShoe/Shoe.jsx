import React, { Component } from 'react'

export default class Shoe extends Component {
  
    render() {
    return (
        <div  className="card mb-2">
        <img style={{width:"300px",height:"300px"}} className="card-img-top" src={this.props.element.image} alt="..." />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.name}</h4>
         <button 
         onClick={() => this.props.getShoeDetail(this.props.element)}
         className="btn btn-dark"
         data-toggle="modal" data-target="#modelId"> SHOW DESCRIPTION</button>
         {/* modal */}
         <button style={{margin:"5px"}}
         onClick={() => this.props.addToCart(this.props.element)}
         className="btn btn-primary">Thêm Giỏ Hàng</button>
        </div>
      </div>
    )
  }
}
