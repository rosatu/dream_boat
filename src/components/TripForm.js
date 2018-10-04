import React, {Component} from "react"
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class TripForm extends Component{

  constructor(props){
    super(props)
    this.state={
      startDate:moment(),
      endDate:moment()
    }
  }

  handleStart = (date) => {
    this.setState({
      startDate: date
    })
  }

  handleEnd = (date) => {
    this.setState({
      endDate: date
    })
  }

render(){
  console.log(this.state.endDate._d.toDateString())
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={null} type="text" className="form-control" placeholder="Trip Title" value={
                null
              }/>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStart}
              />
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEnd}
            />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={null}>Submit</button>
        </div>
      </div>

    )
  }
}

export default TripForm
