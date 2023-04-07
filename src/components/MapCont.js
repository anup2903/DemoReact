import React from 'react'
import Maps from './Maps'
import Search from './Search'

const MapCont = () => {
  return (
    <div className='flex  w-full h-full'>
        <div className='w-[50vw] h-full'>
            <Maps/>
        </div>
        <div>
            <Search/>
        </div>
    </div>
  )
}

export default MapCont