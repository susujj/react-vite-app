
import React from 'react'

class Clock extends React.Component <any, any>{
    timerID;
    // cState: { date: Date; };
    constructor(props) {
      super(props);
      this.timerID = -1;
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default Clock
