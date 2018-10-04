import React from 'react'
import PotentialAdventure from './PotentialAdventure'


const Dreamboat = ({adventures}) =>
<div>
<h3>Potential Adventures</h3>

{adventures.map(adventure => <PotentialAdventure adventure={adventure} />)}

</div>



export default Dreamboat
