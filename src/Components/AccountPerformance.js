import React from 'react'
import './AccountPerformance.css'
export default function AccountPerformance() {
    return (
        <div className='account'>
            <div>
                Account Performance
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>
                    Avg. Return<br/><br/>$54.75
                </p>
                <p>
                    Avg. Return %<br/><br/>2.25%
                </p>
                <p>
                    Winning Rate %<br/><br/>75.5%
                </p>
            </div>
            <div style={{textAlign: 'center'}}>
            <img style={{width: '175px',height: '65px'}} src='graph.png'/>
           </div>
        </div>
    )
}
