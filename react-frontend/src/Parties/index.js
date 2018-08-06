import React from 'react';

const Parties = (props) => {

  const partyList = props.party.map((party, i) => {
    console.log(props)
    return (
      <li key={party._id}>
        <span>{party.name}</span>
        <small>{party.date}</small>
        <small>{party.location}</small>
        <small>{party.information}</small>

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
