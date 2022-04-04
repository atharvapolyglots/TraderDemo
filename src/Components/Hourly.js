import React from 'react'
import './Hourly.css'
export default function Hourly() {
    return (
        <div className='hourly'>
            <div style={{ paddingRight: '235px' }}>
                Hourly
            </div>
            <hr />
            <div>
                9:00-10:00  ($121)
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '15%' }}>
                    </div>
                </div>
            </div>
            <div className='progressX'>
                10:00-12:00  ($400)
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                    </div>
                </div>
            </div>
            <div className='progressX'>
                12:00-2:00  ($255)
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '51%' }}>
                    </div>
                </div>
            </div>
            <div className='progressX'>
                2:00-3:00  ($450)
                <div className="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated  bg-success" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
