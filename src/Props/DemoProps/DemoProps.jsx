//rcc
import React, { Component } from "react";
import BaiViet from "./BaiViet";
import Card from "./Card";

const danhSachBaiViet = [
  { tieuDe: "tiêu đề 1", noiDung: "nội dung bài viết 1" },
  { tieuDe: "tiêu đề 2", noiDung: "nội dung bài viết 2" },
  { tieuDe: "tiêu đề 3", noiDung: "nội dung bài viết 3" },
];

export default class DemoProps extends Component {
  render() {
    const tenSP = "Product 1";
    const gia = "1000";
    const baiViet = {
      tieuDe: "Làm sao để giàu như con người ta",
      noiDung:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullaillo nam odit nihil unde iste ea officiis obcaecati assumenda dolorepossimus culpa maxime",
    };

    return (
      <div className="container" style={{ marginBottom: 500 }}>
        <div className="w-25 mt-4">
          <Card tenSP={tenSP} gia={gia} />
        </div>

        <div className="w-25 mt-4">
          <Card tenSP={"Product 2"} gia={2000} />
        </div>
        <hr />
        <h3 className="mt-5">Demo bài viết</h3>
        {danhSachBaiViet.map((baiVietApi, index) => {
          return (
            <div key={index}>
              <BaiViet obBaiViet={baiVietApi} />
            </div>
          );
        })}
      </div>
    );
  }
}
