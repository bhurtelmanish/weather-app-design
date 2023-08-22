import React from 'react'
import TodayWeatherCard from './TodayWeatherCard'
import cloud from '../images/cloud.png'
import sun from '../images/sun.png'
import rain from '../images/rain.png'
import thunder from '../images/thunder.png'

const TodayForecast = () => {
  return (
    <>
     <div className='todayForecast-overall bg-[var(--componentBackground)] flex flex-col gap-6 px-4 py-6 rounded-[var(--rounded)]'>
       <div className='todayForecast-heading text-sm text-gray-300'>Today's Forecast</div>
       <div className='todayForecast-container flex justify-start gap-20 pl-4 flex-wrap'>
         <TodayWeatherCard time="6 AM" currentWeatherImage={sun} currentTemperature="25°"/>
         <TodayWeatherCard time="9 AM" currentWeatherImage={cloud} currentTemperature="21°"/>
         <TodayWeatherCard time="12 PM" currentWeatherImage={thunder} currentTemperature="32°"/>
         <TodayWeatherCard time="3 PM" currentWeatherImage={rain} currentTemperature="18°"/>
         <TodayWeatherCard time="6 PM" currentWeatherImage={sun} currentTemperature="32°"/>
         <TodayWeatherCard time="9 PM" currentWeatherImage={rain} currentTemperature="23°"/>
       </div>
     </div>
    </>
  )
}

export default TodayForecast