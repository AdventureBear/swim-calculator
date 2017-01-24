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
                        <tr>
                            <td>100yd</td>
                            <td>1:34</td>
                            <td>1:34</td>
                        </tr>
                        <tr>
                            <td>200yd</td>
                            <td>3:10</td>
                            <td>1:38</td>
                        </tr>
                        <tr>
                            <td>400yd</td>
                            <td>6:30</td>
                            <td>1:42</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

PaceResultRow.propTypes = {

};

export default PaceResultRow