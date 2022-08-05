import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { cart, adjustProd, deleteProd } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ transform: "translateX(-25%)" }}
          >
            <div className="modal-content" style={{ width: "900px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((prod, index) => {
                      return (
                        <tr key={index}>
                          <td>{prod.maSP}</td>
                          <td>
                            <img
                              src={prod.hinhAnh}
                              alt="..."
                              width={50}
                              height={50}
                            />
                          </td>
                          <td>{prod.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary me-2"
                              onClick={() => {
                                adjustProd(prod.maSP, "+");
                              }}
                            >
                              +
                            </button>
                            {prod.soLuong}
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                adjustProd(prod.maSP, "-");
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{prod.giaBan.toLocaleString()} VND</td>
                          <td>
                            {(prod.giaBan * prod.soLuong).toLocaleString()} VND
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteProd(prod.maSP);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        
                        </tr>
                        
                      );
                    })}
                    
                  </tbody>
                  <tfoot>
                    <tr>
                        <td colSpan={5}></td>
                        <td>Tổng tiền</td>
                        <td>{cart.reduce((totalPrice,phone)=>{
                            return (totalPrice += phone.soLuong * phone.giaBan)

                        },0).toLocaleString()} VND</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
