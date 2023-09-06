'use client'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import React, { useEffect, useState } from 'react'
import {BiSolidDownload,BiLinkAlt} from "react-icons/bi"
import { MdClear } from 'react-icons/md'
import { setSelectedBrands } from '@/Redux/colorsSlice'
import Link from 'next/link'

const Download = () => {

    const dispatch = useAppDispatch()
    const [downloadUrl,setDownloadUrl] = useState<string>('')
    const {selectedBrands,items} = useAppSelector(state => state.colors)
    const [type,setType] = useState<string>('css')

    useEffect(() =>{
        if(selectedBrands.length >0){
            let output = ''
            selectedBrands.map(slug =>{
                let brand = items.find(brand => brand.slug ===slug)
                brand?.colors.map((color,key) =>{
                    switch(type){
                        case 'css':
                            output += `--${slug}-${key}: #${color};\n`
                            break
                        case 'scss':
                            output += `\$${slug}-${key}: #${color};\n`
                            break
                        case 'less':
                            output += `@c-${slug}-${key}: #${color};\n`
                            break        
                    }
                })
            })
            const blob = new Blob([output]  )
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)

            return () =>{
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    },[type,selectedBrands])

  return (
    <div className={`${selectedBrands.length === 0 && 'hidden'} flex items-center gap-2 pr-6`}>
        <div className='flex items-center gap-1'>
            <button className='flex items-center gap-2'>
                <a
                    download={`style.${type}`}
                    href={downloadUrl}
                >
                    <BiSolidDownload className='text-2xl'/>
                </a>
                <select 
                    onChange={e => setType(e.target.value)} 
                    className='h-8 px-3 border border-[#ddd] appearance-none bg-[#eee] rounded-md'
                >
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
            </button>
            <Link 
                href='/collections' 
                className='text-2xl'
            >
                <BiLinkAlt/>       
            </Link>
            <button  onClick={() => dispatch(setSelectedBrands([]))}>
                <MdClear className='text-2xl'/>
            </button>
        </div>
        <div className='text-sm'>
        {selectedBrands.length} brands collected
        </div>

    </div>
  )
}

export default Download