import React,{Fragment} from 'react'

const PotentialAdventure = ({adventure}) =>
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            `${adventure.description} `
          }</h5>
        <p className="card-text">{
            `Location: ${adventure.location} Date: ${adventure.date} Time:${adventure.timeHr}:${adventure.timeMin}${adventure.ampm}`
          }</p>
          <p className="card-text">{
              `point person: ${adventure.point_person} notes: ${adventure.notes}`
            }</p>
        <button className="btn btn-primary" onClick={null}>Edit Adventure</button>
      </div>
    </div>


  </Fragment>


export default PotentialAdventure
