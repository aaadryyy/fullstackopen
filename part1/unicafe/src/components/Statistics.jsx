import React from 'react'
import Statistic from './Statistic'
const Statistics = ({stats}) => {
    if(stats.total === 0) {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    } else {
        return(
            <>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <tr>
                            <Statistic text={'good'} value={stats.good}/>
                        </tr>
                        <tr>
                            <Statistic text={'neutral'} value={stats.neutral}/>
                        </tr>
                        <tr>
                            <Statistic text={'bad'} value={stats.bad}/>
                        </tr>
                        <tr>
                            <Statistic text={'all'} value={stats.total}/>
                        </tr>
                        <tr>
                            <Statistic text={'average'} value={stats.average}/>
                        </tr>
                        <tr>
                            <Statistic text={'positive'} value={stats.positivePrct}/>
                        </tr>
                    </tbody>
                </table>

                
            </>
        )
    }
}

export default Statistics