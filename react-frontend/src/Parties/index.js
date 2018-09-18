import React from 'react';
import queryString from 'query-string'

const Parties = (props) => {

 let partyList;
 if(props.parties === undefined) {

 } else {

 console.log('this is props for parties',props)
  partyList = props.parties.map((party, i) => {
    return (
      <div>
        <h3></h3>
      <li key={party._id}>
        <span><a href={`/spotify?spotifyURI=${party.playlistID}`} test="test"><h3>{party.name}</h3></a></span>
        {/* <small>{party.date}</small>
        <small>{party.location}</small>
        <small>{party.zip}</small>
        <small>{party.information}</small>
        <small>{party.playlistID}</small> */}
        <button
          onClick={props.showModal.bind(null,party._id)}>Edit</button>
        <button onClick={props.deleteParty.bind(null,party._id)}>Delete</button>

      </li>
    </div>
      )
  });

}
  return (
    <ul>
      {partyList}
    </ul>
    )


}


export default Parties;
