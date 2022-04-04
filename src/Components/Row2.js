import React from 'react'
import AccountPerformance from './AccountPerformance'
import AccPerAndHourly from './AccPerAndHourly'
import Hourly from './Hourly'
import Module from './Module'
import PerAndEntry from './PerAndEntry'
import'./Row2.css'
import Table from './Table'

export default function Row2() {
  return (
    <div className='div'>
       <Table/>
       <AccPerAndHourly/>
    </div>
  )
}
