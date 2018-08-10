import React from 'react';
import queryString from 'query-string'

const Parties = (props) => {
 
  
 console.log('this is props for parties',props)
  const partyList = props.parties.map((party, i) => {
    return (
      <li key={party._id}>
        <span><a href={'/spotify'} test="test">{party.name}</a></span>
        <small>{party.date}</small>
        <small>{party.location}</small>
        <small>{party.zip}</small>
        <small>{party.information}</small>
        <small>{party.playlistID}</small>
        <button onClick={props.deleteParty.bind(null,party._id)}>Delete</button>
        <button
          onClick={props.showModal.bind(null,party._id)}>Edit</button>
      </li>
      )
  });

  return (
    <ul>
      {partyList}
    </ul>
    )


}


export default Parties;
