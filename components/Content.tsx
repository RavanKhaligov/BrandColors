'use client'
import React from 'react'
import { Download, InfinitiveScroll, Search } from '.'
import { useAppSelector } from '@/Redux/hooks';


const Content: React.FC = () => {
  const {items,brands} = useAppSelector(state => state.colors)

  return (
    <main className='flex-1 overflow-auto bg-[#f8f8f8]' id='scrollable'>
      <header className='border-b border-b-[#ccc] h-[60px] flex sticky z-[99999] top-0 bg-[#fff] items-center'>
        <Search />
        <Download/>
      </header>
      <InfinitiveScroll items = {items} brands={brands}/>
    </main>
  );
};

export default Content;
