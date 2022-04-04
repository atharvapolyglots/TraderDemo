import React from 'react'
import './Module.css'

export default function Module() {
  return (
    <div style={{padding: '5px'}}>
      <div className='box'>
          <div className='data'>
          Accumilative Return
          <br/><br/>
          $ 14000
          </div>
          <div>
          <img style={{width: '95px',height: '65px'}} src='graph.png'/>
          </div>
      </div>
    </div>
  )
}