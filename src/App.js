import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify/Spotify';


function App() {

const [results, setResults] = useState([]);

const [playlist, setPlaylist] = useState([
  {
    name: 'name1',
    artist: 'artist1',
    album: 'album1',
    id: 1,
    uri: 'uri1'
  },
  {
    name: 'name2',
    artist: 'artist2',
    album: 'album2',
    id: 2,
    uri: 'uri2'
  }
]);

const [trackURIs, setTrackURIs] = useState([]);

const addToPlaylist = (track) => {
  setPlaylist([track, ...playlist])
}

const removeFromPlaylist = (index) => {
  setPlaylist(playlist.filter((track, i ) => i !== index))
}

const savePlaylist = () => {
  setTrackURIs(playlist.map((track) => track.uri));
}

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar setResults={setResults} />
      <Tracklist results={results} playlist={playlist} addToPlaylist={addToPlaylist} />
      <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} onSave={savePlaylist} />
      <p>{trackURIs}</p>
      <Spotify />
    </div>
  );
}

export default App;
