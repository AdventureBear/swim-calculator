import React, { Component, PropTypes } from 'react'
import './PaceResultRow.css'
import convert from 'convert-seconds'

class PaceResultRow extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const duration = convert(this.props.row.duration)
        console.log(this.props.row.duration,this.props.row.distance)
        let pace = convert(this.props.row.duration/(this.props.row.distance)*100)
        console.log("Pace: ", pace)
        //console.log(typeof(this.props.row.duration), typeof(this.props.row.distance))
        //console.log("Converting: ", convert(97.4))
        return (
                <tr className='component-paceresultrow'>
                    <td>{this.props.row.distance}</td>
                    <td>{str_pad(duration.minutes)}:{str_pad(duration.seconds)}</td>
                    <td>{str_pad(pace.minutes)}:{str_pad(pace.seconds)}</td>
                </tr>
        )
    }
}

function str_pad(n) {
    return String("00" + n).slice(-2);
}

PaceResultRow.propTypes = {
    paces: React.PropTypes.array
};

export default PaceResultRow