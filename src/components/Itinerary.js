import React, {Component} from 'react';
import Adventure from './Adventure'
import adventures from '../adventureData'

class Itinerary extends Component{

render(){
return (

  <table className="ui celled striped padded table">
    <h3>Itinerary</h3>
    <tbody>
      <tr>
        <th>
          <h5 className="ui center aligned header">
            Date/Time
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            Description
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            eighborhood
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            Notes
          </h5>
        </th>
      </tr>

      {adventures.adventures.map(adventure=><Adventure adventure={adventure} />)}

    </tbody>
  </table>
  )}
}
export default Itinerary
