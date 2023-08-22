import React from 'react'

const TodayWeatherCard = (props) => {
  return (
    <div className='forecast-card flex flex-col justify-between items-center cursor-pointer gap-3'>
       <p className='text-sm text-gray-300'>{props.time}</p>
       <img src={props.currentWeatherImage} alt="Current Weather Image" className='h-14'/>
       <p className='font-bold text-xl'>{props.currentTemperature}</p>
    </div>
  )
}

export default TodayWeatherCard