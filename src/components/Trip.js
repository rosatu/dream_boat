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
      adventureObj: {},
      adventureDateObj: moment()
    }
  }

  handleSubmit = () => {
    console.log("POST request to /adventures")
  }

  handleSelect = (e) => {
    const selectInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, category: selectInput}}
    })
  }

  handleTimeInput = (e) => {
    const timeInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, time: timeInput}}
    })
  }

  handleNotesInput = (e) => {
    const notesInput = e.target.value
    this.setState((prevState) =>{
      return {adventureObj: {...prevState.adventureObj, note: notesInput}}
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


  render(){
    console.log("adventureObj", this.state.adventureObj);
    return(
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <Dreamboat />
        </Grid.Column>
        <Grid.Column>
          <Itinerary/>
          <br />
          <AdventureForm
            handleSelect={this.handleSelect}
            handleTimeInput={this.handleTimeInput}
            handleNotesInput={this.handleNotesInput}
            handleLocationInput={this.handleLocationInput}
            handlePointPersonInput={this.handlePointPersonInput}
            handleDescriptionInput={this.handleDescriptionInput}
            handleAdventureDate={this.handleAdventureDate}
            adventureDate={this.state.adventureDateObj}
             />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' />

        </Grid.Column>
      </Grid.Row>
    </Grid>

)}
}
