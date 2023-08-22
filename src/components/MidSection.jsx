import React , {useState , useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import '../index.css'
import SearchCity from './SearchCity'
import WeatherData from './WeatherData'
import TodayForecast from './TodayForecast'
import AirCondition from './/AirCondition'

const MidSection = () => {
  const [weatherData , setweatherData] = useState();
  const [city , setcity] = useState("Pokhara");
  const API_KEY = "635fe4af6579b7d25efcd816868f2dca";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  useEffect(()=>{
    axios.get(url)
    .then((res)=>{
      // console.log(res.data);
      setweatherData(res.data);
      // setcity("");
    })
    .catch((err)=>{console.error(err)})
  } , [city])

  const handleSearchChange = (e) =>{
    // console.log(e.target.value);
    setcity(e.target.value);
  }
  return (
    <> 
        <div className='h-auto w-10/12 flex flex-col gap-4 sm:w-11/12'>
           <SearchCity handleSearchChange={handleSearchChange}/>
           <WeatherData weatherData={weatherData}/>
           <TodayForecast />
           <AirCondition />
        </div>
    </>
  )
}

export default MidSection