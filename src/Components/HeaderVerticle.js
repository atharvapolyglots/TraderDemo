import React from 'react'
import './HeaderVerticle.css'
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
  import {faChartPie} from '@fortawesome/free-solid-svg-icons'
  import {faBars} from '@fortawesome/free-solid-svg-icons'
  import {faGear} from '@fortawesome/free-solid-svg-icons'
  import {faSliders} from '@fortawesome/free-solid-svg-icons'
  import {faPhone} from '@fortawesome/free-solid-svg-icons'
  import {faCircleUser} from '@fortawesome/free-solid-svg-icons'

export default function HeaderVerticle() {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li style={{paddingTop: '25px'}}>
                    <FontAwesomeIcon icon={faChartPie} />
                     </li>
                    <li>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faSliders} />
                    </li>
                    <li style={{paddingTop: '255px'}}>
                    <FontAwesomeIcon icon={faBars} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faGear}/>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faPhone} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleUser} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
