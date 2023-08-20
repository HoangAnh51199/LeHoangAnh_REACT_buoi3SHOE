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

  handleRemove =(id) => {
    console.log(id);
    const result = window.confirm("Bạn có muốn xóa không?");
   
   if(result){
    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === id;
    });

    data.splice(index, 1);

    this.setState({
      cartList:data,
    });

    // this.setState({
    //   cartList:this.state.cartList.filter((element)=>element.id !==id)
    //   //chỉ filter trùng id,id còn lại giữ yên (quét toàn bộ data nhiều dùng trên tìm thấy thì dừng lại)
    //filter trả về mảng mới ,ko thay doi giá trị data trước
    // })
   }
  };

  handleQuantity = (id, isIncrease) => {
    console.log("id", id);
    console.log("isIncrease", isIncrease);

    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === id;
    });

    if (isIncrease) {
      //tăng số lượng 1
      data[index].soLuong += 1;
    } else {
      //giảm số lượng 1
      if (data[index].soLuong === 1) {
        //hien confirm muon xoa
        const result = window.confirm("Bạn có muốn xóa không ?");
        if (result) {
          //xóa sản phẩm
          data.splice(index, 1);
        } else {
          //ko lam gi het
        }
      } else {
        //giảm bình thường
        data[index].soLuong -= 1;
      }
    }
    this.setState({
      cartList: data,
    });
  };

  addToCart = (shoe) => {
    //console.log(shoe);
    //this.state.cartList.push(shoe);
    //cách 2: cho const data
    const data = [...this.state.cartList];

    const index = data.findIndex((element) => {
      return element.id === shoe.id;
    });

    console.log(index);
    if (index !== -1) {
      //index =0
      //tăng số lượng sp
      data[index].soLuong += 1;
    } else {
      //push vào mảng giỏ hảng
      data.push({ ...shoe, soLuong: 1 }); //es6 spread operator thêm thuộc tính trong 1 đối tượng
    }

    this.setState(
      {
        // cartList: this.state.cartList,
        cartList: data,
      },
      () => {
        console.log(this.state.cartList);
      }
    );
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
        <GioHang
          handleRemove={this.handleRemove}
          handleQuantity={this.handleQuantity}
          cartList={this.state.cartList}
        />

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
