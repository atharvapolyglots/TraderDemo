import React from 'react'
import HeaderVerticle from './HeaderVerticle'
import'./HeaderVerticle.css'
import Main from './Main'
import Module from './Module'
import './Row.css'

export default function Row() {
  return (
    <div className='main'>
      <HeaderVerticle/>
      <Main/>
     

    </div>
  )
}
