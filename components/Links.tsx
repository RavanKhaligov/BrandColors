import {linkProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const Links : React.FC<linkProps> = ({children,url}) => {
  return (
    <Link
      target = '_blank'
      href = {url}
      className='hover:scale-105 text-5xl cursor-pointer'
    >
      {children}
    </Link>
  )
}

export default Links