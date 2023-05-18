// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHide: true, isLastNameHide: true}

  onFirstName = () => {
    this.setState(prevState => ({
      isFirstNameHide: prevState.isFirstNameHide === false,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      isLastNameHide: prevState.isLastNameHide === false,
    }))
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state

    return (
      <div className="show-hide-bg">
        <h1 className="heading"> Show/Hide </h1>

        <div className="button-items">
          <div>
            <button
              className="buttons"
              type="button"
              onClick={this.onFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameHide ? null : <p className="hiding-name"> Joe </p>}
          </div>

          <div>
            <button className="buttons" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isLastNameHide ? null : <p className="hiding-name"> Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
