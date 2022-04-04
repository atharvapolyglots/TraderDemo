import React from 'react'
import EntryPrice from './EntryPrice'
import Performance from './Performance'
import './PerAndEntry.css'
export default function PerAndEntry() {
  return (
    <div className='perandentry'>
      <Performance/>
      <EntryPrice/>
    </div>
  )
}
