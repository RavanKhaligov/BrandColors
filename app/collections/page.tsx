'use client'
import { setSelectedBrands } from '@/Redux/colorsSlice'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { Download, InfinitiveScroll, MainComponent } from '@/components'
import { colorTypes } from '@/types'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Collections: React.FC = () => {

  const {brands,selectedBrands} = useAppSelector(state=> state.colors)
  const dispatch = useAppDispatch()
  const [items,setItems] = useState<colorTypes[]>([])
  let neww : colorTypes[] = []

    const resetSelectedBrands = () =>{
        if( selectedBrands.length === 0 ){
            redirect('/')
        }
        console.log(selectedBrands);
    }
  useEffect(() =>{
    resetSelectedBrands()
  },[])
  useEffect(() =>{
    selectedBrands.forEach(sbrand =>{
      let findedBrand : colorTypes = brands.find(brand => brand.slug === sbrand) || brands[0]
      neww = findedBrand && [...neww,findedBrand]
    })

    setItems(neww)

    resetSelectedBrands()

    dispatch(setSelectedBrands(selectedBrands))
  },[selectedBrands])

  const clearSelectedBrands = () =>{
    dispatch(setSelectedBrands([]))
  }
  return (
    <>
      <MainComponent/>
      <main 
        className='flex-1 overflow-auto bg-[#f8f8f8]'
        id='scrollable'
      >
        <header className='border-b border-b-[#ccc] h-[60px] z-[99999] justify-between flex sticky top-0 bg-[#fff] items-center'>
          <Link 
            href='/' 
            onClick={clearSelectedBrands} 
            className='flex items-center gap-1 ml-2'
          >
            <AiOutlineArrowLeft/>
            <p>All Brands</p>
          </Link>
          <Download/>
        </header>
        <InfinitiveScroll 
          items={items} 
          brands={items}
        />
    </main>
    </>
  )
}

export default Collections