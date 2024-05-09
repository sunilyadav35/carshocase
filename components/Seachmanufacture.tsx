"use client"
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image  from 'next/image'
import { SearchManufacturerPorps } from '@/types'
import React from 'react'

function Seachmanufacture({manufacturer,setManufacturer}:SearchManufacturerPorps) {

const [query, setQuery] = useState("")

  return (
    <div className='search-manufacturer'>
      <Combobox>
         <div className="relative w-full">
          <Combobox.Button className='absolute top-[140px]'>
          <Image
               src='car-logo.svg'
               width={20}
               height={20}
               className='ml-4'
               alt='car logo'
            />
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input" 
            placeholder='volkswagen'
            displayValue={(manufacturer:string) => manufacturer}
            onChange={(e) => setQuery( e.target.value)}
          />
          <Transition 
            as={Fragment}
            leave='transition ease-in-duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >

          </Transition>
         </div>
      </Combobox>
    </div>
  )
}

export default Seachmanufacture
