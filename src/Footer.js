import React, { Component, PropTypes } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-footer'>
                <p>Presented By: <a href="http://www.steelcityendurance.com/">Steel City Endurance Coaching</a></p>
            </div>
        )
    }
}

Footer.propTypes = {

};

export default Footer