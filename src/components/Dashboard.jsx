import React from 'react'
import logo from '../images/logo.png'

const Dashboard = () => {
  return (
    <>
     <div className='dashboard bg-[var(--componentBackground)] min-h-full w-28 rounded-[var(--rounded)] pt-8'>
        <img src={logo} alt="Logo Image" className='logoImage h-10 w-10 m-auto block '/>
        <ul className='links-container mt-12 flex justify-center items-center gap-7 flex-col text-base'>
            <li className='py-1 w-20 rounded-xl flex justify-center items-center flex-col cursor-pointer hover:bg-[var(--hoverComponent)]'><i className="fa-solid fa-cloud text-xl"></i><p className='dashboard-links'>Weather</p></li>
            <li className='py-1 w-20 rounded-xl flex justify-center items-center flex-col cursor-pointer hover:bg-[var(--hoverComponent)]'><i className="fa-solid fa-city text-xl"></i><p className='dashboard-links'>Cities</p></li>
            <li className='py-1 w-20 rounded-xl flex justify-center items-center flex-col cursor-pointer hover:bg-[var(--hoverComponent)]'><i className="fa-solid fa-map text-xl"></i><p className='dashboard-links'>Map</p></li>
        </ul>
     </div>
    </>
  )
}

export default Dashboard