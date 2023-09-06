"use client"
import { setSearch } from '@/Redux/colorsSlice'
import { useAppDispatch } from '@/Redux/hooks'
import React from 'react'
import {GrSearch} from "react-icons/gr"
const Search : React.FC = () => {

  const dispatch = useAppDispatch()
  
  return (
    <div className='flex-1 relative'>
        <div className='absolute top-0 left-5 h-full flex items-center'>
            <GrSearch className='w-[20px] h-[20px] cursor-pointer'/>
        </div>
        <input 
          type="text" 
          onChange={e => dispatch(setSearch(e.target.value.trim().toLowerCase()))} 
          placeholder='Search Brands' 
          className='h-full w-full text-base px-5 pl-16'
        />
    </div>
  )
}

export default Search