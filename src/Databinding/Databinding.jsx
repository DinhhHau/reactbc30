import React, { Component } from "react";

export default class Databinding extends Component {


  userName = "dinhhau99@gmail.com";

  showInfo() {
    return "Hello Cybersoft";
  }

  renderCard = () => {
    return (
      <div>
        <img src="https://picsum.photos/200/300" alt="" />
        <hr />
        username : {this.userName}
      </div>
    );
  };

  // Phương thức render (phương thức khác hàm)
  render() {
    const hoTen = "Đình Hậu";
    const tinhDiemTungBinh = (dToan, dVan) => {
      return (dToan + dVan) / 2;
    };

    return (
      <div>
        Databinding
        <p>Họ tên:{hoTen}</p>
        <p>Điểm trung bình: {tinhDiemTungBinh(8, 6)}</p>
        <hr />
        <p>{this.showInfo()}</p>
        <p>{this.renderCard()}</p>
      </div>
    );
  }
}
