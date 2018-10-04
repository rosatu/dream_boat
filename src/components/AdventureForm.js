import React from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AdventureForm = ({amOrPm, handleSelect, handleTimeHrInput, handleTimeMinInput, handleTimeAMPMInput, handleNotesInput, handleLocationInput, handlePointPersonInput, handleDescriptionInput, handleSubmit, adventureDate, handleAdventureDate}) => {
  return(
      <div className="form-row">
        <h3>Suggest a New Adventure</h3>
        <div className="col">
          <select onChange={handleSelect} className="form-control" value="Category">
            <option value="Breakfast/Brunch">Breakfast/Brunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Coffee">Coffee</option>
            <option value="Indoor Activity">Indoor Activity</option>
            <option value="Outdoor Activity">Outdoor Activity</option>
            <option value="Nighttime Activity">Nighttime Activity</option>
            <option value="Performance">Performance</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
              <input onChange={handleDescriptionInput} type="text" className="form-control" placeholder="Description" value={
                  null
                }/>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="text" onChange={handlePointPersonInput} placeholder="point person"/>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="text" onChange={handleLocationInput} placeholder="location"/>
          </div>
          <div className="form-check">
            <textarea className="form-check-input" type="text" onChange={handleNotesInput} placeholder="notes"/>
          </div>
          <DatePicker
            selected={adventureDate}
            onChange={handleAdventureDate}
            />
        </div>
        <div className="col">
          <select onChange={handleTimeHrInput} className="form-control" value="Category">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select onChange={handleTimeMinInput} >
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
          <input
          type="radio"
          checked={amOrPm === "AM"}
          onChange={handleTimeAMPMInput}
          value="AM"
        />
      <label>AM</label>
        <input
        type="radio"
        checked={amOrPm === "PM"}
        onChange={handleTimeAMPMInput}
        value="PM"
      />
    <label>PM</label>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default AdventureForm
