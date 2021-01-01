import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: props.initialCount
        }
    }
    render(){
        console.log('Render Class Constructor')
        return(
           <ThemeContext.Consumer>
               {style => (
                    <div>
                    <button style={style} className="btn" onClick={() => this.changeCount(1)}>+</button>
                    {/* Every Component has a this.props that we pass from App.js */}
                    {/* <span>{this.props.initialCount}</span> */}
                    {/* If you set a state you pass the props to state to the span */}
                    <span>{this.state.count}</span>
                    <button style={style} className="btn" onClick={() => this.changeCount(-1)} >-</button>
                    </div>
                )}  
           </ThemeContext.Consumer>
        )
    }

    changeCount(amount){
        this.setState(prevState => {
            return { count: prevState.count + amount }
        })
    }
    
}