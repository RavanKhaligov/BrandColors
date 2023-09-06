'use client'
import { useAppSelector } from '@/Redux/hooks'
import React from 'react'
import { Copied, Sidebar } from '.'

const MainComponent: React.FC = () => {

    const {copied,isShowing} = useAppSelector(state => state.colors)
    
  return (
    <>
      <Copied 
        color = {copied} 
        isShowing = {isShowing}
      />
      <Sidebar/>
    </>
  )
}

export default MainComponent