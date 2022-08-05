import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    cart: [],
    specifications: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };

  adjustProd = (id, fix) => {
    let arrProd = this.state.cart;
    let index = arrProd.findIndex((prod) => prod.maSP === id);
    if (fix === "+") {
      arrProd[index].soLuong += 1;
    } else {
      arrProd[index].soLuong -= 1;
      console.log(arrProd[index]);
    }
    if (arrProd[index].soLuong === 0) {
      arrProd.splice(index, 1);
    }
    this.setState({
      cart: arrProd,
    });
  };

  addProd = (product) => {
    let prodCart = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      giaBan: product.giaBan,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
    };
    let updateCart = [...this.state.cart];

    let index = updateCart.findIndex((prod) => prod.maSP === prodCart.maSP);
    if (index !== -1) {
      updateCart[index].soLuong += 1;
    } else {
      updateCart.push(prodCart);
    }
    this.setState({
      cart: updateCart,
    });
  };

  watchDetail = (product) => {
    this.setState({
      specifications: product,
    });
  };
  deleteProd = (id) => {
    let arrProd = this.state.cart;
    let index = arrProd.findIndex((prod) => prod.maSP === id);
    arrProd.splice(index, 1);
    this.setState({
      cart: arrProd,
    });
  };
  render() {
    let total = this.state.cart.reduce((totalProd, phone, index) => {
      return (totalProd += phone.soLuong);
    }, 0);
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.specifications;
    return (
      <div className="container">
        <h2 className="text-center text-success">Bài tập giỏ hàng</h2>
        <div className="text">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({total})
          </span>
        </div>
        <Cart
          cart={this.state.cart}
          adjustProd={this.adjustProd}
          deleteProd={this.deleteProd}
        />
        <ProductList
          arrProduct={data}
          addProd={this.addProd}
          watchDetail={this.watchDetail}
        />
        <div className="row mt-5    ">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img src="./img/applephone.jpg" alt="..." className="w-100" />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="div"></div>
      </div>
    );
  }
}
