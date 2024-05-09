"use client";

import React, { useState } from 'react'
import Seachmanufacture from './Seachmanufacture'

function SearchBar() {

const [ manufacturer, setManufacturer] = useState ("") 

const handleSearch = () => {

}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
            <Seachmanufacture
                manufacturer={manufacturer}
                setManufacturer= {setManufacturer}
            />
      </div>
    </form>
  )
}

export default SearchBar
