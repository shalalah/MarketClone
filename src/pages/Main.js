import React from 'react';
import Item from '../component/Item';
import MainTopBanner from '../component/MainTopBanner';
import { dummy } from '../dummy';

export default function Main() {
  return (
    <div className='Main-container'>
      <MainTopBanner />
      {dummy.map((item,index) => (
      <Item key={item.id} 
      img={item.src} alt={item.alt} title={item.title} discount={item.discount} sale_price={item.sale_price}/>
      ))}
    </div>
  )
}
