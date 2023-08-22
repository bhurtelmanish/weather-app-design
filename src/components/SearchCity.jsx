import React from 'react'
import '../App.css'

const SearchCity = (props) => {
  const getData = (e) =>{
    if(e.key === "Enter"){
      props.handleSearchChange(e);
    }
  }
  return (
    <>
     <div className='h-fit relative'>
       <input onKeyPress={getData}  type="search" name="search" className='h-12 w-full px-4 bg-[var(--componentBackground)] outline-none border-none rounded-[var(--rounded)] text-sm' placeholder='Enter city here...'/>
       <i className="fa-solid fa-bars-staggered text-lg absolute top-2 right-4 cursor-pointer"></i>
     </div>
    </>
  )
}

export default SearchCity