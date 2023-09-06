'use client'

import { childrenProps } from '@/types'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const Providers: React.FC<childrenProps> = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers