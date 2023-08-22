import React from 'react'
import './App.css'
import './index.css'
import Dashboard from './components/Dashboard'
import WeekForecast from './components/WeekForecast'
import MidSection from './components/MidSection'

const App = () => {
  return (
    <>
    <div className='whole-container bg-[var(--bodyBackground)] min-h-screen min-w-screen text-[var(--textColor)] px-5 py-5 flex justify-start gap-4'>

       <Dashboard />
       <MidSection />
       {/* <WeekForecast />  */}
       
    </div>
    </>
  )
}

export default App