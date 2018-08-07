import React, {Component} from 'react';
import Parties from '../Parties';
import CreateParty from '../CreateParty';
import Edit from '../Edit';

class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      parties:[],
      // showEdit:[],
      // editPartyId: null,
      // partyToEdit:{
      //   name:'',
      //   date:'',
      //   location:'',
      //   zip:'',
      //   information:''
      //
      //     }
    }
  }

  componentDidMount(){
      this.getParties().then((parties) => {
      this.setState({
          parties: parties.data
        })
      }).catch((err) => {
        console.log(err)
      });

    }

    getParties = async () => {
      const parties = await fetch('http://localhost:9000/api/v1/main');
      const parsedParties = parties.json();
      return parsedParties
    }

    addParty = async (party, e) => {
      e.preventDefault();
      try {
        const CreateParty = await fetch('http://localhost:9000/api/v1/main', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(party),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const parsedResponse = await CreateParty.json();
        console.log(parsedResponse,'this is parsedResponse');
        this.setState({parties: [...this.state.parties, parsedResponse.data]})
      } catch(err){
        console.log(err,'this is the error');
      }

    }
    // deleteMovie = async (id, e) => {
    //   e.preventDefault();
    //   console.log('deleteMoive function is being called, this is the id: ', id);
    //
    //   try {
    //
    //     const deleteMovie = await fetch('http://localhost:9000/api/v1/movies/' + id, {
    //       method: 'DELETE'
    //       credentials: 'include',
    //
    //     });
    //
    //     const parsedResponse = await deleteMovie.json();
    //
    //     // filter returns a brand a new array based on some condition
    //     // does movie._id
    //     if(parsedResponse.status === 200){
    //       this.setState({movies: this.state.movies.filter((movie, i) => movie._id !== id)});
    //     } else {
    //       // leave some message there was a problem
    //     }
    //   }catch(err){
    //     console.log(err);
    //   }
    //
    //   // MAke this function work by making a delete call, Look up fetch delete
    //
    //   // then setState after you get your response
    // }
    // showModal = (id) => {
    //
    //   // find method returns the object that meets the condition,
    //   // and so the movieToEdit variable will contain the movie want to edit (the actual)
    //   // object
    //   const movieToEdit = this.state.movies.find((movie) => movie._id === id);
    //
    //
    //   this.setState({
    //     showEdit: true,
    //     editMovieId: id,
    //     movieToEdit: movieToEdit
    //   });
    //
    // }
    // closeAndEdit = async (e) => {
    //    e.preventDefault();
    //
    //    // Try to make the fetch put call
    //    try {
    //
    //     const editMovie = await fetch('http://localhost:9000/api/v1/movies/' + this.state.editMovieId, {
    //       method: 'PUT',
    //       credentials: 'include',
    //
    //       body: JSON.stringify(this.state.movieToEdit),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //
    //
    //     const parsedResponse = await editMovie.json();
    //
    //     // Functional and immutable way of accomplishing this task
    //     const editedMovieArray = this.state.movies.map((movie) => {
    //
    //       if(movie._id === this.state.editMovieId){
    //
    //         movie.title = parsedResponse.data.title;
    //         movie.description = parsedResponse.data.description
    //
    //       }
    //
    //       return movie
    //     });
    //
    //     this.setState({
    //       movies: editedMovieArray,
    //       showEdit: false
    //     });
    //
    //
    //
    //    } catch(err) {
    //     console.log(err)
    //    }
    //
    //    // after you get the updated OBject returned from your api
    //    // set you State
    //
    // }
    // handleFormChange = (e) => {
    //
    //   // const state = this.state;
    //   // state.movieToEdit[e.target.name] = e.target.value;
    //   // this.setState(state);
    //
    //
    //   // Spread operator
    //   this.setState({
    //     movieToEdit: {
    //       ...this.state.movieToEdit,
    //       [e.target.name]: e.target.value
    //     }
    //   });
    // }
    render(){
      console.log(this.state,'this is the state for maincontainer');
      return (
        <div>
           <Parties parties={this.state.parties} />
          <CreateParty addParty={this.addParty} />

          {/* {this.state.showEdit ? <EditMovie closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} movieToEdit={this.state.movieToEdit}/> : null} */}
        </div>
      )
    }
  }


  export default MainContainer;
