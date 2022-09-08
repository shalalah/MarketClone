import React from 'react'
import MoreListIcon from '../assets/Header/more_list_icon.svg';
import '../css/category.css';

export default function Category() {
  return (
    <div className='Category'>
        <section className="nav_wrap">
        <div className="category_wrap">
          <div className="more_category">
            <img src={MoreListIcon} alt="더많은리스트" />
            <span className="category">카테고리</span>
          </div>
          <ul className="list_wrap">
            <li className="new">
              <span>신상품</span>
            </li>
            <li className="best">
              <span>베스트</span>
            </li>
            <li className="low_price">
              <span>알뜰쇼핑</span>
            </li>
            <li className="benefit">
              <span>특가/혜택</span>
            </li>
          </ul>
          <div className="notice">
            <div className="notice_detail">
              <span className="notice_text">샛별・낮</span>&nbsp;배송안내
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
