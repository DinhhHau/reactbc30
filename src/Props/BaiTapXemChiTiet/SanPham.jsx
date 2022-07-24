import React, { Component } from "react";

export default class SanPham extends Component {

  render() {
    let {phone,xemChiTiet} = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{phone.tenSP}</h3>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
            //   this.props.xemChiTiet(phone);
            xemChiTiet(phone);
            }}>Xem Chi Tiết</button>
        </div>
      </div>
    );
  }
}
