//rcc
import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg", // state default
    fSize:16,
  };

  render() {
    return (
      <div className="container">
        <h3 className="mt-2">Bài tập 1: Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                //thay đổi hình
                this.setState({
                  imgSrc: "./img/products/red-car.jpg",
                });
              }}
            >
              Red
            </button>

            <button
              className="btn btn-dark m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/black-car.jpg",
                });
              }}
            >
              black
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/silver-car.jpg",
                });
              }}
            >
              silver
            </button>
            <button
              className="btn btn-default m-2 border"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/steel-car.jpg",
                });
              }}
            >
              steel
            </button>
          </div>
        </div>

        <h3 className="mt-5">Bài tập 2: Tăng giảm font-size</h3>
        <p style={{fontSize:this.state.fSize}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse
          sapiente blanditiis quos quibusdam ducimus repellat culpa minima
          alias, excepturi eum.
        </p>
        <button className="btn btn-success m-2" onClick={() => {
            this.setState({
                fSize: this.state.fSize + 1
            })
        }}>+</button>
        <button className="btn btn-primary m-2" onClick={() => {
            this.setState({
                fSize: this.state.fSize - 1
            })
        }}>-</button>

      </div>
    );
  }
}
