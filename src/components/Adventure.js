import React from 'react';

const Adventure = ({adventure}) =>
  <tr>
    <td>{`${adventure.date} @${adventure.timeHr}:${adventure.timeMin}${adventure.ampm}`}</td>
    <td>{adventure.description}</td>
    <td>{adventure.location}</td>
    <td>{adventure.point_person}</td>
    <td>{adventure.notes}</td>
  </tr>

export default Adventure
