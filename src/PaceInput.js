import React, { Component, PropTypes } from 'react'
import './PaceInput.css'

class PaceInput extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-paceinput'>
                <span>Best 100:</span><input type="text" size="20" label="minutes"  placeholder = "00"/> <input  type="text" size="20" label="seconds" placeholder ="00" />
                <input type="submit" value="Submit" />
            </div>
        )
    }
}

PaceInput.propTypes = {

};

export default PaceInput