import React from 'react'
import '../App.css'

const WeatherData = (props) => {
  const kelvin = props.weatherData?.main.temp;
  const celcius = kelvin - 273.15;
  return (
    <>
     <div className='weather-data flex justify-between items-center px-16'>
        <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-bold cursor-pointer'>{props.weatherData?.name}</h1>
              <p className='text-gray-300 text-sm'>Type: Cloudy</p>
            </div>
            <div className='font-bold text-6xl cursor-pointer'>{Math.floor(celcius)} degree celcius</div>
        </div>
        
        <img src={`http://openweathermap.org/img/w/${props.weatherData?.weather[0].icon}.png`} alt="Weather Image" className='h-32 weather-data-image'/>
     </div>
    </>
  )
}

export default WeatherData