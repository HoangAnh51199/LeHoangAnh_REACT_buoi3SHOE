import React, { Component } from "react";
import data from "../../data/dataShoe.json";
import Shoe from "./Shoe";
import ChiTietShoe from "./ChiTietShoe";
import DanhSachListShoe from "./DanhSachListShoe";
import Header from "./Header";
import Modal from "./Modal";
import GioHang from "./GioHang";

export default class BaiTapShoe extends Component {
  state = {
    shoeDetail: data[0],
    cartList: [],
  };

  addToCart = (shoe) => {
    //console.log(shoe);
    //this.state.cartList.push(shoe);
    //cách 2: cho const data 
    const data =[...this.state.cartList];
    data.push({...shoe,soLuong: 1}); //es6 spread operator thêm thuộc tính trong 1 đối tượng
    
    this.setState(
      {  
      // cartList: this.state.cartList,
      cartList: data,
      },
      () => {
        console.log(this.state.cartList);
      });
  };

  getShoeDetail = (shoe) => {
    //console.log(shoe); log tu shoe.jsx this.props.element
    this.setState({
      shoeDetail: shoe, // lấy dc data đang tìm từ shoe.jsx
    });
  };
  //   renderShoeList =() =>{
  //   //console.log(data);
  //   return data.map((element ,idx)=>{
  //     return (
  //     <div key={idx} className="col-4">
  //    <Shoe element={element}/>
  //   </div>

  //     );
  //   })
  //  }

  render() {
    console.log(this.state.shoeDetail);
    return (
      <div>
        <Header />
        <GioHang cartList={this.state.cartList} />

        <DanhSachListShoe
          addToCart={this.addToCart}
          getShoeDetail={this.getShoeDetail}
          data={data}
        />

        <Modal detail={this.state.shoeDetail} />

        {/* gõ b4-modal modal thu 2 thì doi id data-target="#modelId2", id="modelId2" */}
      </div>
    );
  }
}
