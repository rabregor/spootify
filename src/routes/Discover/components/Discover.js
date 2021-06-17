import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import DiscoverItem from './DiscoverBlock/components/DiscoverItem';
import '../styles/_discover.scss';
import axios from 'axios'; 
import { Credentials } from '../spotifyAPI/Credentials'; 
import CoreLayout from '../../../common/layouts/CoreLayout';
import 'animate.css';
import Player from '../../../common/components/Player';



const Dashboard = () => {

  const spotify = Credentials();  

  const [serverToken, setToken] = useState('');

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playingTrack, setPlayingTrack] = useState('');
  

    //recolectamos información de api de Spotify
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token); //Request access w/token

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {
        setGenres(genreResponse.data.categories.items); //obtenemos items dentro de categorias [funciona igual en todos]
      });
      axios('https://api.spotify.com/v1/browse/new-releases', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (releasesResponse => {
        setNewReleases(releasesResponse.data.albums.items);
      })
      axios('https://api.spotify.com/v1/browse/featured-playlists', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (playlistsResponse => {
        setPlaylists(playlistsResponse.data.playlists.items);
      });
      });  
  }, []);

return (
  <CoreLayout> 
    <div className="discover animate__fadeInRightBig">
      <DiscoverBlock text="RECENTLY RELEASED" id="released" data={newReleases} />       
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="MOODS" id="categories" data={genres} imagesKey="icons" /> 
    </div>
    <Player track={null} />

    </CoreLayout>
  );
};
export default Dashboard;

/*
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
*/

