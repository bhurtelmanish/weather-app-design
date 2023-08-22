import React from 'react'
import WeekWeatherCard from './WeekWeatherCard'
import cloud from '../images/cloud.png'
import sun from '../images/sun.png'
import rain from '../images/rain.png'
import thunder from '../images/thunder.png'
import '../App.css'

const WeekForecast = () => {
  return (
    <>
     <div className='week-forecast bg-[var(--componentBackground)] rounded-[var(--rounded)] px-8 py-8 gap-8  flex flex-col'>
       <div>7-day Forecast</div>
       <div className='flex flex-col gap-8'>
          <WeekWeatherCard date="Today" todayWeatherImage={sun} weather="Sunny"/>
          <WeekWeatherCard date="Mon" todayWeatherImage={cloud} weather="Cloudy"/>
          <WeekWeatherCard date="Tue" todayWeatherImage={sun} weather="Sunny"/>
          <WeekWeatherCard date="Wed" todayWeatherImage={rain} weather="Rainy"/>
          <WeekWeatherCard date="Thu" todayWeatherImage={thunder} weather="Storm"/>
          <WeekWeatherCard date="Fri" todayWeatherImage={rain} weather="Rainy"/>
          <WeekWeatherCard date="Sat" todayWeatherImage={sun} weather="Sunny"/>
       </div>
     </div>
    </>
  )
}

export default WeekForecast