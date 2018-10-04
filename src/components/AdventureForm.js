import React from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AdventureForm = ({pizza, handleSelect, handleTimeInput, handleNotesInput, handleLocationInput, handlePointPersonInput, handleDescriptionInput, handleSubmit, adventureDate, handleAdventureDate}) => {
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
            <input className="form-check-input" type="text" onChange={handleTimeInput} placeholder="DD/MM/YYYY"/>
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
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default AdventureForm
