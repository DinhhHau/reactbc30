import React, { Component } from "react";

export default class HandleEven extends Component {

  handleClick = (e) => {
    alert("hello cybersoft");
  };

  showMess = (name) => {
    // debugger;
    alert('hello ' + name)
  }
  
  // render ra giao diện chỉ render primative value : string, boolean, number ,jsx (thẻ html của react) chứ ko in ra giao diện đc object với arr
  render() {
    return (
      <div className="container">
        <h3>Handle Event click</h3>
        <button className="btn btn-danger" onClick={(e) => {
            // alert("hello cybersoft");
            //Gọi hàm khác
            this.showMess('Đình Hậu')

          }}>Click</button>
          
        <button className="btn btn-success ms-2" onClick={this.handleClick}>Click</button>

        <h3>Handle event change</h3>
        <input className="form-control w-25" onChange={(e) => {
            //e.target : chính là thẻ input
            var tagInput = e.target;
            console.log('Value',tagInput.value);
        }}  />
      </div>
    );
  }
}
