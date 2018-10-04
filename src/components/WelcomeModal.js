import React, {Component} from 'react'
import stylesheet from '../stylesheetformodal.css'

export default class WelcomeModal extends Component{

  render(){
    return(
      <div className="welcome-modal">
      <label>Ahoy Captain! Welcome to our trip ship!</label>
      <input type="text" className="name-input" placeholder="enter your name"/><br/>
      <input type="text" className="email-input" placeholder="enter your email"/>
      <button type="button" className="submit-btn">Submit</button>
      </div>
    )
  }

}
