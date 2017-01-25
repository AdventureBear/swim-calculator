import React, { Component, PropTypes } from 'react'
import './PaceResultRow.css'

class PaceResultRow extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
                <tr className='component-paceresultrow'>
                    <td>{this.props.row.distance}</td>
                    <td>{this.props.row.duration}</td>
                    <td>{this.props.row.pace}</td>
                </tr>
        )
    }
}

PaceResultRow.propTypes = {
    paces: React.PropTypes.array
};

export default PaceResultRow