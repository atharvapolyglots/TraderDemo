import React from 'react'
import Column2 from './Column2'
import Column1 from './Column1'
import './Main.css'
import Module from './Module'
import Row1 from './Row1'
import Row2 from './Row2'

export default function Main() {
  return (
    <div className='main'>
      <Column1/>
      <Column2/>
    </div>
  )
}
