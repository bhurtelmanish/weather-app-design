import React from 'react'
import '../App.css'

const AirCondition = () => {
  return (
    <>
     <div className='air-condition-container w-full bg-[var(--componentBackground)] rounded-[var(--rounded)] px-4 py-6 gap-5 flex flex-col'>
        <div className='air-condition-heading text-sm text-gray-300'>Air Conditioning</div>
          <div className='flex flex-col gap-4 ml-6'>
           <div className='flex gap-5'>
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-md text-gray-300'>Real Feel</p>
                <p className='font-bold text-2xl'>25°</p>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-md text-gray-300'>Chance of Rain</p>
                <p className='font-bold text-2xl'>0%</p>
            </div>
            </div>
            
            <div className='flex gap-5'>
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-md text-gray-300'>Wind</p>
                <p className='font-bold text-2xl'>0.2km/hr </p>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-md text-gray-300'>UV Index</p>
                <p className='font-bold text-2xl'>3</p>
            </div>
            </div>
          </div>
     </div>
    </>
  )
}

export default AirCondition