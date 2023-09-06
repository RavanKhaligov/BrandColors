'use client'
import { Content, MainComponent} from '@/components'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import {setIsShowing, setItems } from '@/Redux/colorsSlice'


const HomePage : React.FC = () => {

  const {brands,isShowing,search} = useAppSelector(state => state.colors)
  const dispatch = useAppDispatch()

  useEffect(() =>{
    if(isShowing){
      setTimeout(() =>{
        dispatch(setIsShowing(false))
      },750)
    }
  },[isShowing])

  useEffect(() =>{
    dispatch(setItems(search 
      ? brands.filter(brand => brand.title.toLowerCase().includes(search)).slice(0,10) 
      : brands.slice(0,10)))
  },[search])

  return (
    <>
      <MainComponent/>
      <Content/>
  </>
  )
}

export default HomePage
