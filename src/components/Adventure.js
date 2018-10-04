import React from 'react';

const Adventure = ({adventure}) =>
  <tr>
    <td>{adventure.time}</td>
    <td>{adventure.description}</td>
    <td>{adventure.neighborhood}</td>
    <td>notes</td>
  </tr>

export default Adventure
