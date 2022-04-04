import React from 'react'
import AccountPerformance from './AccountPerformance'
import './AccPerAndHourly.css'
import Hourly from './Hourly'
export default function AccPerAndHourly() {
  return (
    <div className='APAH'>
      <AccountPerformance/>
      <Hourly/>
    </div>
  )
}
