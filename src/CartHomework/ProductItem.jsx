import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ProductItem extends Component {
  render() {
    const notify = () => toast("Bạn đã thêm vào giỏ hàng thành công");
    let { product, addProd ,watchDetail} = this.props;

    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{product.tenSP}</h3>
          <button className="btn btn-success me-2" onClick={()=>{
            watchDetail(product)
          }}>Xem Chi Tiết</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              addProd(product);
              notify();
            }}
          >
            Thêm giỏ hàng
            <ToastContainer />
          </button>
        </div>
      </div>
    );
  }
}
