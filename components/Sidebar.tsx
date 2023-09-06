'use client'
import { Transition,Dialog } from '@headlessui/react'
import Image from 'next/image'
import {Fragment,useState} from 'react'
import {MdClear} from "react-icons/md"
import {Links } from '.'
import {AiFillInstagram, AiFillGithub,AiFillFacebook,AiFillLinkedin} from "react-icons/ai"
import Link from 'next/link'

const Sidebar : React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const toggleModal = () =>{
      setIsOpen(!isOpen)
    }

  return (
    <>
        <aside className='lg:w-[320px] max-md:hidden md:w-[250px] border-r border-r-[#ccc] p-6'>
            <div className='mb-6 flex items-center gap-2'>
                <Image
                  className='inline'
                  src='/logo.png'
                  alt='logo'
                  width={40}
                  height={40}
                />
                <Link 
                  href='/' 
                  className='lg:text-3xl hover:text-blue-400 md:text-2xl cursor-pointer'
                >
                  Brand <span>Colors</span>
                </Link>
            </div>
            <div className='text-[18px] leading-7 text-[#999]'>
                The biggest collection of official brand color codes around. Created by Ravan Khaligov.
            </div>
            <nav className='mb-6'>
                <ul>
                    <li>
                      <button 
                        className='block font-bold text-[#333] cursor-pointer hover:text-[#0099e5] transition-all'
                        onClick={toggleModal}
                      >
                        About BrandColors
                      </button>
                    </li>
                </ul>
            </nav>
            <hr />
            <div>
              <p className='mt-3'>Brand<b>Colors</b> + DesignBombs</p>
              <p className='mt-3 mb-5 hover:text-blue-500 text-sm text-gray-500'>Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress</p>
            </div>
            <hr />
            <div className='flex justify-center'>
              <div className='flex fixed bottom-0'>
                <Links
                  url = "https://www.instagram.com/ravankhaligov"
                  children = {<AiFillInstagram/>}
                />
                <Links
                  url = "https://m.facebook.com/RavanKhaligov"
                  children ={<AiFillFacebook/>} 
                />
                <Links
                  url = "https://www.linkedin.com/in/ravan-khaligov-864714227/"
                  children = {<AiFillLinkedin/>}
                />
                <Links
                  url = "https://github.com/RavanKhaligov"
                  children = {<AiFillGithub/>}
                />
              </div>
            </div>
        </aside>
        <Transition 
          appear 
          show={isOpen} 
          as={Fragment}
        >
        <Dialog 
          as="div" 
          className="relative z-10" 
          onClose={toggleModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    About BrandColors
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>
                        BrandColors was created by <b>Ravan Khaligov</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.
                    </p>
                    <p>It's been featured by Smashing Magazine,CSS-Tricks,Web Design Depot Tuts+ and over <b>2 million pageviews</b>.There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute right-5 top-5 text-2xl"
                      onClick={toggleModal}
                    >
                      <MdClear/>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Sidebar