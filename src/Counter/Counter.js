import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    state = {
        counter: 0,
        style: {
        backgroundColor: 'blue'
        }
        
    }
    clickAdd = () => {
        this.setState({counter: this.state.counter+1});
    }

    clickRemove = () => {
        if (this.state.counter > 0)
        this.setState({counter: this.state.counter-1});
    }

    clickReset = () => {
        this.setState({counter: 0});
    }
      
    render() {
        return (
            
        <div className={this.state.counter % 2 ===0 ? "counter even" : "counter odd" }>{this.state.counter}
        <div className='buttons'>
         <button onClick={this.clickAdd}>Add one</button>
         <button onClick={this.clickRemove}>Remove one</button>
         <button onClick={this.clickReset}>Reset</button>
        </div>
        </div>
        );
    }
}

export default Counter;