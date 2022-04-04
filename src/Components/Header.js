import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <nav className='li'>
          <ul>
              {/* <li>
                  <img />
              </li> */}
             <li>
             <img className='image' src='https://tradersync.com/wp-content/uploads/2019/06/logo.png' />
             </li>
              <li>
                  <button>Symbol ></button>
              </li>
              <li>
                 <button>Setup ></button>
              </li>
              <li>
                 <button>Sides ></button>
              </li>
              <li>
                 <button>Mistakes ></button>
              </li>
              <li>
                 <button>Status ></button>
              </li>
          </ul>
      </nav>
    </div>
  )
}
