import React from 'react';
// import styled from "styled-components";
import Item from '../component/Item';
import MainTopBanner from '../component/MainTopBanner';

export default function Main() {
  return (
    <div className='Main-container'>
      <MainTopBanner />
      <Item />
    </div>
  )
};
