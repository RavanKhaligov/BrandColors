import { childrenProps } from '@/types'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Selected Brands',
    description: 'Selected Brands Collections',
    icons:'../../public/logo.png'
  }

const CollectionsLayout : React.FC<childrenProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default CollectionsLayout