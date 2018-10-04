import React from 'react'
import PotentialAdventure from './PotentialAdventure'


const Dreamboat = ({adventures, handleAddAdventureButton}) =>
<div>
<h3>Potential Adventures</h3>

{adventures.map(adventure => <PotentialAdventure adventure={adventure} handleAddAdventureButton={handleAddAdventureButton}/>)}

</div>



export default Dreamboat
