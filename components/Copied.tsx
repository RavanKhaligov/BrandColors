import { copiedTypes } from '@/types'
import { getContrast } from '@/utils/helpers'
import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const Copied : React.FC<copiedTypes> = ({color,isShowing}) => {
  return (
        <Transition
          show = {isShowing}
          as={Fragment}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div 
            className='rounded-md shadow-lg fixed bottom-5 right-5 py-5 px-6 text-base' 
            style={{color:`#${getContrast(color)}`,background:`#${color}`}}
          >
            Copied #{color} to Clipboard
          </div>
        </Transition>
  )
}

export default Copied