import React from 'react'

class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  timer(){
    if(this.state.secondsLeft == 0){
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render(){
    return (
      <div>{this.timer()}</div>
    )
  }
}
export default Bomb
