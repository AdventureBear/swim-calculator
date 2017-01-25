import React, { Component, PropTypes } from 'react'
import './PaceResultRow.css'

class PaceResultRow extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-paceresultrow'>
                <table>
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Time</th>
                            <th>Pace</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.paces.map((row, i)=> {
                            return (
                                <tr>
                                    <td>{row.distance}</td>
                                    <td>{row.duration}</td>
                                    <td>{row.pace}</td>
                                </tr>
                            )
                          })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

PaceResultRow.propTypes = {
    paces: React.PropTypes.array
};

export default PaceResultRow