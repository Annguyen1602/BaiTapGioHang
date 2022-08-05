import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    let { arrProduct, addProd ,watchDetail} = this.props;

    return arrProduct.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem product={prod} addProd ={addProd} watchDetail={watchDetail}/>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
