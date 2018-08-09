import React from 'react';
// make a dummy container that passes info from the spotify playlist search and the create parties and the login Name

// list of Parties
// create party
// edit and delete party buttons
// attach the partyID to the  spotify playlist search grab from spotify playlist search 
const Profile = (props) => {

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
      <li>
      Profile Page
      {login}
      {partyList}
      </li>
    </ul>
    )
}

export default Profile;

// gonna have the editparty link and delete party link in here for the person's profile that will have a list of parties

// show login name
// show list of parties
//
// const Profile = () => {

// grab the username and password from the database
// grab the create party by user._idt

// return {

// }
// }
// render (

// )
