import React, {Component} from 'react'
import Itinerary from './Itinerary'
import Dreamboat from './Dreamboat'
import { Grid, Image } from 'semantic-ui-react'
import AdventureForm from './AdventureForm'
import moment from 'moment'

export default class Trip extends Component{

  constructor(props){
    super(props)
    this.state={
      trips: [],
      adventures: [],
      potentialAdventures: [],
      adventureObj: { notes: "", location: "", point_person:"", description:"", date:"", category: "", timeHr: "1", timeMin:"00", ampm: "AM"},
      adventureDateObj: moment(),
    }
  }

  // componentDidMount() {
  //   fetch('')
  //     .then( r => r.json())
  //     .then(itineraryAdventures => this.setState({adventures})
  // }

  handleSubmit = () => {
    this.setState({potentialAdventures: [...this.state.potentialAdventures, this.state.adventureObj]})
  }

  handleSelect = (e) => {
    const selectInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, category: selectInput}}
    })
  }

  handleTimeHrInput = (e) => {
    const timeInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, timeHr: timeInput}}
    })
  }
  handleTimeMinInput = (e) => {
    const timeInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, timeMin: timeInput}}
    })
  }
  handleTimeAMPMInput = (e) => {
    const timeInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, ampm: timeInput}}
    })
  }

  handleNotesInput = (e) => {
    const notesInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, notes: notesInput}}
    })
  }

  handleLocationInput =  (e) => {
    const locationInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, location: locationInput}}
    })
  }

  handlePointPersonInput = (e) => {
    const pointPersonInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, point_person: pointPersonInput}}
    })
  }

  handleDescriptionInput = (e) => {
    const descriptionInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, description: descriptionInput}}
    })
  }

  handleAdventureDate = (date) => {
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, date: date._d.toDateString()}}
    })
    this.setState({adventureDateObj: date})
  }

  handleAddAdventureButton = (adventure) => {
  //   fetch(``,{
  //     method: "POST",
  //     headers: {
  //   'Content-Type': 'application/json'
  // },
  //     body: JSON.stringify(adventure)
  //   }).then( r => r.json())
  //   .then(console.log)
  console.log(adventure)
  }


  render(){
    console.log("adventureObj", this.state.adventureObj);
    return(
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <Dreamboat adventures={this.state.potentialAdventures} handleAddAdventureButton={this.handleAddAdventureButton}/>
        </Grid.Column>
        <Grid.Column>
          <Itinerary adventures={this.state.adventures}/>
          <br />
          <AdventureForm
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            handleTimeHrInput={this.handleTimeHrInput}
            handleTimeMinInput={this.handleTimeMinInput}
            handleTimeAMPMInput={this.handleTimeAMPMInput}
            handleNotesInput={this.handleNotesInput}
            handleLocationInput={this.handleLocationInput}
            handlePointPersonInput={this.handlePointPersonInput}
            handleDescriptionInput={this.handleDescriptionInput}
            handleAdventureDate={this.handleAdventureDate}
            adventureDate={this.state.adventureDateObj}
            amOrPm={this.state.adventureObj.ampm}
             />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' />

        </Grid.Column>
      </Grid.Row>
    </Grid>

)}
}
