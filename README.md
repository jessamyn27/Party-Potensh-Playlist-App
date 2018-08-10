# Project-3-React-Express-API
       ------------------------------------------------------------------


### Party Potensh Apps
- Our App let's a user create a party and add in the weather, google map and a playlist from Spotify, in that playlist they can search and add songs that will directly change the playlist on Spotify. Based on the party location you can see a map for directions and the weather of that zip code on the day of the party.
- The welcome page pops up first thing, the user can either login, register, or just without either enter the Spotify URI link code that the party planner gave them so they can go directly to the party page where they can add songs, see the weather and the location of the party on the google map.

- From the welcome page the user can also choose to register or login and the app will switch to the profile page.  There a user can create a party, see their existing parties if they are already registered and have made playlists, edit party information or delete parties.  

- The user can then access the party page for each party by clicking the party name link.

- The party page displays the Spotify playlist for that party where they can search Spotify either by song or by artist and a list of 10 of either show up with an image of the album and song name where they can click "add" and it automatically adds to the playlist on Spotify.

- The party page also display the weather for the day of the party based on the zip code, as well as a google map with the location based on the address.

------------------------------------------------------------------

### Wireframes

# ![](./images/wireframe)
       ------------------------------------------------------------------

### API endpoints

Our fetch calls to our local Express API (our Database) happens in our Main Container for adding a party, getting a party, editing and deleting a party.  We also fetched calls in our login and register for just that, as well as logout the user by id using req.sessions

For Spotify we fetched for a playlist search, add song, and Spotify search

For Weather API we fetched for weather data in fahrenheit

For React Google Map API we fetched for google location and image

------------------------------------------------------------------


### MVP Overview

While your last project taught you how to get started with writing a fullstack application in JavaScript using Express, Mongoose, and Node, this project will have you building another full stack application, but this time with a React front-end.

You will build an app with three major components:

1. An API of your own design, built using Node, Express, and Mongoose, that serves JSON.
2. Front-end React code that updates the UI and makes requests to the API.
3. Consume a third Party API

---

### MVP Requirements


#### Planning Requirements/ Proposals
  - Clearly defined user stories for you MVP
  - Wireframes
  - Readme describing your API endpoints

#### Back-End Requirements
  - This app must contain a Node, Express, and some type of Database (MongoDB) on the backend API with at least 1 model. No associations are required.
  - Must have Create, Read, Update, and Destroy functionality.

#### Front-End Requirements
  - This app must use a React front end that leverages the backend API in the above requirement.
  - Must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources, using fetch.
  - Consume A third Party API

#### Deployment
  - Your API must be deployed to Heroku and your front-end must be deployed to Heroku or Surge.
  - We recommend Surge as using it to deploy is [very easy](https://daveceddia.com/deploy-create-react-app-surge/)

    > You MUST deploy your back-end and front-end separately. This assignment is to make a front end and separate back end using decoupled architecture. This will make it far easier to debug your deployed applications and manage your deployments. One way to get yourself in trouble in this project would be to attempt to follow a tutorial for MERN stack that is NOT decoupled.
---
