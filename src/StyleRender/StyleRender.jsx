//rcc
import React, { Component } from 'react'

//Cách nhúng file css :
// Dùng cách 1 khi css cho page
import './style.css'; // Cách này css sẽ ảnh hưởng toàn bộ ứng dụng

// Dùng cách 2 khi class có thể bị thay đổi bởi event từ người dùng
import style from './StyleRender.module.css';

// Cách style trực tiếp : Dùng khi giá trị style bị thay đổi bởi event từ người dùng

export default class StyleRender extends Component {

  render() {
    return (
      <div className='container'>
        StyleRender
        
        {/* Cách 1 */}
        <p className='color-red'>Hello Cybersoft</p>

        {/* Cách 2 */}
        <p className={`${style['color-blue']} display-4`} >text blue</p>

        {/* Cách 3 */}
        <p style={{ color:'green', padding:'15px', backgroundColor: 'lightblue' }}>text green</p>
      </div>
    )
  }
}
