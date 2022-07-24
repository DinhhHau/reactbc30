//rcc
import React, { Component } from "react";
import SanPham from "./SanPham";

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

export default class BaiTapXemChiTiet extends Component {
  state = {
    sanPhamChiTiet: {
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

  renderPhone = () => {
    return data.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham phone={phone} xemChiTiet={this.xemChiTiet} />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log(sanPhamClick);
    // set lại giá trị state.sanPhamChiTiet = sản phẩm người dùng click vào
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      tenSP,
      maSP,
      hinhAnh,
      ram,
      rom,
      heDieuHanh,
      manHinh,
      cameraSau,
      cameraTruoc,
      giaBan,
    } = this.state.sanPhamChiTiet;

    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">
          {this.renderPhone()}

          {/* <div className="col-4">
            <div className="card">
              <img src="./img/applephone.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h3>Tên sản phẩm</h3>
              <p>1000</p>
              <button className="btn btn-success">Xem Chi Tiết</button>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="./img/vsphone.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h3>Tên sản phẩm</h3>
              <p>1000</p>
              <button className="btn btn-success">Xem Chi Tiết</button>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="./img/applephone.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h3>Tên sản phẩm</h3>
              <p>1000</p>
              <button className="btn btn-success">Xem Chi Tiết</button>
            </div>
          </div> */}
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img className="w-100" src={hinhAnh} alt="" />
            </div>
            <div className="col-8">
              <h3>Thông số kỹ thuật</h3>
              <hr />
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>

                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>

                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
