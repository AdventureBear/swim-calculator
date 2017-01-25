import React, { Component, PropTypes } from 'react'
import './PaceResults.css'
import PaceResultRow from './PaceResultRow'

class PaceResults extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-paceresults'>

                <PaceResultRow paces = {this.props.paces} />


            </div>
        )
    }
}

PaceResults.propTypes = {

};

export default PaceResults