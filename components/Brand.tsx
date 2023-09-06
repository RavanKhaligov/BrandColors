'use client'
import { colorTypes } from '@/types'
import React, { useEffect } from 'react'
import { getContrast } from '@/utils/helpers'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { setCopied, setIsShowing, setSelectedBrands } from '@/Redux/colorsSlice'
import ClipboardButton from 'react-clipboard.js'
import {BiCopy} from "react-icons/bi"

const Brand : React.FC<{brand:colorTypes}> = ({brand}) => {

  const {selectedBrands} = useAppSelector(state => state.colors)
  const dispatch = useAppDispatch()
  let check = selectedBrands.includes(brand.slug)

  const toggleClicked = () =>{
    if(selectedBrands.includes(brand.slug)){
      dispatch(setSelectedBrands(selectedBrands.filter(slug=> slug !== brand.slug)))
    }else{
      dispatch(setSelectedBrands([...selectedBrands,brand.slug]))
    }
  }

  const setColor = (color:string) =>{
    dispatch(setCopied(color))
    dispatch(setIsShowing(true))
  }
  
  return (
    <div className={`p-4 border transition-all bg-white m-3 ${check ? `scale-[1.01] border-[red]` : 'border-[#ddd]'}`}>
        <h5 
          onClick={toggleClicked} 
          className='text-[18px] mb-3 cursor-pointer select-none'
        >
          {brand.title}
        </h5>
        <div className='flex flex-wrap gap-1'>
            {brand.colors?.map((color,index) =>(
              <ClipboardButton 
                onSuccess={() => setColor(color)} 
                data-clipboard-text = {color} 
                component='span' key={index} 
                style={{color:`#${getContrast(color)}`,backgroundColor:`#${color}`}} 
                className={`cursor-pointer h-[40px] flex items-center justify-center text-sm font-bold -indent-[9999px] w-[110px] ${check && `flex-[auto] hover:indent-0`} hovered`}
              >
                <button className = {`${check && "mr-2" } hidden text-2xl transition-all`}>
                  <BiCopy/>
                </button>
                #{color}
              </ClipboardButton>
            ))}
        </div>
    </div>
  )
}

export default Brand