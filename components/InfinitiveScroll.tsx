'use client'
import React, { useEffect, useState } from 'react'
import { Brand } from '.'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { setBrands, setItems } from '@/Redux/colorsSlice'
import { colorTypes } from '@/types'

const InfinitiveScroll : React.FC<{items: colorTypes[],brands:colorTypes[]}> = ({items,brands}) => {

    const {brandsArray,search} = useAppSelector((state) => state.colors)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [open,setOpen] = useState<boolean>(true)
  
    const dispatch = useAppDispatch()
    useEffect(() =>{
      dispatch(setBrands(brandsArray))
    },[])

    const fetchMoreColor = () =>{
      dispatch(setItems([...items,...brands.slice(items.length,items.length + 10)]) )  
    }

    useEffect(() =>{
      if(items.length>=brands.length){
        setHasMore(false)
      }else if(items.length === 0){
        setOpen(false)
      }else{
        setOpen(true)
      }
    },[items])

  return (
    <>
        {open 
        ?<section className='p-6'>
        <InfiniteScroll
            scrollThreshold={.7}
            dataLength={items.length}
            next={fetchMoreColor}
            hasMore = {hasMore}
            loader = {<p className='m-3'>Loading</p>}
            scrollableTarget = 'scrollable'
        >
            {items.map((brand,index) => (
            <Brand 
              key={index} 
              brand={brand}
            />
            ))}
        </InfiniteScroll>
        </section>
        : <p className='p-3 m-3'>There is no color search for <b className='text-red-500'>{search}.</b></p>}
    </>
  )
}

export default InfinitiveScroll