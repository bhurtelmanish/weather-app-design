import React from 'react'
import '../App.css'

const WeekWeatherCard = (props) => {
  return (
    <> 
     <div className='flex items-center justify-evenly gap-40'>
        <p className='text-gray-300 text-sm ml-6 '>{props.date}</p>
        <div className='flex items-center justify-center mr-10 gap-2'>
          <img src={props.todayWeatherImage} alt="Weekly Weather Image" className='h-10 w-10'/>
          <p>{props.weather}</p>
        </div>
     </div>
    </>
  )
}

export default WeekWeatherCard