import React, { Component } from 'react';

class Time extends Component {

    constructor(){
        super()
        this.state={time: new Date()}
    }
    currentTime()
    {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount()
    {
        setInterval(()=> this.currentTime(), 1000)
    }
    render() {
        return (
            <h2> Guatemala .
                {this.state.time.toLocaleTimeString()}
            </h2>

        )
    }


}
export default Time;