import React, { Component, PropTypes } from 'react'
import './PaceInput.css'


class PaceInput extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: '',
            pace: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});


    }
    handleSubmit(event) {
        alert(this.paceInput.value)
        //alert('A time was submitted: ' + this.state.value);
        event.preventDefault()
        this.props.calculate(this.paceInput.value)
    }
    render(){
        return (
        <form className='component-paceinput' onSubmit={this.handleSubmit}>
            <label>
                Best 100 Time:


                <input
                  type="text"
                  ref={(input) => { this.paceInput = input; }}
                  placeholder = "1m 32s"
                  //* value={this.state.value}
                  onChange={this.handleChange} />
            </label>
            <input type="submit" value="Calculate" />
        </form>

        )
    }
}

PaceInput.propTypes = {
    calculate: React.PropTypes.func
};

export default PaceInput