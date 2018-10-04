import React,{Fragment} from 'react'

const PotentialAdventure = ({adventure, handleAddAdventureButton}) =>
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            `${adventure.description} `
          }</h5>
        <p className="card-text">{
            `@${adventure.location} ${adventure.date} ${adventure.timeHr}:${adventure.timeMin}${adventure.ampm}`
          }</p>
          <p className="card-text">{
              `point person: ${adventure.point_person} ${adventure.notes}`
            }</p>
        <button className="btn btn-primary" onClick={()=>handleAddAdventureButton(adventure)}>Add Adventure To Itinerary</button>
      </div>
    </div>


  </Fragment>


export default PotentialAdventure
