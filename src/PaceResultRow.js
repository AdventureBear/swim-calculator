import React, { Component, PropTypes } from 'react'
import './PaceResultRow.css'
import convert from 'convert-seconds'

class PaceResultRow extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const duration = convert(this.props.row.duration)
        const pace = convert(this.props.row.duration/this.props.row.distance)
        return (
                <tr className='component-paceresultrow'>
                    <td>{this.props.row.distance}</td>
                    <td>{duration.minutes}:{duration.seconds}</td>
                    <td>{pace.minutes}:{pace.seconds}</td>
                </tr>
        )
    }
}

PaceResultRow.propTypes = {
    paces: React.PropTypes.array
};

export default PaceResultRow