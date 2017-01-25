import React, { Component, PropTypes } from 'react'
import './PaceResults.css'
import PaceResultRow from './PaceResultRow'

class PaceResults extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var rows = []
        this.props.paces.forEach(function(row){
        rows.push( <PaceResultRow key = {row.distance} row = {row} />)
        })
        return (
            <div className='component-paceresults'>
                <table>
                    <thead>
                    <tr>
                        <th>Distance</th>
                        <th>Time</th>
                        <th>Pace</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}

PaceResults.propTypes = {

};

export default PaceResults