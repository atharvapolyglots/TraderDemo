import React from 'react'
import './Performance.css'
export default function Performance() {
    return (
        <div className='per'>
            <div>
                Performance
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h4>Performance</h4>
                <h1 style={{ paddingLeft: '55px' }}>75%</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='piechart'>
                    April <hr />
                   <p  className='piechartMonth'>75%</p>
                </div>
                <div  className='piechart'>
                    Friday <hr />
                <p className='piechartDay'>24%</p>
                </div>
                <div className='piechart'>
                    Buy <hr />
                <p className='piechartBuy'>83%</p>
                </div>
                <div className='piechart'>
                    Sell <hr />
                <p  className='piechartSell'>17%</p>
                </div>
            </div>
        </div>
    )
}
